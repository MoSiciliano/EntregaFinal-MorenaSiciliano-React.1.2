import React from 'react'
import { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [consulta, setConsulta] = useState("");


    return (
        <Form className='container--form'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridQst">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control placeholder='here you can ask to Samana your question' value={consulta} onChange={(e) => setConsulta(e.target.value)} />
                </Form.Group>

            </Row>

            <Button variant="warning" type="submit">
                Enviar
            </Button>
        </Form>
    );
}

export default Contact