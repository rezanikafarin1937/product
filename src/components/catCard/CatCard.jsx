import { useNavigate } from "react-router-dom";
import styles from "./catCard.module.scss";

const CatCard = ({ title, description, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };

  return (
    <article
      className={styles.card}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`مشاهده محصولات دسته ${title}`}
    >
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>

      <div>
        <div className={styles.card__text}>
          {title}
          <div className="description">{description}</div>
        </div>
      </div>
    </article>
  );
};

export default CatCard;


