import React from 'react'
import ItemDetail from './ItemDetail'
import Sureña1 from '../assets/sureñas/sureña-pvc1.jpg'
import Sureña2 from '../assets/sureñas/sureña-pvc-madera2.jpg'
import Sureña3 from '../assets/sureñas/sureña-pvc-moderna3.jpg'
import Corrediza1 from '../assets/corredizas/ventana-corrediza-pvc1.jpg'
import Corrediza2 from '../assets/corredizas/ventana-corrediza-pvc-madera2.jpg'
import Corrediza3 from '../assets/corredizas/ventana-corrediza3.jpg'
import Corrediza4 from '../assets/corredizas/ventana-corrediza-moderna-celosia4.jpg'
import PañoFijo1 from '../assets/pañoFijo/ventanaPF-pvc1.jpg'
import PañoFijo2 from '../assets/pañoFijo/ventanaPF-pvc-madera2.jpg'
import PañoFijo3 from '../assets/pañoFijo/ventanaPF-moderna3.jpg'


const ItemDetailContainer = () => {

    const products = [
        { id: 101, name: "Ventana Sureña PVC", category: "sureña", description: "Conoce nuestras ventanas sureñas, contamos con tamaños estándar y a medida ", price: 10000, stock: 10, img: { Sureña1 } },
        { id: 102, name: "Ventana Sureña PVC simil madera", category: "sureña", description: "Conoce nuestras ventanas corredizas,  contamos con tamaños estándar y a medida", price: 1000, stock: 15, img: { Sureña2 } },
        { id: 103, name: "Ventana Sureña PVC moderna", category: "sureña", description: "Conoce nuestras ventanas paños fijos,  contamos con tamaños estándar y a medida", price: 100, stock: 20, img: { Sureña3 } },
        { id: 104, name: "Ventana Corrediza PVC", category: "corrediza", description: "Conoce nuestras ventanas sureñas, contamos con tamaños estándar y a medida ", price: 10000, stock: 10, img: { Corrediza1 } },
        { id: 105, name: "Ventana Corrediza PVC simil madera", category: "corrediza", description: "Conoce nuestras ventanas corredizas,  contamos con tamaños estándar y a medida", price: 1000, stock: 15, img: { Corrediza2 } },
        { id: 106, name: "Ventana Corrediza PVC moderna", category: "corrediza", description: "Conoce nuestras ventanas paños fijos,  contamos con tamaños estándar y a medida", price: 100, stock: 20, img: { Corrediza3 } },
        { id: 107, name: "Ventana Corrediza PVC moderna", category: "corrediza", description: "Conoce nuestras ventanas paños fijos,  contamos con tamaños estándar y a medida", price: 100, stock: 20, img: { Corrediza4 } },
        { id: 108, name: "Ventana Paño Fijo PVC", category: "pañoFijo", description: "Conoce nuestras ventanas sureñas, contamos con tamaños estándar y a medida ", price: 10000, stock: 10, img: { PañoFijo1 } },
        { id: 109, name: "Ventana Paño Fijo PVC simil madera", category: "pañoFijo", description: "Conoce nuestras ventanas corredizas,  contamos con tamaños estándar y a medida", price: 1000, stock: 15, img: { PañoFijo2 } },
        { id: 110, name: "Ventana Paño Fijo PVC moderna", category: "pañoFijo", description: "Conoce nuestras ventanas paños fijos,  contamos con tamaños estándar y a medida", price: 100, stock: 20, img: { PañoFijo3 } },

    ]
    const getProducts = new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        } else {
            reject(new Error("No data"))
        }
    })
    getProducts
        .then((res) => {
            console.log(res)
        })
        .catch((rej) => {
            console.log(rej)
        })
    return (
        <>
            <ItemDetail
                products={products}
            />
        </>
    )
}

export default ItemDetailContainer