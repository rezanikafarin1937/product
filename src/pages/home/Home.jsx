import Card from "../../components/card/Card";
import InfiniteLoading from "../../utils/infiniteLoading/InfiniteLoading";
import Banner from "../../components/banner/Banner";

import styles from "./home.module.scss";
import Benefits from "../../components/Benefit/Benefits/Benefits";

const Home = () => {
  const images= ["man.png", "woman.png"];
  return (
    <div className={styles.homeCards}>
      <Banner>
        {images.map((image,index) => (
           <img  key={index} src={`/banner/${image}`} alt="سایت فروش عینک" />
        ))}
      </Banner>
      <Benefits/>
      {/* <div className="wrapper">
        <InfiniteLoading
          url={`${process.env.REACT_APP_API_URL}/api/products`}
          limit="10"
        >
          <Card />
        </InfiniteLoading>
      </div> */}
    </div>
  );
};

export default Home;
