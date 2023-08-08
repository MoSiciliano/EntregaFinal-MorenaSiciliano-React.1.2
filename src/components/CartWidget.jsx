import React from 'react'
import icon from '../assets/shopping-cart.png';
import { useState } from 'react';
import { Button, Offcanvas } from "react-bootstrap";

const CartWidget = ({ ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="outline-dark" onClick={handleShow} className="me-2 icon--cart">
                <img className='icon--cart' src={icon} alt="" width={50} height={50} />
                <span className='number--cart' size='md'>0</span>
            </Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart Widget</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    🙁 There're no products in the cart widget 🙁
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidget