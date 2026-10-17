import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import Button from "../../components/button/Button";
import { useCartContext } from "../../context/CartContext";
import ZoomImage from "../../utils/zoom-image/ZoomImage";
import ButtonQty from "../../components/button-qty/ButtonQty";
import styles from "./product-details.module.scss";
import Star from "../../utils/star/Star";
import CloseIcon from "../../icons/close-icon/CloseIcon";

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
      <div style={{ marginTop: "150px" }}></div>
      <div className={styles.parent}>
        <div className={styles.parent__info}>
          <h1 className="primary-title">{product?.title}</h1>
          <Star rating={Math.floor(Math.random() * 5)} />

          <div className="title-item">
            <span>{product?.price.toLocaleString("fa-IR")}</span>
            <span>تومان</span>
          </div>

          <div className="color-blue">
            <span>با تخفیف</span>{" "}
            <span>{product?.discount.toLocaleString("fa-IR")}</span>{" "}
            <span>درصد</span>
          </div>

          <div className={styles.parent__qtyInfo}>
            <ButtonQty {...product} />
            <span style={{ margin: "0 .12rem" }}></span>
            <div
              className={styles.parent__btn}
              onClick={() => {
                handleRemoveProduct(product?.id);
                setFlag(true);
              }}
            >
              <CloseIcon
                width={15}
                height={15}
                color="var(--color-text-secondary)"
              />
            </div>
          </div>
          <Button>افزودن به سبد خرید</Button>
        </div>
        <div className={styles.parent__image}>
          <ZoomImage images={product?.images} />
        </div>
      </div>
      <br />
      <div className={styles.foot}>
        <div className="primary-title">توضیحات</div>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
