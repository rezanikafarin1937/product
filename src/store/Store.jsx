import { useEffect, useRef, useState } from "react";
import Card from "../components/card/Card";
import axios from "axios";
import styles from "./store.module.scss";

const Store = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const endInfinite = useRef(null);

  // Get Products
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_URL}/api/products?page=${page}&limit=10`)
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
    <div className={styles.store__cards}>
      {products?.map((product) => (
        <Card key={product?.id} {...product} />
      ))}

      <div ref={endInfinite}></div>
    </div>
  );
};

export default Store;
