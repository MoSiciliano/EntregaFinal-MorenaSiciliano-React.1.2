import React from 'react'

const Clase07 = ({ id, title, price }) => {
  /**const getProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  return data;
  }
  const [product, setProduct] = useState([])
  useEffect(() => {
  getProduct().then((product) => setProduct(product))
  }, [])
  return (
  <>
  /**const getProducts = () => {
  return new Promise((res, rej) => {
    if (products.length === 0) {
      rej(new Error("No data"))
    }
    setTimeout(() => {
      res(products)
    }, 2000)
  })
  async function fetchingData() {
    try {
      const dataFetch = await getProducts()
      console.log(dataFetch);
    } catch {
      console.error("Error")
    }
  }
  fetchingData();
  */
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{id}</p>
    </div>
  )
}

export default Clase07
