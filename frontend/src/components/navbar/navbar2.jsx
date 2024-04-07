import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Container, Image} from 'react-bootstrap'

export default function Navbar2() {
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
            <Nav.Link href="/home">Crear solicitud</Nav.Link>
            <Nav.Link href="#Sobre_nosotros">Ver estado de solicitud</Nav.Link>
            <Nav.Link href="#Servicios">Historial de solicitudes</Nav.Link>
            <Nav.Link href="#Equipo">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
