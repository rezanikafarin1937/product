
import { Link } from "react-router-dom";
import styles from "./heading.module.scss";

const Heading = ({
  title = null,
  linkTitle = null,
  link = null,
  bg = null,
}) => {
  const content = (
    <section
      className={styles.heading}
      style={bg ? { backgroundColor: bg } : {}}
    >
      {title && (
        <h2 className={styles.heading__title}>
          {title}
        </h2>
      )}

      {linkTitle && (
        <div className={styles.heading__link}>
          <span
            className={styles.heading__arrow}
            aria-hidden="true"
          />

          <span className={styles.heading__linkTitle}>
            {linkTitle}
          </span>
        </div>
      )}
    </section>
  );

  return link ? (
    <Link to={link} aria-label={linkTitle || title}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default Heading;
