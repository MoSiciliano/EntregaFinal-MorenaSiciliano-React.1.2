import React from 'react'
import 'animate.css';
import welcomeImg from '../assets/welcome_img-withOut.png';

const ItemListContainer = ({ greeting }) => {

    return (
        <div className='container-text-welcome'>
            <p className='animate__animated animate__backInLeft text-welcome'>{greeting}</p>

            <img className='animate__animated animate__backInRight' src={welcomeImg} alt="" width={350} height={350} />
        </div>
    )
}

export default ItemListContainer