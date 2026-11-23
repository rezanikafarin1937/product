
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./Accessories.module.scss";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(`${process.env.PUBLIC_URL}/database/products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Products data could not be loaded");
        }

        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          const accessories = data.filter(
            (product) => Number(product.catId) === 6
          );

          setProducts(accessories);
        }
      })
      .catch((err) => {
        console.error("Accessories Error =", err);

        if (isMounted) {
          setError(true);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className={`wrapper ${styles.accessories}`}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="مسیر صفحه">
        <Link to="/">صفحه اصلی</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">لوازم جانبی</span>
      </nav>

      {/* Hero */}
      <section
        className={styles.hero}
        aria-labelledby="accessories-title"
      >
        <div className={styles.hero__content}>
          <span className={styles.hero__subtitle}>
            TIZBIN ACCESSORIES
          </span>

          <h1
            id="accessories-title"
            className={styles.hero__title}
          >
            مراقبت از عینک،
            <br />
            توجه به جزئیات
          </h1>

          <p className={styles.hero__text}>
            عینک شما بخشی از استایل و زندگی روزمره شماست.
            با لوازم جانبی کاربردی تیزبین، از عینک خود بهتر
            مراقبت کنید و تجربه‌ای کامل‌تر داشته باشید.
          </p>

          <a
            href="#accessories-products"
            className={styles.hero__button}
          >
            مشاهده محصولات
            <span aria-hidden="true">←</span>
          </a>
        </div>

        <div className={styles.hero__image}>
          <img
            src={`${process.env.PUBLIC_URL}/images/103/1.webp`}
            alt="جعبه محافظ عینک از مجموعه لوازم جانبی تیزبین"
            width="370"
            height="370"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.intro}>
        <span className={styles.intro__subtitle}>
          انتخابی برای مراقبت بهتر
        </span>

        <h2 className={styles.intro__title}>
          لوازم جانبی عینک؛ کوچک اما کاربردی
        </h2>

        <p className={styles.intro__text}>
          از نگهداری و تمیز کردن لنز گرفته تا تنظیم و محافظت
          از فریم، لوازم جانبی مناسب به افزایش راحتی استفاده
          و نگهداری بهتر از عینک کمک می‌کنند.
        </p>
      </section>

      {/* Products */}
      <section
        id="accessories-products"
        className={styles.productsSection}
        aria-labelledby="products-title"
      >
        <div className={styles.productsSection__heading}>
          <div>
            <span className={styles.productsSection__subtitle}>
              TIZBIN COLLECTION
            </span>

            <h2
              id="products-title"
              className={styles.productsSection__title}
            >
              محصولات لوازم جانبی
            </h2>
          </div>

          {!loading && !error && (
            <span className={styles.productsSection__count}>
              {products.length.toLocaleString("fa-IR")} محصول
            </span>
          )}
        </div>

        {loading && (
          <div className={styles.message} role="status">
            در حال بارگذاری محصولات...
          </div>
        )}

        {error && (
          <div className={styles.message} role="alert">
            دریافت اطلاعات محصولات با مشکل مواجه شد.
            لطفاً دوباره تلاش کنید.
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className={styles.message}>
            در حال حاضر محصولی در این دسته‌بندی وجود ندارد.
          </div>
        )}

        {!loading && !error && products.length > 0 && (
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
      </section>

      {/* Care section */}
      <section className={styles.care}>
        <div className={styles.care__content}>
          <span className={styles.care__subtitle}>
            TIZBIN CARE
          </span>

          <h2 className={styles.care__title}>
            از عینک خود بهتر مراقبت کنید
          </h2>

          <p className={styles.care__text}>
            نگهداری صحیح، تمیز کردن اصولی لنز و استفاده از
            جعبه محافظ مناسب، به حفظ ظاهر و کیفیت عینک شما
            کمک می‌کند.
          </p>

          <Link to="/" className={styles.care__link}>
            بازگشت به فروشگاه
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Accessories;
