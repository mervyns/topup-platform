import React, { Component, Fragment } from "react";
import { Row, Col, InputNumber, Input, Card, Select } from "antd";

const Option = Select.Option;

const handleSelectChange = event => {
  if (event === "cny") {
      console.log(event)
  } else if (event === "sgd") {
    console.log(event)
  }
};

class WeChatTopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "CNY",
      rate: "4.92",
      amount: 0
    };
  }

  handleNumberChange = e => {
      const changedAmount = Number(parseFloat(parseInt(e * this.state.rate))).toLocaleString()
      this.setState({amount: changedAmount })
  }
  render() {
    return (
      <Fragment>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={12}>
            <img src="../../hongbao.png" alt="hongbao" />
            Rate : {this.state.rate}
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          I want to change{" "}
          <Select defaultValue="cny" onChange={handleSelectChange}>
            <Option value="cny">SGD to CNY</Option>
            <Option value="sgd">CNY to SGD</Option>
          </Select>
          </Row>
         <Row type="flex" justify="center" align="middle" gutter={12}>
         <Col span={6}>
          <InputNumber
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            onChange={this.handleNumberChange}
            size="large"
          />
          </Col> {"<==========>"}
          <Col span={6}>
          <Input
           value = {this.state.amount}
           addonAfter="CNY"
            size="large"
            disabled
          />
          </Col>
        </Row>
        <Row type="flex" justify= "center" align="middle" gutter={10}>
        <Col>
        <Card
          hoverable
          style={{ width: 180 }}
          cover={<img src="../../whatsapp.png" alt="whatsapp" />}
        >
        <a href="https://wa.me/6583388886/?text=urlencodedtext">
          <i className="fab fa-whatsapp" />
          WhatsApp Us +65-83388886
        </a>
          <Card.Meta
            description="Message us to get your WeChat Top Up."
          />
        </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 180 }}
            cover={<img src="../../wechat.png" alt="wechat" />}
          >
            <Card.Meta
              title="Our WeChat QR"
              description="Chat with us on WeChat to get your WeChat Top Up."
            />
          </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default WeChatTopup;
