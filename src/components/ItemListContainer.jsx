import React, { useEffect, useState } from 'react'
import 'animate.css';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([]);
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
        {<ItemList products={filterProducts} />}
      </section>

    </>
  )
}

export default ItemListContainer