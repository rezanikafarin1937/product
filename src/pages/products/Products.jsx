import { useEffect,useState } from "react"
import { getProducts } from "../../services/api"
import Card from "../../components/card/Card"
import styles from "./products.module.scss"

const Products = () => {


  const [products,setProducts] = useState([]);
  useEffect(()=>{
    getProducts().then(res=>{
      setProducts(res.data)
    }).catch(err => {
      console.log(err)
    }) 
  },[])
  return (
    <div className={styles.productsCards}>
      {products?.map(product => (
        <Card key={product.id} {...product}/>
      ))}
    </div>
  )
}

export default Products
