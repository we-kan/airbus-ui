import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardTitle, Table } from 'reactstrap';
import API from '../api';
import NewsCards from '../components/NewsCards';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentWillUpdate() {
    console.log(this.props.match.params);
    const res = await API.get(`/aircraft/aircraft_info/${this.props.match.params.model}/`);
    this.setState({ ...this.state, aircraftInfo: res.data });
  }

  render() {
    console.log(this.state);
    const info = this.state.aircraftInfo;
    return (
      <div>
        {info && (
          <div>
            <h1>Info for {info.aircraft.name}</h1>

            <Table>
              {/* <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead> */}
              <tbody>
                <tr>
                  <th scope="row">Aircraft Name</th>
                  <td>{info.aircraft.name}</td>
                </tr>
                <tr>
                  <th scope="row">Fuel Capacity Right Wing</th>
                  <td>{info.fuel_capacity_right_wing}</td>
                </tr>
                <tr>
                  <th scope="row">Fuel Capacity Left Wing</th>
                  <td>{info.fuel_capacity_left_wing}</td>
                </tr>
                <tr>
                  <th scope="row">Gross Weight</th>
                  <td>{info.gross_weight}</td>
                </tr>
                <tr>
                  <th scope="row">Harness Length</th>
                  <td>{info.harness_length}</td>
                </tr>
                <tr>
                  <th scope="row">Atmospheric Pressure</th>
                  <td>{info.atmospheric_pressure}</td>
                </tr>
                <tr>
                  <th scope="row">Room Temperature</th>
                  <td>{info.room_temperature}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object
};

export default Details;
