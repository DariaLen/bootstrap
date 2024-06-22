import React from "react";
import Carousel from "react-bootstrap/Carousel";
import warehouse from "../assets/warehouse.jpg";
import stockroom from "../assets/stockroom.jpg";
import worker from "../assets/worker.jpg";
import work from "../assets/worker_some.jpg";

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="s-block w-100 img-fluid"
          src={warehouse}
          alt="Warehouse"
        />

        <Carousel.Caption>
          <h3>Warehouse image </h3>
          <p>Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="s-block w-100 img-fluid"
          src={stockroom}
          alt="Stockroom"
        />

        <Carousel.Caption>
          <h3>Stockroom image </h3>
          <p>Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="s-block w-100 img-fluid" src={work} alt="Work" />

        <Carousel.Caption>
          <h3>Work image </h3>
          <p>Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="s-block w-100 img-fluid" src={worker} alt="Worker" />

        <Carousel.Caption>
          <h3>Worker image </h3>
          <p>Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
