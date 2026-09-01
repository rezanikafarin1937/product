import styles from "./button.module.scss"

const Button = ({title,onClick,className }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {title}
    </button>
  )
}

export default Button
