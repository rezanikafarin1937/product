import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import GalleryImage from "../../components/gallery-image/GalleryImage";
import Button from "../../components/button/Button";
import { useCartContext } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const [flag,setFlag] = useState(false)

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
    cartItems,
    cartQty
  } = useCartContext();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(res => {
      setProduct(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [id]);

  console.log("cartItems = ", cartItems);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <h2>cartQty = {cartQty}</h2>
      <p>description : {product.description}</p>
      <p>price : {product.price}</p>
      <p>discount : {product.discount}</p>
      <div>catId : {product.catId}</div>
      <br />
      <div>Add to cart</div>
      <span title="Add to Card">
        <Button  onClick={() =>{handleIncreaseProductQty(id);setFlag(false)}}>+</Button>
        <span className="margin-x">{getProductQty(id)}</span>
        <Button disabled={flag} onClick={() => {console.log("Baleh");handleDecreaseProductQty(id);(getProductQty(id)-1 > 0) ? setFlag(false) : setFlag(true)}}>-</Button>
      </span>
      <br />
      <br />
      {getProductQty === 0 ? (
        <Button disabled={true}>
          Delete from Cart
        </Button>
      ) : (
        <Button disabled={flag}  onClick={() => {handleRemoveProduct(id);setFlag(true)}}>
          Delete from Cart
        </Button>
      )}
      <br />
      <br />
      <div>gallery images : </div>
      <GalleryImage images={product.images} />
    </div>
  );
};

export default ProductDetails;
