import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import MySwiperSlider from "../../utils/swiper-slider/SwiperSlider";
import Banner from "../../components/banner/Banner";
import Benefits from "../../components/Benefit/Benefits/Benefits";
import Cats from "../../components/cats/Cats";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Arrow from "../../icons/arrow/Arrow";
import ScrollReveal from "../../utils/ScrollReveal/ScrollReveal";
import Heading from "../../components/heading/Heading";
import Accessories from "../../components/accessories/Accessories";
import styles from "./home.module.scss";

const Home = () => {
  // const images = ["man.png", "sonwoman.png", "sonman.png"];

const images = [
  {
    src: "man.png",
    alt: "مجموعه عینک‌های مردانه تیزبین",
  },
  {
    src: "sonwoman.png",
    alt: "مدل‌های عینک زنانه تیزبین",
  },
  {
    src: "sonman.png",
    alt: "مدل‌های متنوع عینک در فروشگاه تیزبین",
  },
];

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };

  // SEO metadata
  useEffect(() => {
    document.title = "تیزبین | خرید آنلاین عینک مردانه، زنانه، طبی و آفتابی";

    const metaTags = [
      {
        name: "description",
        content:
          "در فروشگاه اینترنتی تیزبین انواع عینک مردانه، زنانه، طبی، آفتابی و ورزشی را مشاهده کنید و مدل موردنظر خود را انتخاب کنید.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "تیزبین | فروشگاه اینترنتی عینک",
      },
      {
        property: "og:description",
        content:
          "خرید و مشاهده انواع عینک مردانه، زنانه، طبی، آفتابی و ورزشی از فروشگاه اینترنتی تیزبین.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "fa_IR",
      },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;

      let meta = document.head.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");

        if (name) {
          meta.setAttribute("name", name);
        } else {
          meta.setAttribute("property", property);
        }

        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();

        if (res?.data && Array.isArray(res.data)) {
          setData(res.data.slice(0, 10));
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
        setData([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.home}>
      <Banner>
        {images.map((image, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/banner/${image.src}`}
            alt={image.alt}
          />
        ))}
      </Banner>

      <div className="wrapper">
        <br />
        <h1>
          <span>فروشگاه اینترنتی تیزبین</span>
          <strong className={styles.home__smallTitle}>خرید انواع عینک</strong>
        </h1>

        <Benefits />
        <br />
        <br />
        <section className={styles.home__slider}>
          <div className="title-bar">
            <h2 className="primary-title color-text-secondary">
              <span style={{ marginRight: "1rem" }}>محصولات پرفروش</span>
            </h2>
            <Button variant="secondary" onClick={handleClick}>
              <span>مشاهده همه</span>
              <span className="margin-x"></span>
              <Arrow
                width={20}
                height={20}
                color="var(--color-text-secondary)"
              />
            </Button>
          </div>
          <MySwiperSlider data={data} />
        </section>

        <br />
        <Heading
          title="محصولات شگفت انگیز"
          linkTitle="مشاهده همه "
          link="/store"
        />
        <br />
        {/* <ScrollReveal> */}
        <Accessories />
        {/* </ScrollReveal> */}
        <br />
        <br />
        <section className={styles.home__category}>
          <div className="title-bar padding-none margin-bottom">
            <h2 className="primary-title color-text-secondary">
              <span style={{ marginRight: "1rem" }}> دسته بندی محصولات </span>
            </h2>
            <Button variant="secondary" onClick={handleClick}>
              <span>مشاهده همه</span>
              <span className="margin-x"></span>
              <Arrow width={15} height={15} color="var(--color-primary-dark)" />
            </Button>
          </div>
          <Cats />
        </section>
        <br />
      </div>
    </div>
  );
};

export default Home;

