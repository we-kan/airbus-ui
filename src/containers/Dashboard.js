import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Details from '../components/Details';
import { inject, observer } from 'mobx-react';

@inject('dataStore')
@observer
class Dash extends Component {
  // airs = [{ id: 1, name: 'A320' }, { id: 2, name: 'A330' }];
  componentDidMount() {
    this.props.dataStore.getAircrafts();
  }

  openAircraftInfo = aircraftId => {
    this.props.dataStore.getAircraftInfo(aircraftId);
    this.props.history.push(`/dashboard/details/${aircraftId}`);
  };
  render() {
    const aircrafts = this.props.dataStore.aircrafts;
    return (
      <Row>
        <Col md={3} style={{  paddingTop: '30px', cursor: 'pointer', width: '100%'}}>
        <ListGroup>
          <ListGroupItem>Home</ListGroupItem>
          {aircrafts.map(air => (
            <ListGroupItem key={air.id} onClick={() => this.openAircraftInfo(air.id)}>
              {air.name}
            </ListGroupItem>
          ))}
          <ListGroupItem>Search and Filter</ListGroupItem></ListGroup>
        </Col>
        <Col md={9}>
          <Switch>
            <Route path="/dashboard/details/:model" component={Details} />
          </Switch>
        </Col>
      </Row>
    );
  }
}

Dash.propTypes = {
  dataStore: PropTypes.object,
  history: PropTypes.object
};

export default Dash;
