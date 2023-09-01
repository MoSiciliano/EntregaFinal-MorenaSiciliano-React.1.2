import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Item = (
    { name,
        description,
        id, img
    }
) => {
    return (
        <>
            <Card className="bg-dark text-white card--container">
                <Card.Img variant="top" src={img} alt={name} width={'100%'} height={'500vw'} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Footer>
                        <Button variant='dark'>
                            <Link to={`/item/${id}`}>
                                See more
                            </Link>
                        </Button>
                    </Card.Footer>
                </Card.Body>

            </Card>


        </>
    )
}

export default Item