import Card from "../../components/card/Card"
import InfiniteLoading from "../../utils/infiniteLoading/InfiniteLoading"

import styles from "./home.module.scss"

const Home = () => {


  return (
    <div className={styles.homeCards}>
      <h4>Home Page</h4>
      <h1>Show Banner</h1>
      <br />
      <InfiniteLoading   url={`${process.env.REACT_APP_API_URL}/api/products`} limit="10">
        <Card/>
      </InfiniteLoading>

    </div>
  )
}

export default Home
