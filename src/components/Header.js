import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';

const CustomLink = styled.span`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

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
              <Link to="/feed">
                <CustomLink>Feed</CustomLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/upload-new">
                <CustomLink>Upload new</CustomLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/dashboard">
                <CustomLink>Dashboard</CustomLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/dashboard">
                <CustomLink>Logout</CustomLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Login;
