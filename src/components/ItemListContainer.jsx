import React, { useEffect, useState } from 'react'
import 'animate.css';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const ItemListContainer = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "ventanas");
    getDocs(itemsCollection).then((snapshot) => {

      setProducts(snapshot.docs.map((doc) => (
        { id: doc.id, ...doc.data() })))

    })

  }, [])
  const filterProducts = products.filter(
    (product) => product.category === category)


  return (
    <>
      <section className='itemList--container'>
        {loading ? (<Loading />) :
          category &&
          <div>
            <h2 className='title--category'> {category}</h2>
            <ItemList products={filterProducts} stock={filterProducts.stock} />
          </div>
          ||
          <div>
            <h2 className='title--category'>Productos</h2>
            <ItemList products={products} />
          </div>}
      </section>

    </>
  )
}

export default ItemListContainer