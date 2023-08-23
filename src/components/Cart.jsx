import React, { useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext'
import { Button, Col, Container, Row } from 'react-bootstrap'
import icon from '../assets/logo--trash--icon-removebg-preview.png'

const Cart = () => {
    const { cart, totalQuantity, deleteCart, removeProduct } = useContext(CartContext)
    console.log(cart)
    const handleDelete = () => {
        deleteCart()
    }
    return (
        <>

            {cart.map((product) => {
                return (
                    <section key={product.id} className='container--cart'>

                        <h3>{product.name}</h3>
                        <Container className='container--qty--cart'>
                            <Row>
                                <Col>
                                    <Button variant="secondary">+</Button>{' '}
                                </Col>
                                <Col>
                                    <p>{product.quantity}</p>
                                </Col>
                                <Col>
                                    <Button variant="secondary">-</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                        <div className='cart--price'>
                            <p >Price unit ${product.price}</p>
                            <p className='cart--price--quantity'>Price quantity ${product.price * product.quantity}</p>
                        </div>

                        <Button onClick={() => removeProduct(product.id)} className='btn--trash--cart' variant='outline-dark'>
                            <img src={icon} alt="" width={'50%'} height={'50%'} />
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
                            <Button onClick={handleDelete} className='btn' variant="outline-danger">DELETE </Button>
                            <Button onClick={handleDelete} className='btn' variant="outline-success">BUY </Button>
                        </div>
                    </div>
                </> :
                <div className='cart--empty'>
                    <p className='text--cart--empty'>Cart is empty</p>
                </div>
            }

        </>
    )
}

export default Cart