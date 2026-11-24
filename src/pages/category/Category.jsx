
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

const PRODUCTS_URL = `${process.env.PUBLIC_URL}/database/products.json`;

const categories = [
  {
    id: 1,
    title: "عینک مردانه",
    keyword: "مردانه",
    image: "/cats/man.png",
    description: "مدل‌های متنوع عینک مردانه برای استایل روزمره و رسمی",
  },
  {
    id: 2,
    title: "عینک زنانه",
    keyword: "زنانه",
    image: "/cats/womean.png",
    description: "انواع فریم عینک زنانه با طراحی‌های زیبا و متنوع",
  },
  {
    id: 3,
    title: "عینک بچگانه",
    keyword: "بچگانه",
    image: "/cats/child.png",
    description: "مدل‌های عینک مناسب کودکان با طراحی‌های متنوع",
  },
  {
    id: 4,
    title: "عینک طبی",
    keyword: "طبی",
    image: "/cats/tebi.png",
    description: "فریم‌های عینک طبی برای استفاده روزانه و راحتی بیشتر",
  },
  {
    id: 5,
    title: "عینک آفتابی",
    keyword: "آفتابی",
    image: "/cats/Aftabi.png",
    description: "مدل‌های عینک آفتابی برای روزهای روشن و استفاده روزمره",
  },
  {
    id: 6,
    title: "عینک ورزشی",
    keyword: "ورزشی",
    image: "/cats/varzeshi.png",
    description: "عینک‌های ورزشی برای فعالیت‌های بدنی و فضای باز",
  },
];

const PAGE_TITLE =
  "دسته‌بندی عینک مردانه، زنانه، بچگانه، طبی و آفتابی | تیزبین";

const PAGE_DESCRIPTION =
  "در فروشگاه اینترنتی تیزبین دسته‌بندی انواع عینک مردانه، زنانه، بچگانه، طبی، آفتابی و ورزشی را مشاهده کنید و مدل موردنظر خود را پیدا کنید.";

const Category = () => {
  const [counts, setCounts] = useState({});
  const [productsLoaded, setProductsLoaded] = useState(false);

  // دریافت تعداد محصولات هر دسته
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const products = await response.json();

        const result = {};

        categories.forEach((category) => {
          result[category.keyword] = products.filter((product) =>
            (product.title || "")
              .toLowerCase()
              .includes(category.keyword.toLowerCase())
          ).length;
        });

        setCounts(result);
        setProductsLoaded(true);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Category Products Error:", error);
          setProductsLoaded(false);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  // SEO metadata and structured data
  useEffect(() => {
    const canonicalUrl =
      `${window.location.origin}${window.location.pathname}`;

    const publicBaseUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

    const absoluteUrl = (path) =>
      `${window.location.origin}${publicBaseUrl}${path}`;

    const setMeta = (selector, attribute, value, content) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setCanonical = (url) => {
      let link = document.head.querySelector(
        'link[rel="canonical"]'
      );

      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }

      link.setAttribute("href", url);
    };

    document.title = PAGE_TITLE;

    setMeta(
      'meta[name="description"]',
      "name",
      "description",
      PAGE_DESCRIPTION
    );

    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      "index, follow, max-image-preview:large"
    );

    setMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      PAGE_TITLE
    );

    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      PAGE_DESCRIPTION
    );

    setMeta(
      'meta[property="og:type"]',
      "property",
      "og:type",
      "website"
    );

    setMeta(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl
    );

    setMeta(
      'meta[property="og:locale"]',
      "property",
      "og:locale",
      "fa_IR"
    );

    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary"
    );

    setMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      PAGE_TITLE
    );

    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      PAGE_DESCRIPTION
    );

    setCanonical(canonicalUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          url: canonicalUrl,
          inLanguage: "fa-IR",
          mainEntity: {
            "@type": "ItemList",
            name: "دسته‌بندی محصولات عینک تیزبین",
            numberOfItems: categories.length,
            itemListElement: categories.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: category.title,
              description: category.description,
              url: absoluteUrl(
                `/search?title=${encodeURIComponent(category.keyword)}`
              ),
            })),
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "خانه",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "دسته‌بندی محصولات",
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    let script = document.getElementById(
      "category-structured-data"
    );

    if (!script) {
      script = document.createElement("script");
      script.id = "category-structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);

    return () => {
      const currentScript = document.getElementById(
        "category-structured-data"
      );

      if (currentScript) {
        currentScript.remove();
      }
    };
  }, []);

  return (
    <main className={styles.category}>
      <div className="wrapper">

        {/* Breadcrumb */}
        <nav
          className={styles.breadcrumb}
          aria-label="مسیر صفحه"
        >
          <Link to="/">خانه</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">
            دسته‌بندی محصولات
          </span>
        </nav>

        {/* Page introduction */}
        <header className={styles.category__header}>
          <div className={styles.category__headerContent}>
            <span className={styles.category__eyebrow}>
              مجموعه محصولات تیزبین
            </span>

            <h1>
              دسته‌بندی انواع عینک در فروشگاه تیزبین
            </h1>

            <p>
              در فروشگاه اینترنتی تیزبین می‌توانید انواع عینک
              مردانه، زنانه، بچگانه، طبی، آفتابی و ورزشی را
              بررسی کنید. دسته‌بندی موردنظر خود را انتخاب کنید
              تا محصولات مرتبط را مشاهده کنید.
            </p>

            <Link
              to="/store"
              className={styles.category__headerLink}
            >
              مشاهده همه محصولات
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          <div className={styles.category__headerImage}>
            <img
              src={`${process.env.PUBLIC_URL}/cats/Aftabi.png`}
              alt="نمونه‌ای از عینک‌های آفتابی فروشگاه تیزبین"
              width="400"
              height="300"
              fetchPriority="high"
            />
          </div>
        </header>

        {/* Category list */}
        <section
          className={styles.category__section}
          aria-labelledby="categories-title"
        >
          <div className={styles.category__sectionHeading}>
            <div>
              <span>انتخاب آسان‌تر</span>

              <h2 id="categories-title">
                دسته‌بندی محصولات عینک
              </h2>

              <p>
                گروه موردنظر خود را انتخاب کنید و محصولات آن را
                ببینید.
              </p>
            </div>

            <span className={styles.category__number}>
              ۶ دسته‌بندی
            </span>
          </div>

          <div className={styles.category__list}>
            {categories.map((category) => (
              <Link
                to={`/search?title=${encodeURIComponent(category.keyword)}`}
                key={category.id}
                className={styles.category__card}
                aria-label={`مشاهده محصولات ${category.title}`}
              >
                <div className={styles.category__image}>
                  <img
                    src={`${process.env.PUBLIC_URL}${category.image}`}
                    alt={category.title}
                    width="300"
                    height="220"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className={styles.category__cardContent}>
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <div className={styles.category__cardFooter}>
                    <span>
                      {productsLoaded
                        ? `${(counts[category.keyword] || 0).toLocaleString("fa")} محصول`
                        : "مشاهده محصولات"}
                    </span>

                    <span
                      className={styles.category__arrow}
                      aria-hidden="true"
                    >
                      ←
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section
          className={styles.category__seo}
          aria-labelledby="category-guide-title"
        >
          <h2 id="category-guide-title">
            راهنمای انتخاب عینک مناسب
          </h2>

          <p>
            برای انتخاب عینک مناسب، ابتدا باید نوع استفاده خود
            را مشخص کنید. عینک طبی برای اصلاح عیوب انکساری و
            استفاده روزانه انتخاب می‌شود. در انتخاب عینک آفتابی
            نیز توجه به محافظت در برابر اشعه فرابنفش اهمیت دارد.
          </p>

          <h3>عینک مردانه و زنانه</h3>

          <p>
            مدل‌های مردانه و زنانه در طرح، اندازه و شکل فریم
            تنوع زیادی دارند. هنگام انتخاب فریم، علاوه بر
            ظاهر، به اندازه صورت، راحتی و تناسب عینک توجه کنید.
          </p>

          <h3>عینک بچگانه و ورزشی</h3>

          <p>
            برای کودکان، اندازه مناسب و راحتی فریم اهمیت دارد.
            در فعالیت‌های ورزشی نیز باید عینکی انتخاب شود که
            متناسب با نوع فعالیت، محکم و مناسب استفاده باشد.
          </p>

          <Link to="/store">
            مشاهده محصولات فروشگاه تیزبین
            <span aria-hidden="true"> ←</span>
          </Link>
        </section>

      </div>
    </main>
  );
};

export default Category;
