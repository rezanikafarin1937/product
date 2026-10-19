import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
import Card from "../components/card/Card";
import Frame from "../components/frame/Frame";
import PriceRange from "../utils/PriceRange/PriceRange";
import MyToggle from "../utils/my-toggle/MyToggle";
import ShapeFrame from "../components/shap-frame/ShapeFrame";
import Usage from "../components/usage/Usage";
import CloseIcon from "../icons/close-icon/CloseIcon";
import sunglass from "./sunglass.png";
import styles from "./store.module.scss";

const Store = () => {
  const [length, setLength] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectShape, setSelectShape] = useState(
    searchParams.get("shape") || "",
  );

  const [selectFrame, setSelectFrame] = useState(
    searchParams.get("color") || "",
  );

  const [selectUsage, setSelectUsage] = useState(
    searchParams.get("usage") || "",
  );

  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("min")) || 0,
  );

  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("max")) || 50000000,
  );

  const [isFilter, setIsFilter] = useState(
    searchParams.get("filter") === "true",
  );

  const [text, setText] = useState(
    `نتایج جستجو برای رنگ ${selectFrame ? selectFrame : ""} > شکل ${selectShape ? selectShape : ""} موارد استفاده - ${selectUsage ? selectUsage : ""}`,
  );

  const params = new URLSearchParams({
    color: selectFrame,
    shape: selectShape,
    usage: selectUsage,
    min: minPrice,
    max: maxPrice,
  });

  const apiUrl = isFilter
    ? `${process.env.REACT_APP_API_URL}/api/products/filter?${params.toString()}`
    : `${process.env.REACT_APP_API_URL}/api/products`;

  useEffect(() => {
    if (isFilter) {
      setSearchParams({
        filter: "true",
        color: selectFrame,
        shape: selectShape,
        usage: selectUsage,
        min: minPrice.toString(),
        max: maxPrice.toString(),
      });
    } else {
      setSearchParams({});
    }
    setText(
      `نتایج جستجو برای   ${selectFrame ? "- رنگ  " + selectFrame : ""}   ${selectShape ? "- شکل  " + selectShape : ""} ${selectUsage ? "- مورد استفاده  " + selectUsage : ""}`,
    );
  }, [
    isFilter,
    selectFrame,
    selectShape,
    selectUsage,
    minPrice,
    maxPrice,
    setSearchParams,
  ]);

  const [isFilterMobile, setIsFilterMobile] = useState(false);

  const handelClickFilter = () => {
    setIsFilterMobile(!isFilterMobile);
  };

  return (
    <div className="wrapper">
      <div className={styles.store__bar}>
        {/* mobile & tablet  */}
        <div className={styles.store__mobile}>
          <div>
            <div onClick={handelClickFilter}>فیلترها</div>
            {isFilterMobile ? (
              <div
                className={styles.store__icon}
                onClick={() => {
                  setIsFilterMobile(false);
                }}
              >
                <CloseIcon color="var(--color-text)" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={`${isFilterMobile ? "margin-2y" : ""}`}></div>

          <div
            className={`${styles.store__mobileFilter} ${isFilterMobile ? styles.store__isFilter : styles.store__noFilter}`}
          >
            <div className={styles.store__myTitleBar}>
              <div className={styles.store__mainTitle}>اعمال فیلترها</div>
              <div>
                <MyToggle isFilter={isFilter} setIsFilter={setIsFilter} />
              </div>
            </div>
            <br />

            <section className="margin-y">
              <div className={styles.store__myTitleBar}>
                <span className={styles.store__title}>قیمت</span>
                <span
                  className={styles.store__icon}
                  onClick={() => {
                    setMinPrice(0);
                    setMaxPrice(50000000);
                  }}
                >
                  <CloseIcon color="var(--color-text)" />
                </span>
              </div>

              <PriceRange
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
            </section>

            <section className="margin-y">
              <div className={styles.store__title}>
                <div className={styles.store__myTitleBar}>
                  <span>رنگ فریم</span>
                  <span
                    className={styles.store__icon}
                    onClick={() => setSelectFrame("")}
                  >
                    <CloseIcon color="var(--color-text)" />
                  </span>
                </div>
              </div>

              <Frame
                selectFrame={selectFrame}
                setSelectFrame={setSelectFrame}
              />
            </section>

            <section className="margin-y">
              <div className={styles.store__myTitleBar}>
                <span className={styles.store__title}>شکل فریم</span>
                <span
                  className={styles.store__icon}
                  title="حذف"
                  onClick={() => setSelectShape("")}
                >
                  <CloseIcon color="var(--color-text)" />
                </span>
              </div>
              <ShapeFrame
                selectShape={selectShape}
                setSelectShape={setSelectShape}
              />
            </section>

            <section className="margin-y">
              <div className={styles.store__myTitleBar}>
                <span className={styles.store__title}>استفاده</span>
                <span
                  className={styles.store__icon}
                  title="حذف"
                  onClick={() => setSelectUsage("")}
                >
                  <CloseIcon color="var(--color-text)" />
                </span>
              </div>
              <Usage
                selectUsage={selectUsage}
                setSelectUsage={setSelectUsage}
              />
            </section>
          </div>
        </div>
        {/* mobile & tablet  end */}

        <div>
          <i>
            <h1>فروشگاه تیزبین</h1>
            <h3>
              <span>دسته بندی</span>
              <span> {selectUsage} </span>
              <span> - </span>
              <span>شکل فریم</span>
              <span> {selectShape}</span>
              <span> - </span>
              <span>رنگ فریم</span>
              <span> {selectFrame} </span>
            </h3>
          </i>
        </div>
        <div className={styles.store__sunglass}>
          <img src={sunglass} alt="فروشگاه اینترنتی فروش عینک طبی و آفتابی" />
        </div>
      </div>

      {/* desktop */}
      <div className={styles.store}>
        <div className={styles.store__filter}>
          <div className="title-bar">
            <div className={styles.store__mainTitle}>فیلترها</div>

            <MyToggle isFilter={isFilter} setIsFilter={setIsFilter} />
          </div>

          <section className="margin-y">
            <div className="title-bar padding-none">
              <span className={styles.store__title}>قیمت</span>
              <span
                className={styles.store__icon}
                onClick={() => {
                  setMinPrice(0);
                  setMaxPrice(50000000);
                }}
              >
                <CloseIcon color="var(--color-text)" />
              </span>
            </div>

            <PriceRange
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </section>

          <section className="margin-y">
            <div className={styles.store__title}>
              <div className="title-bar padding-none">
                <span>رنگ فریم</span>
                <span
                  className={styles.store__icon}
                  onClick={() => setSelectFrame("")}
                >
                  <CloseIcon color="var(--color-text)" />
                </span>
              </div>
            </div>

            <Frame selectFrame={selectFrame} setSelectFrame={setSelectFrame} />
          </section>

          <section className="margin-y">
            <div className="title-bar padding-none">
              <span className={styles.store__title}>شکل فریم</span>
              <span
                className={styles.store__icon}
                title="حذف"
                onClick={() => setSelectShape("")}
              >
                <CloseIcon color="var(--color-text)" />
              </span>
            </div>
            <ShapeFrame
              selectShape={selectShape}
              setSelectShape={setSelectShape}
            />
          </section>

          <section className="margin-y">
            <div className="title-bar padding-none">
              <span className={styles.store__title}>استفاده</span>
              <span
                className={styles.store__icon}
                title="حذف"
                onClick={() => setSelectUsage("")}
              >
                <CloseIcon color="var(--color-text)" />
              </span>
            </div>
            <Usage selectUsage={selectUsage} setSelectUsage={setSelectUsage} />
          </section>
        </div>
        {/* desktop end */}

        <div className={styles.store__cards}>
          <div className="title-bar padding-x margin-2y">
            <h2>{isFilter ? text : "تیزبین؛ انتخابی برای هر نگاه."}</h2>
            <div>{parseInt(length).toLocaleString("fa")} مورد یافت شد</div>
          </div>

          <InfiniteLoading
            key={apiUrl}
            url={apiUrl}
            limit={10}
            setLength={setLength}
          >
            <Card />
          </InfiniteLoading>
        </div>
      </div>
    </div>
  );
};

export default Store;
