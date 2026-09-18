"use client";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import "./swiperCustom.css";

const MySwiperSlider = ({ data }) => {
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={5}
        spaceBetween={15}
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
            slidesPerView: 5,
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
        {data?.map((d, index) => (
          <SwiperSlide key={index}>
            <Link to={`/product-details/${d.id}`}>
              <Card {...d}  />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MySwiperSlider;