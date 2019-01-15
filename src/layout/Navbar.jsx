import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown
} from "react-bootstrap"

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleOpen = () => {
    console.log(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">TopUpLa!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/wechat">
              WeChat Top Up
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;
