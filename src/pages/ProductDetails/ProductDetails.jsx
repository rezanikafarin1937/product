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

  const { handleRemoveProduct } = useCartContext();

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
    <main className="wrapper">
      <div className={styles.parent}>
        <div className={styles.parent__info}>
          <h1 className="primary-title">{product.title}</h1>

          {/* <Star rating={Math.floor(Math.random() * 5)} /> */}
          <Star rating={3} />

          <div className="title-item">
            <data value={product.price}>
              {product.price.toLocaleString("fa-IR")}
            </data>
            <span>تومان</span>
          </div>

          <div className="color-blue">
            <span>با تخفیف</span>{" "}
            <data value={product.discount}>
              {product.discount.toLocaleString("fa-IR")}
            </data>{" "}
            <span>درصد</span>
          </div>

          <div className={styles.parent__qtyInfo}>
            <ButtonQty {...product} />

            <span style={{ margin: "0 .12rem" }}></span>


            <button
              type="button"
              className={styles.parent__btn}
              aria-label={`حذف ${product.title} از سبد خرید`}
              onClick={() => handleRemoveProduct(product.id)}
            >
              <CloseIcon
                width={15}
                height={15}
                color="var(--color-text-secondary)"
              />
            </button>
          </div>

          <Button>افزودن به سبد خرید</Button>
        </div>

        <div className={styles.parent__image}>
          <ZoomImage images={product.images} />
        </div>
      </div>

      <br />

      <div className={styles.foot}>
        <h2 className="primary-title">توضیحات</h2>
        <p>{product.description}</p>
      </div>
    </main>
  );
};

export default ProductDetails;
