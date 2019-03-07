import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">Airbus Aerothon 2019</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/feed">Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/upload-new">Upload new</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/dashboard">Search and Filter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/dashboard">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Login;
