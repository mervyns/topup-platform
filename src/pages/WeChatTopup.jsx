import React, { Component, Fragment } from "react";
import dayjs from 'dayjs';
import {
  Grid,
  Row,
  Col,
  Panel,
  FormGroup,
  FormControl,
  InputGroup
} from "react-bootstrap";
import HKDTransferPanel from "./panels/HKDTransferPanel";
import SGDTransferPanel from "./panels/SGDTransferPanel";

class WeChatTopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: "sgd",
      amount: 0,
      rateSGDToCNY: 4.9,
      rateHKDToCNY: 0.85
    };
  }

  handleNumberChange = e => {
    if (this.state.currency === "sgd") {
      const changedAmount = Number(
        parseFloat(e.target.value / this.state.rateSGDToCNY)
      )
        .toFixed(2)
        .toLocaleString();
      this.setState({ amount: changedAmount });
    } else if (this.state.currency === "hkd") {
      const changedAmount = Number(
        parseFloat(e.target.value / this.state.rateHKDToCNY)
      )
        .toFixed(2)
        .toLocaleString();
      this.setState({ amount: changedAmount });
    }
  };

  handleSelectChange = e => {
    this.setState({ currency: e.target.value });
  };

  render() {
    const { currency, rateSGDToCNY, rateHKDToCNY } = this.state; 
    const currentDate = Date.now()
    return (
      <Fragment>
        <Grid>
          <Row>
            <Col sm={12} md={12} lg={3} xl={3}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4">Current Rates as of {dayjs(Date.now()).format('ddd DD/MM/YYYY')}</Panel.Title>
                </Panel.Heading>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    1 SGD : {rateSGDToCNY} CNY
                  </li>
                  <li className="list-group-item">
                    1 HKD : {rateHKDToCNY} CNY
                  </li>
                </ul>
              </Panel>
            </Col>
            <Col sm={12} md={12} lg={8} xl={8}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">
                    How to Top Up my WeChat Pay?
                  </Panel.Title>
                </Panel.Heading>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">
                      Step 1: Choose your currency
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <div className="row">
                      <div className="col-lg-6">
                        <FormGroup>
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            value={this.state.currency}
                            onChange={this.handleSelectChange}
                          >
                            <option value="sgd">
                              SGD to CNY (WeChat TopUp)
                            </option>
                            <option value="hkd">
                              HKD to CNY (WeChat TopUp)
                            </option>
                          </FormControl>
                        </FormGroup>
                      </div>
                      <div className="col-lg-6">
                        <FormGroup>
                          <InputGroup>
                            <FormControl
                              type="number"
                              placeholder="Your desired amount"
                              onChange={this.handleNumberChange}
                            />
                            <InputGroup.Addon>CNY</InputGroup.Addon>
                          </InputGroup>
                        </FormGroup>
                      </div>
                    </div>
                    <p className="mb-1 text-left">
                      You would have to pay{" "}
                      <b>
                        {this.state.amount} {currency === "sgd" ? "SGD" : "HKD"}
                      </b>
                    </p>
                  </Panel.Body>
                </Panel>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">
                      Step 2: Add us on WeChat
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <img
                      src="../../wechat.png"
                      className="card-image-top"
                      style={{ width: "18rem" }}
                      alt="wechat"
                    />
                    <p className="card-text mb-1 text-left">
                      Scan our WeChat QR code to add us as a friend on WeChat
                      and let us know the amount that you wish to exchange.
                    </p>
                  </Panel.Body>
                </Panel>
                {currency === "sgd" ? (
                  <SGDTransferPanel />
                ) : (
                  <HKDTransferPanel />
                )}
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">
                      Step 4: Confirm Transaction
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p className="mb-1 text-left">
                      Once we have confirmed receipt of your payment, we will
                      immediately do the transfer of funds to your WeChat
                      account, and all you have to do is accept the transfer and
                      the transaction is complete.
                    </p>
                  </Panel.Body>
                </Panel>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

export default WeChatTopup;
