
import CatCard from "../catCard/CatCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import styles from "./cats.module.scss";

const cats = [
  {
    title: "مردانه",
    image: "../../../cats/man.png",
    description: "مشاهده محصولات",
    link: "/search?title=مردانه",
  },
  {
    title: "زنانه",
    image: "../../../cats/womean.png",
    description: "مشاهده محصولات",
    link: "/search?title=زنانه",
  },
  {
    title: "بچگانه",
    image: "../../../cats/child.png",
    description: "مشاهده محصولات",
    link: "/search?title=بچگانه",
  },
  {
    title: "طبی",
    image: "../../../cats/tebi.png",
    description: "مشاهده محصولات",
    link: "/search?title=طبی",
  },
  {
    title: "آفتابی",
    image: "../../../cats/Aftabi.png",
    description: "مشاهده محصولات",
    link: "/search?title=آفتابی",
  },
  {
    title: "ورزشی",
    image: "../../../cats/varzeshi.png",
    description: "مشاهده محصولات",
    link: "/search?title=ورزشی",
  },
];

const Cats = () => {
  return (
    <div className={styles.cats}>
      <Swiper
        dir="rtl"
        slidesPerView={6}
        spaceBetween={16}
        modules={[Navigation, Autoplay]}
        className="mySwiper sample-slider"
        breakpoints={{
          320: { slidesPerView: 1 },
          375: { slidesPerView: 1 },
          425: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1440: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        role="region"
        aria-label="دسته‌بندی محصولات عینک تیزبین"
      >
        {cats.map((cat) => (
          <SwiperSlide key={cat.title}>
            <Link
              to={cat.link}
              title={`مشاهده عینک ${cat.title}`}
              aria-label={`مشاهده محصولات عینک ${cat.title}`}
            >
              <CatCard
                title={`عینک ${cat.title}`}
                description={cat.description}
                image={cat.image}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cats;
