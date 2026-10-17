import styles from "./star.module.scss";

const Star = ({ rating }) => {
  function getWidth(value) {
    switch (value) {
      case 1:
        return 20;

      case 2:
        return 40;

      case 3:
        return 60;

      case 4:
        return 80;
      case 5:
        return 100;
      default:
        return 0;
    }
  }

  return (
    <div className={styles.star}>
      <span>★ ★ ★ ★ ★</span>
      <div className={styles.starLike} style={{width : `${getWidth(rating)}px`}}>
        <span>★ ★ ★ ★ ★</span>
      </div>
    </div>
  );
};

export default Star;
