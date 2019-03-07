import React, { Component } from 'react';

import { Row, Col, Card, CardTitle, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Row>
            <Col md={{ size: 6, offset: 3 }}>
      <Card body>
        <legend>Login to Airbus dashboard</legend>
        <Form>
          <FormGroup>
            <Label for="loginEmail">Email</Label>
            <Input type="email" name="email" id="loginEmail" placeholder="Enter email here" />
          </FormGroup>
          <FormGroup>
            <Label for="loginPassword">Password</Label>
            <Input type="password" name="password" id="loginPassword" placeholder="Enter password here" />
          </FormGroup>

          <Button>Login</Button>
        </Form>
      </Card></Col></Row>
    );
  }
}

export default Login;
