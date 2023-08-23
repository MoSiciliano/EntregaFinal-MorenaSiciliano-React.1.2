import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

    return (
        <>
            <Card className='card--detail--container'>
                <Card.Img className='card--detail--img' variant="top" src={item.img} />
                <Card.Body className='card--detail--body'>
                    <Card.Title>
                        <h2>{item.name}</h2>
                    </Card.Title>
                    <h4>{item.category}</h4>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <Card.Footer className='card--detail--footer'>
                        <ItemCount product={item} stock={item.stock} />
                    </Card.Footer>
                </Card.Body>
            </Card>

        </>

    )
}

export default ItemDetail