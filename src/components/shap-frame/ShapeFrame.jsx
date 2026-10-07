import { useState } from "react";
import styles from "./shapFrame.module.scss";

const shapes = ["گرد","مستطیل","مربع","بیضی","گربه ای"];

const ShapeFrame = ({selectShape, setSelectShape }) => {

  return (
    <div className={styles.frame}>
        {shapes.map((shape,index)=>(
            <div onClick={() => setSelectShape(shapes[index])} key={index} className={ `${styles.frame__shape} ${shapes[index] === selectShape ? styles.frame__select : {}}`}>{shape}</div>
        ))}
    </div>
  )
}

export default ShapeFrame
