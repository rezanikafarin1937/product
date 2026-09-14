import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./infiniteLoading.module.scss";

const InfiniteLoading = ({ url, limit, children }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const endInfinite = useRef(null);

  // Get Products
  useEffect(() => {
    axios(`${url}?page=${page}&limit=${limit}`)
      .then((res) => {
        console.log("pagination data =", res.data);

        setProducts((prev) => [...prev, ...res.data.data]);
      })
      .catch((error) => {
        console.log("Get Products Error =", error);
      });
  }, [page]);

  // Infinite Loading
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (endInfinite.current) {
      observer.observe(endInfinite.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.infinite__cards}>
      {products?.map((product, index) =>
        React.cloneElement(children, {
          key: index,
          ...product,
        }),
      )}

      <div ref={endInfinite}></div>
    </div>
  );
};

export default InfiniteLoading;
