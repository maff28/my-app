import React from "react";
import { Image, Carousel } from "react-bootstrap";

export default function Carrusel3() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <Image src="../picture/carrusel-3.jpg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="../picture/carrusel-4.jpg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
