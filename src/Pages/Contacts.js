import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Button,
  FormCheck,
} from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "500px" }} className="mt-4">
        <h1 className="text-center">Contact us </h1>
        <Form>
          <FormGroup controlId="formBasicEmail" className="mt-3">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
            <FormText>We'll never share your email with anyone else</FormText>
          </FormGroup>
          <FormGroup controlId="formBasicPassword" className="mt-3">
            <FormLabel>Example textarea</FormLabel>
            <FormControl as="textarea" rows="3" />
          </FormGroup>

          <FormGroup controlId="formBasicCheckbox" className="mt-3">
            <FormCheck type="checkbox" label="Check me out" />
          </FormGroup>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
