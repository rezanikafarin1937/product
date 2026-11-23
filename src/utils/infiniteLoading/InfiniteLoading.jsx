
import React, { useEffect, useMemo, useRef, useState } from "react";

import styles from "./infiniteLoading.module.scss";

const InfiniteLoading = ({
  limit = 10,
  children,
  setLength,
  filters = null,
}) => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const endInfinite = useRef(null);

  // دریافت محصولات از فایل JSON
  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `${process.env.PUBLIC_URL}/database/products.json`
        );

        if (!response.ok) {
          throw new Error("Failed to load products.json");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid products data");
        }

        if (isMounted) {
          setAllProducts(data);
        }
      } catch (error) {
        console.error("Get Products Error =", error);

        if (isMounted) {
          setAllProducts([]);
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  // فیلتر محصولات
  const filteredProducts = useMemo(() => {
    if (!filters) {
      return allProducts;
    }

    const color = filters.color?.trim().toLowerCase();
    const shape = filters.shape?.trim().toLowerCase();
    const usage = filters.usage?.trim().toLowerCase();

    const min = Number(filters.min);
    const max = Number(filters.max);

    return allProducts.filter((product) => {
      const title = (product.title || "").toLowerCase();
      const price = Number(product.price);

      // فیلتر رنگ
      if (color && !title.includes(color)) {
        return false;
      }

      // فیلتر شکل
      if (shape && !title.includes(shape)) {
        return false;
      }

      // فیلتر نوع استفاده و دسته‌بندی
      if (usage) {
        if (usage === "لوازم جانبی") {
          if (Number(product.catId) !== 6) {
            return false;
          }
        } else if (!title.includes(usage)) {
          return false;
        }
      }

      // حداقل قیمت
      if (Number.isFinite(min) && price < min) {
        return false;
      }

      // حداکثر قیمت
      if (Number.isFinite(max) && price > max) {
        return false;
      }

      return true;
    });
  }, [allProducts, filters]);

  // به‌روزرسانی تعداد نتایج
  useEffect(() => {
    setLength?.(filteredProducts.length);
  }, [filteredProducts.length, setLength]);

  // با تغییر فیلترها، صفحه‌بندی از ابتدا شروع شود
  useEffect(() => {
    setPage(1);
  }, [filters]);

  // محصولات قابل نمایش بر اساس صفحه
  const visibleProducts = useMemo(() => {
    const end = page * limit;

    return filteredProducts.slice(0, end);
  }, [filteredProducts, page, limit]);

  // Infinite Loading
  useEffect(() => {
    const target = endInfinite.current;

    if (!target || loading || error) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(target);

          setPage((prev) => {
            const maxPage = Math.ceil(
              filteredProducts.length / limit
            );

            return prev < maxPage ? prev + 1 : prev;
          });
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [
    visibleProducts.length,
    filteredProducts.length,
    limit,
    loading,
    error,
  ]);

  return (
    <div className={styles.cards}>
      {visibleProducts.map((product, index) =>
        React.cloneElement(children, {
          key: product.id || index,
          ...product,
        })
      )}

      {loading && (
        <p role="status" aria-live="polite">
          در حال بارگذاری محصولات...
        </p>
      )}

      {error && (
        <p role="alert">
          خطا در دریافت محصولات. لطفاً دوباره تلاش کنید.
        </p>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <p role="status">
          محصولی یافت نشد.
        </p>
      )}

      {!loading &&
        !error &&
        visibleProducts.length < filteredProducts.length && (
          <p role="status" aria-live="polite">
            در حال بارگذاری محصولات بیشتر...
          </p>
        )}

      <div ref={endInfinite} aria-hidden="true" />
    </div>
  );
};

export default InfiniteLoading;















// import React, { useEffect, useMemo, useRef, useState } from "react";

// import styles from "./infiniteLoading.module.scss";

// const InfiniteLoading = ({
//   limit = 10,
//   children,
//   setLength,
//   filters = null,
// }) => {
//   const [page, setPage] = useState(1);
//   const [allProducts, setAllProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const endInfinite = useRef(null);

//   // دریافت محصولات از فایل JSON
//   useEffect(() => {
//     let isMounted = true;

//     const getProducts = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const response = await fetch(
//           `${process.env.PUBLIC_URL}/database/products.json`,
//         );

//         if (!response.ok) {
//           throw new Error("Failed to load products.json");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Invalid products data");
//         }

//         if (isMounted) {
//           setAllProducts(data);
//         }
//       } catch (error) {
//         console.error("Get Products Error =", error);

//         if (isMounted) {
//           setAllProducts([]);
//           setError(true);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     getProducts();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // فیلتر محصولات
//   const filteredProducts = useMemo(() => {
//     if (!filters) {
//       return allProducts;
//     }

//     const color = filters.color?.trim().toLowerCase();
//     const shape = filters.shape?.trim().toLowerCase();
//     const usage = filters.usage?.trim().toLowerCase();

//     const min = Number(filters.min);
//     const max = Number(filters.max);

//     return allProducts.filter((product) => {
//       const title = (product.title || "").toLowerCase();
//       const price = Number(product.price);

//       // فیلتر رنگ
//       if (color && !title.includes(color)) {
//         return false;
//       }

//       // فیلتر شکل
//       if (shape && !title.includes(shape)) {
//         return false;
//       }


//       // فیلتر نوع استفاده و دسته‌بندی
//       if (usage) {
//         if (usage === "لوازم جانبی") {
//           if (Number(product.catId) !== 6) {
//             return false;
//           }
//         } else if (!title.includes(usage)) {
//           return false;
//         }
//       }

//       // حداقل قیمت
//       if (Number.isFinite(min) && price < min) {
//         return false;
//       }

//       // حداکثر قیمت
//       if (Number.isFinite(max) && price > max) {
//         return false;
//       }

//       return true;
//     });
//   }, [allProducts, filters]);

//   // به‌روزرسانی تعداد نتایج
//   useEffect(() => {
//     setLength?.(filteredProducts.length);
//   }, [filteredProducts.length, setLength]);

//   // با تغییر فیلترها، صفحه‌بندی از ابتدا شروع شود
//   useEffect(() => {
//     setPage(1);
//   }, [filters]);

//   // محصولات قابل نمایش بر اساس صفحه
//   const visibleProducts = useMemo(() => {
//     const end = page * limit;

//     return filteredProducts.slice(0, end);
//   }, [filteredProducts, page, limit]);

//   // Infinite Loading
//   useEffect(() => {
//     const target = endInfinite.current;

//     if (!target || loading || error) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           observer.unobserve(target);

//           setPage((prev) => {
//             const maxPage = Math.ceil(filteredProducts.length / limit);

//             return prev < maxPage ? prev + 1 : prev;
//           });
//         }
//       },
//       {
//         threshold: 0.1,
//       },
//     );

//     observer.observe(target);

//     return () => observer.disconnect();
//   }, [visibleProducts.length, filteredProducts.length, limit, loading, error]);

//   return (
//     <div className={styles.cards}>
//       {visibleProducts.map((product, index) =>
//         React.cloneElement(children, {
//           key: product.id || index,
//           ...product,
//         }),
//       )}

//       {loading && <p>در حال بارگذاری محصولات...</p>}

//       {error && <p>خطا در دریافت محصولات. لطفاً دوباره تلاش کنید.</p>}

//       {!loading && !error && filteredProducts.length === 0 && (
//         <p>محصولی یافت نشد.</p>
//       )}

//       {!loading &&
//         !error &&
//         visibleProducts.length < filteredProducts.length && (
//           <p>در حال بارگذاری محصولات بیشتر...</p>
//         )}

//       <div ref={endInfinite}></div>
//     </div>
//   );
// };

// export default InfiniteLoading;
