import { useState } from "react";
import styles from "./priceRange.module.scss";

const PriceRange = ({
  min = 0,
  max = 50000000,
  step = 100000,
}) => {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);

    if (value < maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);

    if (value > minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className={styles.priceRange}>

      <div className={styles.values}>
        <span>
          {minPrice.toLocaleString("fa-IR")} تومان
        </span>

        <span>
          {maxPrice.toLocaleString("fa-IR")} تومان
        </span>
      </div>

      <div className={styles.slider}>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minPrice}
          onChange={handleMinChange}
          className={styles.range}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxPrice}
          onChange={handleMaxChange}
          className={styles.range}
        />

      </div>

    </div>
  );
};

export default PriceRange;