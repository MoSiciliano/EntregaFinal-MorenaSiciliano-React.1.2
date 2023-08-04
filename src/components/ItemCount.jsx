import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
/**Counter class 05 */
const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {

    }, [counter])
    const sumar = () => {
        if (counter == 0 || counter > 1) {
            setCounter(counter + 1)
        } else {
            setCounter(counter + 1)
        }
    }
    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else if (counter == 0) {
            console.log("No se pueden seguir restando productos");
        }

    }

    return (
        <Container className='counter--container'>
            <Row>

                <p>{counter}</p>

            </Row>
            <Row>
                < Col>
                    <Button onClick={sumar} variant="secondary">+</Button>{' '}
                </Col>
                <Col>
                    <Button onClick={restar} variant="secondary">-</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemCount