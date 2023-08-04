import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';

const ItemDetail = ({ products }) => {
    const { id } = useParams();
    const filterProducts = products.filter((product) => product.id == id)
    console.log(products);
    return (
        <>

            {filterProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Card>
                            <Card.Header>
                                <img>{p.img}</img>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <h2>{p.name}</h2>
                                </Card.Title>
                                <h4>{p.category}</h4>
                                <p>{p.description}</p>
                                <p>{p.price}</p>
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