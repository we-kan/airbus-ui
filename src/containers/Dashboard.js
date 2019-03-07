import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';
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
    this.props.history.push(`/dashboard/details/${aircraftId}`);
  };
  render() {
    const aircrafts = this.props.dataStore.aircrafts;
    return (
      <Row>
        <Col md={3} style={{ backgroundColor: '#ddd', paddingTop: '30px', cursor: 'pointer' }}>
          <p>Home</p>
          {aircrafts.map(air => (
            <p key={air.id} onClick={() => this.openAircraftInfo(air.id)}>
              {air.name}
            </p>
          ))}
          <p>Search and Filter</p>
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
