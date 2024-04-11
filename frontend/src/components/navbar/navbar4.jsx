import React, { Component } from "react";
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import{cerrar_sesion} from '../../sesion';

export default function Navbar4() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary">
      <Container>
      <Image src="../picture/IUB.PNG" className="d-block" fluid/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " class="h4">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/estudianteCreaSoli">solicitudes sin asignar</Nav.Link>
            <Nav.Link href="/estudianteVeEstadoSolicitud">solicitudes pendientes</Nav.Link>
            <Nav.Link href="#Servicios">solicitudes finalizadas</Nav.Link>
            <Nav.Link href="#Servicios">asignar solicitudes </Nav.Link>
            <Nav.Link href="#Servicios">mis solicitudes</Nav.Link>
            <Nav.Link href="#Servicios">mi historial</Nav.Link>
            <Nav.Link onClick={cerrar_sesion}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
