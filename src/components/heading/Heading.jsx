import { Link } from "react-router-dom";
import styles from "./heading.module.scss";
const Heading = ({
  title = null,
  linkTitle = null,
  link = null,
  bg = null,
}) => {
  return (
    <Link to={link}>
      <div className={styles.heading} style={bg ? { backgroundColor: bg } : {}}>
        {title ? <div>{title}</div> : ""}
        {linkTitle ? (
          <div className={styles.heading__link}>
            <div className={styles.heading__arrow}></div>
            <span>{linkTitle}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default Heading;
