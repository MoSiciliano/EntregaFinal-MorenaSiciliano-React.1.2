import React, { useState } from 'react'
import welcomeImg from '../assets/welcome_img-withOut.png';
import 'animate.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Welcome = ({ greeting }) => {

  return (
    <>
      <div className='container--textWelcome'>
        <p className='animate__animated animate__backInLeft textWelcome'>{greeting}</p>
        <img className='animate__animated animate__backInRight' src={welcomeImg} alt="" width={350} height={350} />
        <Link to={"/catalogue"}>
          <Button variant='outline-dark' width="30%" className='btn--catalogue'>
            Ver Cátalogo
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Welcome