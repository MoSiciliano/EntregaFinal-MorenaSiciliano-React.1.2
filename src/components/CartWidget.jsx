import React, { useContext } from 'react'
import icon from '../assets/shopping-cart.png';
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/ShoppingCartContext';


const CartWidget = () => {
    const { quantityInCart } = useContext(CartContext)

    return (
        <>
            <Link to={"/cart"}>
                <Button variant="outline-dark" className=" button--cart icon--cart">
                    <img className='icon--cart' src={icon} alt="" width={50} height={50} />
                    <span className='number--cart' size='md'>{quantityInCart()}</span>
                </Button>
            </Link>

        </>
    )
}

export default CartWidget