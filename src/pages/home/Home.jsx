import Products from "../products/Products"
import styles from "./home.module.scss"

const Home = () => {


  return (
    <div className={styles.homeCards}>
      <h4>Home Page</h4>
      <h1>Show Banner</h1>
      <br />
      <Products/>

    </div>
  )
}

export default Home
