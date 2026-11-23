
import { useEffect, useRef, useState } from "react";
import "./scrollReveal.scss";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // پشتیبانی از مرورگرهایی که IntersectionObserver ندارند
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scrollReveal ${isVisible ? "show" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;





// import { useEffect, useRef, useState } from "react";
// import "./scrollReveal.scss";

// const ScrollReveal = ({ children }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.6,
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`scrollReveal ${isVisible ? "show" : ""}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollReveal;