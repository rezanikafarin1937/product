import { useState } from "react";
import styles from "./Category.module.scss";

import {
  FaSliders,
  FaChevronDown,
  FaXmark,
} from "react-icons/fa6";

// Components
// import Card from "../../components/card/Card";
// import PriceRange from "../../components/priceRange/PriceRange";
// import Button from "../../components/button/Button";

const Category = () => {
  const [showFilter, setShowFilter] = useState(false);

  const products = [
    {
      id: 1,
      title: "عینک آفتابی کلاسیک",
      price: 2850000,
      image: "/images/category/clasic.jfif",
    },
    {
      id: 2,
      title: "عینک آفتابی مدرن",
      price: 3200000,
      image: "/images/category/modern.png",
    },
    {
      id: 3,
      title: "عینک آفتابی اسپرت",
      price: 2450000,
      image: "/images/category/3.jfif",
    },
    {
      id: 4,
      title: "عینک آفتابی زنانه",
      price: 3650000,
      image: "/images/category/womean.jfif",
    },
  ];

  return (
    <main className={styles.category}>

      {/* =========================
          Breadcrumb
      ========================== */}

      <nav className={styles.category__breadcrumb}>
        <a href="/">خانه</a>

        <span>/</span>

        <span>عینک آفتابی</span>
      </nav>


      {/* =========================
          Category Hero
      ========================== */}

      <section className={styles.category__hero}>

        <div className={styles.category__heroContent}>

          <span className={styles.category__subtitle}>
            مجموعه تیزبین
          </span>

          <h1>
            عینک آفتابی
          </h1>

          <p>
            مجموعه‌ای از عینک‌های آفتابی برای تکمیل استایل
            و انتخابی متناسب با سلیقه شما.
          </p>

        </div>

        <div className={styles.category__heroImage}>

            <h2 className={styles.category__heroImageText}>
                عینک آفتابی تیزبین
            </h2>

          <img
            src="/images/category/sunglasses.png"
            alt="عینک آفتابی تیزبین"
          />

        </div>

      </section>


      {/* =========================
          Toolbar
      ========================== */}

      <div className={styles.category__toolbar}>

        <button
          type="button"
          className={styles.category__filterButton}
          onClick={() => setShowFilter(true)}
        >
          <FaSliders />

          <span>
            فیلتر محصولات
          </span>
        </button>


        <div className={styles.category__result}>
          <span>
            24 محصول
          </span>
        </div>


        <div className={styles.category__sort}>

          <span>
            مرتب‌سازی:
          </span>

          <select defaultValue="newest">

            <option value="newest">
              جدیدترین
            </option>

            <option value="cheapest">
              ارزان‌ترین
            </option>

            <option value="expensive">
              گران‌ترین
            </option>

            <option value="popular">
              پرفروش‌ترین
            </option>

          </select>

          <FaChevronDown />

        </div>

      </div>


      {/* =========================
          Main Content
      ========================== */}

      <section className={styles.category__content}>


        {/* =====================
            Filter
        ====================== */}

        <aside
          className={`${styles.category__filter} ${
            showFilter ? styles.category__filterActive : ""
          }`}
        >

          <div className={styles.category__filterHeader}>

            <h2>
              فیلتر محصولات
            </h2>

            <button
              type="button"
              onClick={() => setShowFilter(false)}
              aria-label="بستن فیلتر"
            >
              <FaXmark />
            </button>

          </div>


          {/* Price */}

          <div className={styles.category__filterItem}>

            <h3>
              محدوده قیمت
            </h3>

            <div className={styles.category__price}>

              {/* PriceRange را بعداً اینجا قرار می‌دهیم */}

              <div className={styles.category__priceLine}>
                <span>۵۰۰ هزار</span>
                <span>۱۰ میلیون</span>
              </div>

            </div>

          </div>


          {/* Category */}

          <div className={styles.category__filterItem}>

            <h3>
              دسته‌بندی
            </h3>

            <label>
              <input type="checkbox" />
              عینک آفتابی
            </label>

            <label>
              <input type="checkbox" />
              عینک طبی
            </label>

            <label>
              <input type="checkbox" />
              عینک ورزشی
            </label>

            <label>
              <input type="checkbox" />
              عینک کودک
            </label>

          </div>


          {/* Color */}

          <div className={styles.category__filterItem}>

            <h3>
              رنگ
            </h3>

            <label>
              <input type="checkbox" />
              مشکی
            </label>

            <label>
              <input type="checkbox" />
              قهوه‌ای
            </label>

            <label>
              <input type="checkbox" />
              طلایی
            </label>

            <label>
              <input type="checkbox" />
              نقره‌ای
            </label>

          </div>


          <button
            type="button"
            className={styles.category__clear}
          >
            حذف فیلترها
          </button>

        </aside>


        {/* =====================
            Products
        ====================== */}

        <div className={styles.category__products}>

          {products.map((product) => (

            <article
              className={styles.category__product}
              key={product.id}
            >

              <div className={styles.category__productImage}>

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <h2>
                {product.title}
              </h2>

              <span>
                {product.price.toLocaleString("fa-IR")} تومان
              </span>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          Pagination
      ========================== */}

      <div className={styles.category__pagination}>

        <button type="button">
          قبلی
        </button>

        <button
          type="button"
          className={styles.category__paginationActive}
        >
          1
        </button>

        <button type="button">
          2
        </button>

        <button type="button">
          3
        </button>

        <button type="button">
          بعدی
        </button>

      </div>


      {/* =========================
          Mobile Overlay
      ========================== */}

      {showFilter && (
        <div
          className={styles.category__overlay}
          onClick={() => setShowFilter(false)}
        />
      )}

    </main>
  );
};

export default Category;

