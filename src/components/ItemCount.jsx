import { useContext, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../Context/ShoppingCartContext';

/**Counter class 05 */
const ItemCount = ({ stock, product }) => {
    const { cart, addToCart } = useContext(CartContext)
    const [quantity, setCounter] = useState(1)

    const handleSums = () => {
        quantity < stock ?
            setCounter(quantity + 1)
            : console.log("there is no more stock")

    }

    const handleLess = () => {
        quantity > 1 && setCounter(quantity - 1)

    }


    return (
        <Container className='counter--container'>
            <Row>
                < Col>
                    <Button onClick={handleSums} variant="secondary">+</Button>{' '}
                </Col>
                <Col>
                    <p className='counter'>{quantity}</p>
                </Col>
                <Col>
                    <Button onClick={handleLess} variant="secondary">-</Button>{' '}
                </Col>
                <Button onClick={() => { addToCart(product, quantity) }} variant='dark'>Add to cart</Button>
            </Row>
        </Container>
    )
}

export default ItemCount