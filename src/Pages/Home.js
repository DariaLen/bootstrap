import React from "react";
//import Carousel from "react-bootstrap/Carousel";
import CarouselBox from "../Components/CarouselBox";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Our team</h2>

        <Row className="m-4">
          <Col md={4}>
            <Card bg="dark" text="white">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/6169061/pexels-photo-6169061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/6407535/pexels-photo-6407535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
