import CatCard from "../catCard/CatCard"
import styles from "./cats.module.scss"

const Cats = () => {
  return (
    <div className={styles.cats}>
      <CatCard title="عینک بچگانه" description="مشاهده محصولات" image="../../../cats/child.png"/>
      <CatCard title="عینک ورزشی" description="مشاهده محصولات" image="../../../cats/varzeshi.png"/>
      <CatCard title="عینک طبی" description="مشاهده محصولات" image="../../../cats/tebi1.png"/>
      <CatCard title="عینک آفتابی" description="مشاهده محصولات" image="../../../cats/Aftabi.png"/>
    </div>
  )
}

export default Cats
