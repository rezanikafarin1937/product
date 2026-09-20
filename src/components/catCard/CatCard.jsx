import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Arrow from "../../icons/arrow/Arrow";
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
        <div className={`${styles.card__text} title-item`}>
          {title}
          <div className="description">
            <Button style={{position : "relative",left : "2rem"}} variant="secondary" onClick={handleClick}>
              <span>مشاهده همه</span>
              <span className="margin-x"></span>
              <Arrow
                width={20}
                height={20}
                color="var(--color-text-secondary)"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
