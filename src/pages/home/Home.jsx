import Banner from "../../components/banner/Banner";
import Benefits from "../../components/Benefit/Benefits/Benefits";
import Cats from "../../components/cats/Cats";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import styles from "./home.module.scss";

const Home = () => {
  const images = ["man.png", "woman.png"];
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
      </div>
    </div>
  );
};

export default Home;
