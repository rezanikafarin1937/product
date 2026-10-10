import styles from "./usage.module.scss";

const shapes = ["طبی","آفتابی","ورزشی","لوازم جانبی"];

const Usage = ({selectUsage, setSelectUsage }) => {

  return (
    <div className={styles.frame}>
        {shapes.map((shape,index)=>(
            <div onClick={() => setSelectUsage(shapes[index])} key={index} className={ `${styles.frame__shape} ${shapes[index] === selectUsage ? styles.frame__select : {}}`}>{shape}</div>
        ))}
    </div>
  )
}

export default Usage;
