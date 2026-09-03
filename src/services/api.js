import axios from "axios"

const client = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
})

export async function getProducts() {
    const data = await client("/api/products")
    return data
}

export async function getProduct(id){
    const data = await client(`/api/products/${id}`)
    return data
}