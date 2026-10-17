import CatCard from "../catCard/CatCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import styles from "./cats.module.scss";

const Cats = () => {
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={6}
        spaceBetween={16}
        // modules={[Pagination]}
        modules={[Navigation]}
        className="mySwiper sample-slider"
        breakpoints={{
          320: { slidesPerView: 1 },
          375: { slidesPerView: 1 },
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1440: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
      >
        <div className={styles.cats}>
          <SwiperSlide>
            <Link to="/category">
              <CatCard
                title="عینک مردانه"
                description="مشاهده محصولات"
                image="../../../cats/man.png"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <CatCard
                title="عینک زنانه"
                description="مشاهده محصولات"
                image="../../../cats/womean.png"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <CatCard
                title="عینک بچگانه"
                description="مشاهده محصولات"
                image="../../../cats/child.png"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <CatCard
                title="عینک ورزشی"
                description="مشاهده محصولات"
                image="../../../cats/varzeshi.png"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/category">
              <CatCard
                title="عینک طبی"
                description="مشاهده محصولات"
                image="../../../cats/tebi.png"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <CatCard
                title="عینک آفتابی"
                description="مشاهده محصولات"
                image="../../../cats/Aftabi.png"
              />
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Cats;
