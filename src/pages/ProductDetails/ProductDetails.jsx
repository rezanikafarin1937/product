
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

  const {
    handleRemoveProduct,
  } = useCartContext();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(false);
    setProduct(null);

    getProduct(id)
      .then((res) => {
        if (isMounted) {
          setProduct(res.data);
          console.log("DDData = ",res.data.images)
        }
      })
      .catch((err) => {
        console.error("Get Product Error =", err);

        if (isMounted) {
          setError(true);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <div>در حال بارگذاری محصول...</div>;
  }

  if (error || !product) {
    return <div>محصول موردنظر پیدا نشد.</div>;
  }

  return (
    <div className="wrapper">
      <div style={{ marginTop: "150px" }}></div>

      <div className={styles.parent}>
        <div className={styles.parent__info}>
          <h1 className="primary-title">
            {product.title}
          </h1>

          <Star rating={Math.floor(Math.random() * 5)} />

          <div className="title-item">
            <span>
              {product.price.toLocaleString("fa-IR")}
            </span>
            <span>تومان</span>
          </div>

          <div className="color-blue">
            <span>با تخفیف</span>{" "}
            <span>
              {product.discount.toLocaleString("fa-IR")}
            </span>{" "}
            <span>درصد</span>
          </div>

          <div className={styles.parent__qtyInfo}>
            <ButtonQty {...product} />

            <span style={{ margin: "0 .12rem" }}></span>

            <div
              className={styles.parent__btn}
              onClick={() => handleRemoveProduct(product.id)}
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
          <ZoomImage images={product.images} />
        </div>
      </div>

      <br />

      <div className={styles.foot}>
        <div className="primary-title">توضیحات</div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
