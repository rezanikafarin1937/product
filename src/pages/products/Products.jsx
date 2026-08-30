import { useEffect,useState } from "react"
import axios from "axios"
import Card from "../../components/card/Card"
import styles from "./products.module.scss"

const Products = () => {


  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/products`).then(res => {
      setProducts(res.data)
      console.log('res = ',res.data)
    }).catch(err => {console.log("Error = ",err)})
  },[])
  return (
    <div className={styles.productsCards}>
      {products.map(product => (
        <Card key={product.id} {...product}/>
      ))}
    </div>
  )
}

export default Products
