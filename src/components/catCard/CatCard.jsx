import { useNavigate } from "react-router-dom";
import styles from "./catCard.module.scss";

const CatCard = ({ title, description, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/store");
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>
      <div>
        <div className={`${styles.card__text}`}>
          {title}
          <div className="description">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
