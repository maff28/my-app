import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Container, Image} from 'react-bootstrap'

export default function navbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary">
      <Container>
      <Image src="../picture/IUB.PNG" className="d-block" fluid/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="#Sobre_nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="#Servicios">Servicios</Nav.Link>
            <Nav.Link href="#Equipo">Equipo</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
