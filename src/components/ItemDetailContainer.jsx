import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const oneItem = doc(db, "ventanas", id)
        getDoc(oneItem)
            .then((snapshot) => {
                setItems({
                    ...snapshot.data(), id: snapshot.id
                })
            })
    }, [])


    return (
        <>
            {item && <ItemDetail
                item={item}
            />}
        </>
    )
}

export default ItemDetailContainer