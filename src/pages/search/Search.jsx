import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./search.module.scss";

const Search = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) {
      setProducts([]);
      return;
    }

    const getProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products/search?title=${encodeURIComponent(title)}`
        );

        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const result = await response.json();

        setProducts(result);
      } catch (error) {
        console.log("Search Error =", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [title]);

  if (loading) {
    return <div>در حال جستجو...</div>;
  }

  return (
    <div className="container">
      <h1>نتایج جستجو برای: {title}</h1>

      {products.length === 0 ? (
        <p>محصولی پیدا نشد.</p>
      ) : (
        <div className={styles.products}>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;















// import { useState } from "react";
// import Input from "../../components/input/Input";
// import Card from "../../components/card/Card";

// const Search = () => {
//   const [text, setText] = useState("");
//   const [products,setProducts] = useState([]);
//   const handleOnChange = (e) => {
//     setText(e.target.value);
//   };



// const handleSearch = async (e) => {
//   if (e.key !== "Enter") return;

//   const text = e.target.value.trim();

//   if (!text) return;

//   try {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/api/products/search?text=${encodeURIComponent(text)}`
//     );

//     const result = await response.json();
//     setProducts(result)

//     console.log("Search Result =", result);

//   } catch (error) {
//     console.log("Search Error =", error);
//   }
// };


//   return (
//     <>
//       <Input type="text" onChange={handleOnChange}   onKeyDown={handleSearch} placeholder="جستجو" />

//    {products?.map(product => (
//         <Card key={product.id} {...product}/>
//       ))}    </>
//   );
// };

// export default Search;
