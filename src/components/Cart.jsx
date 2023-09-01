import React, { useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext'
import { Button } from 'react-bootstrap'
import icon from '../assets/logo--trash--icon-removebg-preview.png'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalQuantity, deleteCart, removeProduct } = useContext(CartContext)

    const handleDelete = () => {
        deleteCart()
    }
    return (
        <>

            {cart.map((product) => {
                return (
                    <section key={product.id} className='container--cart'>
                        <h3>{product.name}</h3>
                        <p>{product.quantity}</p>

                        <div className='cart--price'>
                            <p >Price unit ${product.price}</p>
                            <p className='cart--price--quantity'>Price quantity ${product.price * product.quantity}</p>
                        </div>

                        <Button onClick={() => removeProduct(product.id)} className='btn--trash--cart' variant='outline-dark'>
                            <img src={icon} alt="" width={'100%'} height={'100%'} />
                        </Button>



                    </section>
                )
            })}
            {cart.length > 0 ?
                <>
                    <div className='container--cart--footer'>
                        <div>
                            <h2 className='total--price--cart'>Total Price: {totalQuantity()}</h2>
                        </div>
                        <div className='container--btn--cart'>
                            <Button onClick={handleDelete} className='btn' variant="outline-danger">BORRAR </Button>
                            <Link to={"/checkOut"}>
                                <Button className='btn' variant="outline-success">COMPRAR </Button>
                            </Link>
                        </div>
                    </div>
                </> :
                <div className='cart--empty'>
                    <p className='text--cart--empty'>Cart is empty</p>
                    <Link to={"/catalogue"}>
                        <Button variant='outline-dark' width="30%">
                            Ver Cátalogo
                        </Button>
                    </Link>
                </div>
            }

        </>
    )
}

export default Cart