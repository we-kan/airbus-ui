import React, { Component } from 'react';

import { Row, Col, Card, CardTitle, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card body>
            <legend>Dashboard</legend>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;
