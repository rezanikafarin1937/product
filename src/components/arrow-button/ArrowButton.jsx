import Arrow from "../../icons/arrow/Arrow"
import styles from "./arrowButton.module.scss"

const ArrowButton = ({title, onClick}) => {
  return (
    <div className={styles.btn} onClick={onClick}>
      <span className={styles.btnText}>{title}</span>
      <Arrow width={20} height={20} color="#000" />
    </div>
  )
}

export default ArrowButton
