import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GalleryImage from "../../components/gallery-image/GalleryImage";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
      .then((res) => {
        console.log("Product = ",res.data)
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Error =", err);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>description : {product.description}</p>
      <p>price : {product.price}</p>
      <p>discount : {product.discount}</p>
      <div>catId : {product.catId}</div>
      <br />
      <div>gallery images : </div>
      <GalleryImage images={product.images}/>
    </div>
  );
};

export default ProductDetails;