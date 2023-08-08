import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({ products }) => {
    const { id } = useParams();
    const filterProducts = products.filter((product) => product.id == id)
    console.log(products);
    return (
        <>

            {filterProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Card className='card--detail--container'>
                            <Card.Img className='card--detail--img' variant="top" src={p.img} />
                            <Card.Body className='card--detail--body'>
                                <Card.Title>
                                    <h2>{p.name}</h2>
                                </Card.Title>
                                <h4>{p.category}</h4>
                                <p>{p.description}</p>
                                <p>${p.price}</p>
                                <Card.Footer className='card--detail--footer'>
                                    <ItemCount />
                                    <Button variant='dark'>Add to cart</Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
            }
        </>

    )
}

export default ItemDetail