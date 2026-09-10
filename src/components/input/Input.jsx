import styles from "./input.module.scss"

const Input = ({onChange,onKeyDown,type,placeholder})=> {
  return (
    <>
     <input  type={type} onChange={onChange} onKeyDown={onKeyDown} className={styles.input} placeholder={placeholder}/> 
    </>
  )
}

export default Input
