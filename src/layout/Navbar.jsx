import React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="money-collect" />
              Our Top Up Services
            </span>
          }
        >
          <Menu.Item key="setting:1">WeChat Pay Topup</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="contact">
          <Icon type="customer-service" />
          Instructions
        </Menu.Item>
        <Menu.Item key="contact">
          <Icon type="customer-service" />
          Contact Us
        </Menu.Item>
        <Menu.Item key="tnc">
          <Icon type="info-circle" />
          Terms and Conditions
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
