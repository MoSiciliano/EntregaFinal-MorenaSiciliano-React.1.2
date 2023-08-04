import CartWidget from './CartWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Titulo from '../assets/logo_instagramoOrigin.png';
import 'animate.css';

const NavBar = () => {
    return (
        <Navbar expand="md" className="navBar animate__animated animate__backInDown" >
            <Container className='container--navbar'>
                <Link className='tittle--navbar' to={"/"}>
                    <img src={Titulo} width={100} height={100} />
                </Link>
                <Navbar.Collapse className='basic-navbar-nav' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/about"}>
                            Nosotros
                        </Link>
                        <Link >Cotizaciones</Link>
                        < NavDropdown title="Catálogo de aberturas" id="basic-nav-dropdown">
                            <Link to={`/category/${"sureña"}`}>
                                Sureña
                            </Link>
                            <NavDropdown.Divider />
                            <Link to={`/category/${"corrediza"}`}>
                                Corrediza
                            </Link>
                            <NavDropdown.Divider />
                            <Link to={`/category/${"pañoFijo"}`}>
                                Paño fijo
                            </Link>
                        </NavDropdown>
                        <Link>Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar