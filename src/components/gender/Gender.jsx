import styles from "./gender.module.scss";

const shapes = ["زنانه","مردانه","کودک و نوجوان"];

const Gender = ({selectGender, setSelectGender }) => {

  return (
    <div className={styles.frame}>
        {shapes.map((shape,index)=>(
            <div onClick={() => setSelectGender(shapes[index])} key={index} className={ `${styles.frame__shape} ${shapes[index] === selectGender ? styles.frame__select : {}}`}>{shape}</div>
        ))}
    </div>
  )
}

export default Gender;
