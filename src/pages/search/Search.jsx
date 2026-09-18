import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../../components/card/Card";
import Pagination from "../../utils/pagination/Pagination";

import styles from "./search.module.scss";

const Search = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  // شماره صفحه را از URL می‌گیریم
  const page = Number(searchParams.get("page")) || 1;

  // تعداد محصولات در هر صفحه
  const per_page = Number(searchParams.get("per_page")) || 10;

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) {
      setProducts([]);
      setPagination({});
      return;
    }

    const getProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/search?title=${encodeURIComponent(
            title,
          )}&page=${page}&per_page=${per_page}`,
        );

        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const result = await response.json();

        console.log("Result in Search", result);

        setProducts(result.data);

        setPagination(result.pagination);
      } catch (error) {
        console.log("Search Error =", error);

        setProducts([]);
        setPagination({});
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [title, page, per_page]);

  if (loading) {
    return <div>در حال جستجو...</div>;
  }

  return (
    <div className="wrapper">
      <h1>نتایج جستجو برای: {title}</h1>

      {products.length === 0 ? (
        <p>محصولی پیدا نشد.</p>
      ) : (
        <div className={styles.products}>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>
      )}

      <br />
      <div style={{ padding: "2rem",}}>
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
    </div>
  );
};

export default Search;

