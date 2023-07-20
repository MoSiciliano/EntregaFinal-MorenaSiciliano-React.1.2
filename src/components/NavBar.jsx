import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Titulo from '../assets/logo_instagramoOrigin.png';
import 'animate.css';

const NavBar = () => {
    return (
        <Navbar expand="md" className="navBar animate__animated animate__backInDown" >
            <Container className='container--navbar'>
                <Navbar.Brand className='tittle--navbar' href="#home"><img src={Titulo} width={100} height={100} /></Navbar.Brand>
                <Navbar.Collapse className='basic-navbar-nav' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutUs">Quiénes somos</Nav.Link>
                        <Nav.Link href="#Works">Cómo trabajamos</Nav.Link>
                        <NavDropdown className="dropdown--navbar" title="Service" id="collasible-navbar-nav">
                            <NavDropdown.Item href="#action/3.1">Antes y despues</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Finalizados
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Procesos</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar