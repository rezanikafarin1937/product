import { useEffect, useState } from "react";
import {getProducts} from "../../services/api";
import MySwiperSlider from "../../utils/swiper-slider/SwiperSlider";
import Banner from "../../components/banner/Banner";
import Benefits from "../../components/Benefit/Benefits/Benefits";
import Cats from "../../components/cats/Cats";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import styles from "./home.module.scss";

const Home = () => {
  const images = ["man.png", "woman.png"];
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    getProducts().then(res=>{
      if(res){
        setData(res.data.data)
      }
    })
  },[])

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
        <MySwiperSlider data={data}/>
        <br />
      </div>
    </div>
  );
};

export default Home;
