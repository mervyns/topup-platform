import React, { Component, Fragment } from "react";
import { Row, Col, Input, Card, Select, List } from "antd";

const Option = Select.Option;
const Meta = List.Item.Meta;
const Item = List.Item;

const handleSelectChange = event => {
  if (event === "cny") {
    console.log(event);
  } else if (event === "sgd") {
    console.log(event);
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
    const changedAmount = Number(
      parseFloat(parseInt(e * this.state.rate))
    ).toLocaleString();
    this.setState({ amount: changedAmount });
  };

  render() {
    return (
      <Fragment>
        <Row type="flex" justify="center" align="middle">
          <Col span={4} />
          <Col span={8}>
            <Card
              style={{ width: 360, fontSize: "20px" }}
              title="Current Rate"
            >
              Rate : {this.state.rate}
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
            </Card>
          </Col>
          <Col span={8} justify="start">
            <Card title="How to get a top-up?" style={{fontSize: "1000px"}} >
              <List>
                <Item>
                  <Meta
                    title="Check Rate"
                    description="Check the current exchange rate and see how much you would have to pay for desired amount"
                  />
                </Item>
                <Item>
                  <Meta
                    title="Add us on WeChat"
                    description="Scan our WeChat QR code to add us as a friend on WeChat and let us know the amount that you wish to exchange."
                  />
                </Item>
                <Item>
                  <Meta
                    title="Make the transfer to our bank account"
                    description="You can transfer us your payment via PayNow, PayLah or Internet Banking. Please indicate your WeChat ID and Phone Number in the Transaction Details."
                  />
                </Item>
                <Item>
                  <Meta
                    title="Confirm Transaction"
                    description="Once we have confirmed receipt of your payment, we will immediately do the transfer of funds to your WeChat account, and all you have to do is accept the transfer and the transaction is complete."
                  />
                </Item>
              </List>
            </Card>
          </Col>
          <Col span={4} />
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
            <Input
              addonAfter="SGD"
              onChange={this.handleNumberChange}
              size="large"
            />
          </Col>{" "}
          {"<==========>"}
          <Col span={6}>
            <Input
              value={this.state.amount}
              addonAfter="CNY"
              size="large"
              disabled
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" gutter={10}>
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
              <Card.Meta description="Message us to get your WeChat Top Up." />
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
