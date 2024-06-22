import React, { Component } from "react";
import {
  Col,
  Container,
  Nav,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent className="mt-3">
                <TabPane eventKey="first">
                  <img
                    src="https://images.pexels.com/photos/7857557/pexels-photo-7857557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="img-fluid"
                  />
                  <p>
                    Questions to think about Is there one thing you especially
                    like to receive compliments about? What is it? Have you ever
                    received any backhanded compliments? What do you think about
                    such compliments? Post you answers on social media with the
                    hashtag video practice
                  </p>
                </TabPane>
                <TabPane eventKey="second">
                  <img
                    src="https://images.pexels.com/photos/6169046/pexels-photo-6169046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="img-fluid"
                  />
                  <p>
                    Questions to think about Is there one thing you especially
                    like to receive compliments about? What is it? Have you ever
                    received any backhanded compliments? What do you think about
                    such compliments? Post you answers on social media with the
                    hashtag video practice
                  </p>
                </TabPane>
                <TabPane eventKey="third">
                  <img
                    src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="img-fluid"
                  />
                  <p>
                    Questions to think about Is there one thing you especially
                    like to receive compliments about? What is it? Have you ever
                    received any backhanded compliments? What do you think about
                    such compliments? Post you answers on social media with the
                    hashtag video practice
                  </p>
                </TabPane>
                <TabPane eventKey="fourth">
                  <img
                    src="https://images.pexels.com/photos/7857532/pexels-photo-7857532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="img-fluid"
                  />
                  <p>
                    Questions to think about Is there one thing you especially
                    like to receive compliments about? What is it? Have you ever
                    received any backhanded compliments? What do you think about
                    such compliments? Post you answers on social media with the
                    hashtag video practice
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}
