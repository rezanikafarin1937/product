import styles from "./button.module.scss"

const Button = ({onClick,children,disabled = false }) => {
  return (
    <button onClick={onClick} className={styles.btn} style={disabled ? {color : "#999"} : {}}>
      {children}
    </button>
  )
}

export default Button
