import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import MySwiperSlider from "../../utils/swiper-slider/SwiperSlider";
import Banner from "../../components/banner/Banner";
import Benefits from "../../components/Benefit/Benefits/Benefits";
import Cats from "../../components/cats/Cats";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import ArrowButton from "../../components/arrow-button/ArrowButton";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

const Home = () => {
  const images = ["man.png", "woman.png"];
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  }

  useEffect(() => {
    getProducts().then((res) => {
      if (res) {
        setData(res.data.data);
      }
    });
  }, []);

  return (
    <div className={styles.homeCards}>
      <Banner>
        {images.map((image, index) => (
          <img key={index} src={`/banner/${image}`} alt="سایت فروش عینک" />
        ))}
      </Banner>
      <div className="wrapper">
        <Benefits />
        <br />
        <Cats />
        <br />
        <SpecialOffer />
        <br />
        <div className="ltr">
          <ArrowButton title="مشاهده محصولات" onClick={handleClick} />
        </div>
        <MySwiperSlider data={data} />
        <br />
      </div>
    </div>
  );
};

export default Home;
