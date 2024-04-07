import React from "react";
import { Image, Carousel } from "react-bootstrap";

export default function Carrusel1() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <Image src="../picture/c2.jpg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="../picture/sede-iub.jpeg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
