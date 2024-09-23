import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


const NavBar = () => {
    return (

        <Navbar expand="lg" >
            <Container className="mx-auto " >
                <Navbar.Brand  className='text-warning' href='/'> <strong> Javucho - Pizzeria y Sangucheria </strong></Navbar.Brand>
                <Navbar.Toggle className='' aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0 "
                        navbarScroll
                    >
                        
                        
                    </Nav>
                    
                    <Nav
                        className="my-2 my-lg-0 ms-auto"
                        navbarScroll
                    >
                        <Nav.Link className='nav-link-custom mx-2' href='/'>Hacer pedido</Nav.Link>
                        <Nav.Link className='nav-link-custom mx-2' href='/pedidos'>Ver pedidos</Nav.Link>
                        <Nav.Link className='nav-link-custom mx-2' href='/pedidosFinalizados'>Pedidos finalizados</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}


export default NavBar;
