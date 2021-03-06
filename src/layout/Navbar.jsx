import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <a href="#brand">TopUpLah!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} componentClass={NavLink} href="/" to="/">
              WeChat Top Up
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={NavLink}
              href="/payonbehalf"
              to="/payonbehalf"
            >
              Pay On Behalf (代付)
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={NavLink}
              href="/wallet"
              to="/wallet"
            >
              How To Activate WeChat Pay
            </NavItem>
            {/* <NavItem eventKey={2} componentClass={NavLink} href="/wechat" to="/wechat">
              WeChat Top Up
            </NavItem> */}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={8} href="https://www.facebook.com/topupla/">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </NavItem>
            <NavItem
              eventKey={9}
              href="https://wa.me/6583388886/?text='Hi! I am interested in the WeChat Top Up.'"
            >
              <FontAwesomeIcon icon={["fab", "whatsapp"]} size="2x" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;
