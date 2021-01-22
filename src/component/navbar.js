import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = ( props ) => {

    console.log(`NAv ${props.allRegion}`)

    const NavItem = props.allRegion.map( (region) => {
        return (
        <NavDropdown.Item key = {region} onClick = {() => props.switchRegion(region)}  >{region}</NavDropdown.Item> )
    } );

    
    // console.log(NavItem)

    return (
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MyOrder</Navbar.Brand>
                
                <Nav className="mr-auto">
                     <Nav.Link >Region : {props.region}</Nav.Link>
                    <NavDropdown title="Select" id="collasible-nav-dropdown">
                        {NavItem}
                    </NavDropdown>
                </Nav>
            </Navbar>
    )
}

export default NavBar;
