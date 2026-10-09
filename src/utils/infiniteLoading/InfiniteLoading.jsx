import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import styles from "./infiniteLoading.module.scss";

const InfiniteLoading = ({ url, limit, children }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const endInfinite = useRef(null);

  // Reset when URL changes
  useEffect(() => {
    setPage(1);
    setProducts([]);
  }, [url]);

  // Get Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const separator = url.includes("?") ? "&" : "?";

        const response = await axios(
          `${url}${separator}page=${page}&per_page=${limit}`
        );

        setProducts((prev) =>
          page === 1
            ? response.data.data
            : [...prev, ...response.data.data]
        );

      } catch (error) {
        console.log("Get Products Error =", error);
      }
    };

    getProducts();
  }, [url, page, limit]);

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
          key: product.id || index,
          ...product,
        })
      )}

      <div ref={endInfinite}></div>

    </div>
  );
};

export default InfiniteLoading;
















// import React, { useEffect, useRef, useState } from "react";

// import axios from "axios";

// import styles from "./infiniteLoading.module.scss";

// const InfiniteLoading = ({ url, limit, children }) => {
//   const [page, setPage] = useState(1);
//   const [products, setProducts] = useState([]);

//   const endInfinite = useRef(null);

//   // Get Products
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const separator = url.includes("?") ? "&" : "?";

//         const response = await axios(
//           `${url}${separator}page=${page}&per_page=${limit}`
//         );

//         setProducts((prev) => [
//           ...prev,
//           ...response.data.data,
//         ]);
//       } catch (error) {
//         console.log("Get Products Error =", error);
//       }
//     };

//     getProducts();
//   }, [url, page, limit]);

//   // Infinite Loading
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prev) => prev + 1);
//       }
//     });

//     if (endInfinite.current) {
//       observer.observe(endInfinite.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className={styles.infinite__cards}>

//       {products?.map((product, index) =>
//         React.cloneElement(children, {
//           key: index,
//           ...product,
//         })
//       )}

//       <div ref={endInfinite}></div>

//     </div>
//   );
// };

// export default InfiniteLoading;














// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import styles from "./infiniteLoading.module.scss";

// const InfiniteLoading = ({ url, limit, children }) => {
//   const [page, setPage] = useState(1);
//   const [products, setProducts] = useState([]);

//   const endInfinite = useRef(null);

//   // Get Products
//   useEffect(() => {
//     axios(`${url}?page=${page}&limit=${limit}`)
//       .then((res) => {
//         setProducts((prev) => [...prev, ...res.data.data]);
//       })
//       .catch((error) => {
//         console.log("Get Products Error =", error);
//       });
//   }, [page]);

//   // Infinite Loading
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prev) => prev + 1);
//       }
//     });

//     if (endInfinite.current) {
//       observer.observe(endInfinite.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className={styles.infinite__cards}>
//       {products?.map((product, index) =>
//         React.cloneElement(children, {
//           key: index,
//           ...product,
//         }),
//       )}

//       <div ref={endInfinite}></div>
//     </div>
//   );
// };

// export default InfiniteLoading;
