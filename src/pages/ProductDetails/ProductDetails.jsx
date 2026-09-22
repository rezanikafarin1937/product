import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import Button from "../../components/button/Button";
import { useCartContext } from "../../context/CartContext";
import ZoomImage from "../../utils/zoom-image/ZoomImage";
import styles from "./product-details.module.scss";

const ProductDetails = () => {
  const { id } = useParams();

  const [flag, setFlag] = useState(false);

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
    cartQty,
  } = useCartContext();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data);
        console.log("in product details data is = ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log("DETAILS = ", product?.title);

  return (
    <div className="wrapper">
      <div style={{marginTop : "150px"}}></div>
      <div className={styles.parent}>
       
      <div className={styles.parent__info}>
        <h1>{product?.title}</h1>
        <h2>cartQty = {cartQty}</h2>
        <p>description : {product?.description}</p>
        <p>price : {product?.price}</p>
        <p>discount : {product?.discount}</p>
        <div>catId : {product?.catId}</div>
        <br />
        <div>Add to cart</div>
        <span title="Add to Card">
          <Button
            onClick={() => {
              handleIncreaseProductQty({ ...product });
              setFlag(false);
            }}
          >
            +
          </Button>
          <span className="margin-x">{getProductQty(product?.id)}</span>
          <Button
            disabled={flag}
            onClick={() => {
              console.log("Baleh");
              handleDecreaseProductQty(product?.id);
              getProductQty(product?.id) - 1 > 0
                ? setFlag(false)
                : setFlag(true);
            }}
          >
            -
          </Button>
        </span>
        <br />
        <br />
        {getProductQty === 0 ? (
          <Button disabled={true}>Delete from Cart</Button>
        ) : (
          <Button
            disabled={flag}
            onClick={() => {
              handleRemoveProduct(product?.id);
              setFlag(true);
            }}
          >
            Delete from Cart
          </Button>
        )}
        <br />
        <div>{product.title}</div>
        <div>{product.id}</div>
        <br />
        <div>gallery images : </div>
      </div>
      <div className={styles.parent__image}>
        <ZoomImage images={product?.images} />
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
