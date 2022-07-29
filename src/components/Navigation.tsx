import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Navigation = (props: any) => {
    const { getSavedPokemon } = props

    useEffect(() => {
        localStorage.setItem('pokemon', JSON.stringify(getSavedPokemon));
    }, [getSavedPokemon])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Search for Pokemon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="View Saved Pokemon" id="basic-nav-dropdown">
                            {getSavedPokemon.map((saved_pokemon: string, index: number) => (
                                <NavDropdown.Item key={index}>{saved_pokemon}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation