
import styles from "./star.module.scss";

const Star = ({ rating = 0 }) => {
  const validRating = Math.min(5, Math.max(0, Number(rating) || 0));

  function getWidth(value) {
    return (value / 5) * 100;
  }

  return (
    <div
      className={styles.star}
      aria-hidden="true"
    >
      <span>★ ★ ★ ★ ★</span>

      <div
        className={styles.starLike}
        style={{
          width: `${getWidth(validRating)}%`,
        }}
      >
        <span>★ ★ ★ ★ ★</span>
      </div>
    </div>
  );
};

export default Star;

