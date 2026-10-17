import Arrow from "../../icons/arrow/Arrow"
import styles from "./arrowButton.module.scss"

const ArrowButton = ({title, onClick}) => {
  return (
    <div className={styles.btn} onClick={onClick}>
      <Arrow width={20} height={20} color="var(--color-text-secondary)" />
      <span className={styles.btnText}>{title}</span>
    </div>
  )
}

export default ArrowButton
