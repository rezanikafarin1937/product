
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card/Card";
import Pagination from "../../utils/pagination/Pagination";
import sunglass from "./sunglass.png";
import styles from "./search.module.scss";

const Search = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  // شماره صفحه
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  // تعداد محصولات در هر صفحه
  const per_page = Math.max(
    1,
    Number(searchParams.get("per_page")) || 10
  );

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      if (!title.trim()) {
        setProducts([]);
        setPagination({});
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.PUBLIC_URL}/database/products.json`
        );

        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const allProducts = await response.json();

        // جستجو بر اساس عنوان
        const filteredProducts = allProducts.filter((product) =>
          product.title.toLowerCase().includes(title.trim().toLowerCase())
        );

        // محاسبه صفحه‌بندی
        const total = filteredProducts.length;
        const pages = Math.ceil(total / per_page);

        // محدود کردن صفحه در صورت خارج بودن از محدوده
        const currentPage = Math.min(page, Math.max(pages, 1));

        const start = (currentPage - 1) * per_page;
        const end = start + per_page;

        const currentProducts = filteredProducts.slice(start, end);

        if (isMounted) {
          setProducts(currentProducts);

          setPagination({
            total,
            pages,
            next: currentPage < pages ? currentPage + 1 : null,
            prev: currentPage > 1 ? currentPage - 1 : null,
            first: 1,
            last: pages,
          });
        }
      } catch (error) {
        console.error("Search Error =", error);

        if (isMounted) {
          setProducts([]);
          setPagination({});
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, [title, page, per_page]);

  return (
    <div className="wrapper">
      <div className={styles.products__bar}>
        <div>
          <i>
            <h1>فروشگاه تیزبین</h1>
            <h2 className={styles.products__title}>
              نتایج جستجو برای عینک {title}
            </h2>
          </i>
        </div>

        <div className={styles.products__sunglass}>
          <img
            src={sunglass}
            alt="فروشگاه اینترنتی فروش عینک طبی و آفتابی"
          />
        </div>
      </div>

      <div className={styles.products__titleBar}>
        <h3>
          {pagination.total > 0
            ? `تیزبین ${pagination.total.toLocaleString("fa")} محصول را برای شما پیدا کرد`
            : "تیزبین؛ زیبایی را واضح‌تر ببین."}
        </h3>

        <Pagination
          per_page={per_page}
          next={pagination.next}
          prev={pagination.prev}
          pages={pagination.pages}
          last={pagination.last}
          first={pagination.first}
          path="search"
          searchValue={title}
          search="title"
        />
      </div>

      {loading ? (
        <div className={styles.loading}>
          در حال جستجو...
        </div>
      ) : products.length === 0 ? (
        <p>محصولی پیدا نشد.</p>
      ) : (
        <div className={styles.products}>
          {products.map((product) => (
            <Card
              key={product.id}
              {...product}
              state={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
