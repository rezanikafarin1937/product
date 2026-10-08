import { useState, useEffect } from "react";
import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
import Card from "../components/card/Card";
import Frame from "../components/frame/Frame";
import PriceRange from "../utils/PriceRange/PriceRange";
import MyToggle from "../utils/my-toggle/MyToggle";
import ShapeFrame from "../components/shap-frame/ShapeFrame";
import styles from "./store.module.scss";

const Store = () => {
  const [selectShape, setSelectShape] = useState("");
  const [selectFrame, setSelectFrame] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000000);
  const [active, setActive] = useState(false);

  // let filters = `?color=${selectFrame}&shape=${selectShape}&min=${minPrice}&max=${maxPrice}`;
  const params = new URLSearchParams({
  color: selectFrame,
  shape: selectShape,
  min: minPrice,
  max: maxPrice,
});
  let url = active
    ? `${process.env.REACT_APP_API_URL}/api/products/filter?${params}`
    : `${process.env.REACT_APP_API_URL}/api/products`;

  console.log("in Store url = ", url);
  console.log("params =", params.toString());
console.log("url =", url);

  // useEffect(() => {
  //   setActive(false);
  //   console.log("in useEffect active  = ", active);
  // }, [selectShape, selectFrame, minPrice, maxPrice]);

  return (
    <div className="wrapper">
      <div className={styles.store}>
        <div className={styles.store__filter}>
          <div className="title-bar">
            <div className={styles.store__mainTitle}>فیلترها</div>
            <MyToggle active={active} setActive={setActive} />
          </div>
          <div className="margin-2y">
            <div className={styles.store__title}>قیمت</div>
            <PriceRange
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          <div className="margin-2y">
            <div className={styles.store__title}>رنگ فریم</div>
            <Frame selectFrame={selectFrame} setSelectFrame={setSelectFrame} />
          </div>
          <div className="margin-2y">
            <div className={styles.store__title}>شکل فریم</div>
            <ShapeFrame
              selectShape={selectShape}
              setSelectShape={setSelectShape}
            />
          </div>
        </div>
        <div className={styles.store__cards}>
          <InfiniteLoading key={url} url={`${url}`} limit="10">
            <Card />
          </InfiniteLoading>
        </div>
      </div>
    </div>
  );
};

export default Store;
