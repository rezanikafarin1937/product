import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
import Card from "../components/card/Card";
import Frame from "../components/frame/Frame";
import PriceRange from "../utils/PriceRange/PriceRange";
import Toggle from "../utils/toggle/Toggle";
import styles from "./store.module.scss";

const Store = () => {
  return (
    <div className="wrapper">
      <div className={styles.store}>
        <div className={styles.store__filter}>
          <div className={styles.store__mainTitle}>فیلترها</div>
          <div className="margin-2y">
            <div className={styles.store__title}>قیمت</div>
            <PriceRange />
          </div>
          <div className="margin-2y">
            <div className={styles.store__title}>رنگ فریم</div>
            <Frame />
          </div>
           <div className="margin-2y">
            <div className={styles.store__title}>اعمال فیلترها</div>
          <Toggle/>
          </div>
        </div>
        <div className={styles.store__cards}>
          <InfiniteLoading
            url={`${process.env.REACT_APP_API_URL}/api/products`}
            limit="10"
          >
            <Card />
          </InfiniteLoading>
        </div>
      </div>
    </div>
  );
};

export default Store;
