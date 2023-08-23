import React from 'react'
import welcomeImg from '../assets/welcome_img-withOut.png';
import 'animate.css';
import ItemListContainer from './ItemListContainer';

const Welcome = ({ greeting }) => {
  return (
    <>
      <div className='container--textWelcome'>
        <p className='animate__animated animate__backInLeft textWelcome'>{greeting}</p>
        <img className='animate__animated animate__backInRight' src={welcomeImg} alt="" width={350} height={350} />
      </div>
      <ItemListContainer />
    </>
  )
}

export default Welcome