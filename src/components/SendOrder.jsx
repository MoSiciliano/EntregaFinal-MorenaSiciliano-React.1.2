import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import { Button } from 'react-bootstrap';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import img from '../assets/checkOut.png'
import 'animate.css'


const SendOrder = () => {
    const { cart, totalQuantity, deleteCart } = useContext(CartContext)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(orderCollection, order)
            .then(({ id }) =>
                setOrderId(id),
                deleteCart(),
            )
    }
    const order = {
        buyer: { name, email, phone },
        products: cart,
        total: totalQuantity()
    }
    const orderCollection = collection(db, "pedidos");
    if (orderId) {
        return (
            <div className='login-box text--end'>
                <img src={img} alt="check" className='img--check animate__animated animate__backInDown' />
                <h1 className='animate__animated animate__backInLeft'>¡Tu pedido ha sido enviado con éxito!</h1>
                <div className='animate__animated animate__backInLeft user-box text--end'>
                    <h3 className='text--end'>El ID de compra es:</h3>
                    <h3 className='orderId'> {orderId}</h3>
                    <h4>Por favor guarda este ID para que puedas efectuar el pago.</h4>
                    <h5>¡Gracias por elegir a  <br />
                        Samana Transformaciones!
                        <br />
                        💛
                    </h5>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="login-box">
                <p>Formulario finalización de compra</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input required="rellenar campo" name="" type="text" placeholder='' onChange={((e) => setName(e.target.value))} />
                        <label>Nombre Completo</label>
                    </div>
                    <div className="user-box">
                        <input required="rellenar campo" name="" placeholder='' type="email" onChange={((e) => setEmail(e.target.value))} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input name="" type="phone" placeholder='' required="rellenar campo" onChange={((e) => setPhone(e.target.value))} />
                        <label>Teléfono</label>
                    </div>
                    <div className="user-box">
                        <select size='sm' className='bg-dark'>
                            <option>Débito</option>
                            <option>Crédito</option>
                            <option>Efectivo</option>
                            <option>Transferencia</option>
                        </select>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" id="scales" name="scales" required />
                        <label className='checkbox--text' form='scales' >¿Los productos estan correctos?</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Button type='submit' variant='outline-ligth' >
                            Comprar
                        </Button>
                    </a>
                </form>
            </div>
        </div>
    )
}

export default SendOrder