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
  const images = ["man.png", "sonwoman.png", "sonman.png"];
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      if (res) {
        setData(res?.data.slice(0, 10));
      } else {
        setData([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.home}>
      <Banner>
        {images.map((image, index) => (
          <img key={index} src={`/banner/${image}`} alt="سایت فروش عینک" />
        ))}
      </Banner>
      <div className="wrapper">
        <br />
        <h1>چرا خرید از تیزبین ؟</h1>
        <Benefits />
        <br />
        <div className={styles.home__slider}>
          <div className="title-bar">
            <h3 className="primary-title"><span style={{marginRight : "1rem"}}>محصولات پرفروش</span></h3>
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
        </div>

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
        <div className="title-bar padding-none">
          <h3 className="primary-title">دسته بندی محصولات</h3>
          <Button variant="secondary" onClick={handleClick}>
            <span>مشاهده همه</span>
            <span className="margin-x"></span>
            <Arrow width={20} height={20} color="var(--color-text-secondary)" />
          </Button>
        </div>
        <br />
        <Cats />
      </div>
    </div>
  );
};

export default Home;
