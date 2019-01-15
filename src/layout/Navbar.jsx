import React from "react";
import { NavLink } from 'react-router-dom';

class NavbarPage extends React.Component {
  state = {
    isOpen: false
  };
  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">TopUpLa!</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/wechat" className="nav-link" activeClassName="selected">WeChat Top Up</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default NavbarPage;
