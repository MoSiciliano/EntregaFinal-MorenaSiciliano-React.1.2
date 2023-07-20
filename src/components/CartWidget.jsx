import React from 'react'
import icon from '../assets/shopping-cart.png';


const CartWidget = () => {
    return (
        <div><img className='icon--cart' src={icon} alt="" width={50} height={50} />
            <span className='number--cart' size='md'>5</span>
        </div>
    )
}

export default CartWidget