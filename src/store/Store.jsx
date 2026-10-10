import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
import Card from "../components/card/Card";
import Frame from "../components/frame/Frame";
import PriceRange from "../utils/PriceRange/PriceRange";
import MyToggle from "../utils/my-toggle/MyToggle";
import ShapeFrame from "../components/shap-frame/ShapeFrame";
import Usage from "../components/usage/Usage";
import Gender from "../components/gender/Gender";
import CloseIcon from "../icons/close-icon/CloseIcon";
import sunglass from "./sunglass.png";

import styles from "./store.module.scss";

const Store = () => {
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

  const [selectGender, setSelectGender] = useState(
    searchParams.get("gender") || "",
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
    usage : selectUsage,
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
        usage : selectUsage,
        min: minPrice.toString(),
        max: maxPrice.toString(),
      });
    } else {
      setSearchParams({});
    }
    setText(
      `نتایج جستجو برای   ${selectFrame ? "- رنگ  " + selectFrame : ""}   ${selectShape ? "- شکل  " + selectShape : ""} ${selectUsage ? "- مورد استفاده  " + selectUsage : ""}`,
    );
  }, [isFilter, selectFrame, selectShape, selectUsage,minPrice, maxPrice, setSearchParams]);

  // let text = `نتایج جستجو برای رنگ ${params.color ? params.color : ""} > شکل ${params.shape ? params.shape : ""}`;

  return (
    <div className="wrapper">
      <div className={styles.store__bar}>
        <div>
          <i>
            <h1>فروشگاه تیزبین</h1>
            <h4>
              <span>دسته بندی</span>
              <span> {selectUsage} </span>
              <span> - </span>
              <span>شکل فریم</span>
              <span> {selectShape}</span>
              <span> - </span>
              <span>رنگ فریم</span>
              <span> {selectFrame} </span>
            </h4>
          </i>
        </div>
        <div className={styles.store__sunglass}>
          <img src={sunglass} alt="فروشگاه اینترنتی فروش عینک طبی و آفتابی" />
        </div>
      </div>
      <div className="title-bar padding-x margin-2y">
        <h2>{isFilter ? text : ""}</h2>
        <span></span>
      </div>
      <div className={styles.store}>
        <div className={styles.store__filter}>
          <div className="title-bar">
            <div className={styles.store__mainTitle}>فیلترها</div>

            <MyToggle isFilter={isFilter} setIsFilter={setIsFilter} />
          </div>

          {/* <section className="margin-y">
            <div className="title-bar padding-none">
              <span className={styles.store__title}>cccc</span>
              <span
                className={styles.store__icon}
                title="حذف"
                onClick={() => setSelectGender("")}
              >
                <CloseIcon color="var(--color-text)" />
              </span>
            </div>
            <Gender selectGender={selectGender} setSelectGender={setSelectGender} />
          </section> */}

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
        <div className={styles.store__cards}>
          <InfiniteLoading key={apiUrl} url={apiUrl} limit={10}>
            <Card />
          </InfiniteLoading>
        </div>
      </div>
    </div>
  );
};

export default Store;

// import { useState } from "react";
// import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
// import Card from "../components/card/Card";
// import Frame from "../components/frame/Frame";
// import PriceRange from "../utils/PriceRange/PriceRange";
// import MyToggle from "../utils/my-toggle/MyToggle";
// import ShapeFrame from "../components/shap-frame/ShapeFrame";
// import styles from "./store.module.scss";

// const Store = () => {
//   const [selectShape, setSelectShape] = useState("");
//   const [selectFrame, setSelectFrame] = useState("");
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(50000000);
//   const [isFilter, setIsFilter] = useState(false);

//   const params = new URLSearchParams({
//   color: selectFrame,
//   shape: selectShape,
//   min: minPrice,
//   max: maxPrice,
// });
//   let url = isFilter
//     ? `${process.env.REACT_APP_API_URL}/api/products/filter?${params}`
//     : `${process.env.REACT_APP_API_URL}/api/products`;

//   console.log("in Store url = ", url);
//   console.log("params =", params.toString());
// console.log("url =", url);

//   return (
//     <div className="wrapper">
//       <div className={styles.store}>
//         <div className={styles.store__filter}>
//           <div className="title-bar">
//             <div className={styles.store__mainTitle}>فیلترها</div>
//             <MyToggle isFilter={isFilter} setIsFilter={setIsFilter} />
//           </div>
//           <div className="margin-2y">
//             <div className={styles.store__title}>قیمت</div>
//             <PriceRange
//               minPrice={minPrice}
//               setMinPrice={setMinPrice}
//               maxPrice={maxPrice}
//               setMaxPrice={setMaxPrice}
//             />
//           </div>
//           <div className="margin-2y">
//             <div className={styles.store__title}>رنگ فریم</div>
//             <Frame selectFrame={selectFrame} setSelectFrame={setSelectFrame} />
//           </div>
//           <div className="margin-2y">
//             <div className={styles.store__title}>شکل فریم</div>
//             <ShapeFrame
//               selectShape={selectShape}
//               setSelectShape={setSelectShape}
//             />
//           </div>
//         </div>
//         <div className={styles.store__cards}>
//           <InfiniteLoading key={url} url={`${url}`} limit="10">
//             <Card />
//           </InfiniteLoading>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Store;
