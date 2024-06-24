import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        {/* <CarouselBox /> */}

        <Row className="mt-6">
          <Col md="9">
            <Card className="mb-3 border-0 mt-3">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img
                    src="https://static.vecteezy.com/system/resources/thumbnails/022/453/176/small/huge-distribution-warehouse-with-high-shelves-free-photo.jpg"
                    alt="Blog Post"
                    // width={150}
                    // height={150}
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Blog Post</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3 border-0">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img
                    src="https://static.vecteezy.com/system/resources/thumbnails/022/453/176/small/huge-distribution-warehouse-with-high-shelves-free-photo.jpg"
                    alt="Blog Post"
                    // width={150}
                    // height={150}
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Blog Post</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3 border-0">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img
                    src="https://static.vecteezy.com/system/resources/thumbnails/022/453/176/small/huge-distribution-warehouse-with-high-shelves-free-photo.jpg"
                    alt="Blog Post"
                    // width={150}
                    // height={150}
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Blog Post</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3 border-0">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img
                    src="https://static.vecteezy.com/system/resources/thumbnails/022/453/176/small/huge-distribution-warehouse-with-high-shelves-free-photo.jpg"
                    alt="Blog Post"
                    // width={150}
                    // height={150}
                    className="border-0"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Blog Post</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-3">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>Html/Css</ListGroupItem>
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>C++</ListGroupItem>
                <ListGroupItem>Python</ListGroupItem>
              </ListGroup>
            </Card>
            <Card className="mt-3 bg-light">
              <CardBody>
                <CardTitle>Side widget</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
