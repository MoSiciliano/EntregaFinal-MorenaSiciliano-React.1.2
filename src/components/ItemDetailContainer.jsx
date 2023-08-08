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
        {
            id: 101, name: "Ventana Sureña PVC", category: "sureña",
            description: "Las ventanas sureñas se distinguen por tener una hoja de abrir y un paño fijo. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 10000, stock: 10, img: Sureña1
        },
        {
            id: 102, name: "Ventana Sureña PVC simil madera", category: "sureña",
            description: "Las ventanas sureñas se distinguen por tener una hoja de abrir y un paño fijo. El segundo modelo más solicitado siempre es el formato simil madera, ya que aporta sensación de acojo y hostilidad mas alla de su practicidad y sencillez. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 1000, stock: 15, img: Sureña2
        },
        {
            id: 103, name: "Ventana Sureña PVC moderna", category: "sureña",
            description: "Las ventanas sureñas se distinguen por tener una hoja de abrir y un paño fijo. El modelo más demandado por nuestros clientes es el modelo morderno, ya que aporta un estilo sencillo, comodo a la vista y sobre todo por su carácter vanguardista. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 100, stock: 20, img: Sureña3
        },
        {
            id: 104, name: "Ventana Corrediza PVC", category: "corrediza",
            description: "Las ventanas corredizas son de las mas demandadas por nuestros clientes, por su practicidad y sencillez.Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 10000, stock: 10, img: Corrediza1
        },
        {
            id: 105, name: "Ventana Corrediza PVC simil madera", category: "corrediza",
            description: "Las ventanas corredizas son de las mas demandadas por nuestros clientes, el segundo más solicitado siempre es el modelo simil madera, ya que aporta sensación de acojo y hostilidad mas alla de su practicidad y sencillez.Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 1000, stock: 15, img: Corrediza2
        },
        {
            id: 106, name: "Ventana Corrediza PVC moderna", category: "corrediza",
            description: "Las ventanas corredizas son de las mas demandadas por nuestros clientes,en especial el modelo morderno, ya que aporta un estilo sencillo, comodo a la vista y sobre todo por su carácter vanguardista.Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 100, stock: 20, img: Corrediza3
        },
        {
            id: 107, name: "Ventana Corrediza con celosia moderna", category: "corrediza",
            description: "Las ventanas corredizas son de las mas demandadas por nuestros clientes,en especial el modelo morderno, ya que aporta un estilo sencillo, comodo a la vista y sobre todo por su carácter vanguardista. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 100, stock: 20, img: Corrediza4
        },
        {
            id: 108, name: "Ventana Paño Fijo PVC", category: "pañoFijo",
            description: "Los paños fijos se caracteriizan por no tener ningún tipo de abertura, pero se destacan porque posibilitan mayores superficies vidriadas. Estas son ideales para optimizar la iluminación natural del hogar, además que generan sensación de ampitud en los ambientes. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 10000, stock: 10, img: PañoFijo1
        },
        {
            id: 109, name: "Ventana Paño Fijo PVC simil madera", category: "pañoFijo",
            description: "Los paños fijos se caracteriizan por no tener ningún tipo de abertura, pero se destacan porque posibilitan mayores superficies vidriadas. Estas son ideales para optimizar la iluminación natural del hogar, además que generan sensación de ampitud en los ambientes.El segundo modelo más solicitado siempre es el formato simil madera, ya que aporta sensación de acojo y hostilidad mas alla de su practicidad y sencillez. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 1000, stock: 15, img: PañoFijo2
        },
        {
            id: 110, name: "Ventana Paño Fijo PVC moderna", category: "pañoFijo",
            description: "Los paños fijos se caracteriizan por no tener ningún tipo de abertura, pero se destacan porque posibilitan mayores superficies vidriadas. Estas son ideales para optimizar la iluminación natural del hogar, además que generan sensación de ampitud en los ambientes. El modelo más demandado por nuestros clientes es el modelo morderno, ya que aporta un estilo sencillo, comodo a la vista y sobre todo por su carácter vanguardista. Todos nuestros modelos son echos con material PVC, estos insumos son los mas destacados en el mercado por su capacidad aislante tanto acústica como térmicas. Desde Samana Transfromaciones buscamos darle la mejor calidad a nuestros buenos clientes, confia en nosotros, somos Samana!",
            price: 100, stock: 20, img: PañoFijo3
        }

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