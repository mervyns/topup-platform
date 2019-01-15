import React, { Component, Fragment } from "react";
import { Panel } from "react-bootstrap";

class WeChatTopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: "cny",
      amount: 0,
      rate: 4.9
    };
  }

  handleNumberChange = e => {
    if (this.state.currency === "cny") {
      const changedAmount = Number(parseFloat(e.target.value / this.state.rate))
        .toFixed(2)
        .toLocaleString();
      this.setState({ amount: changedAmount });
    } else if (this.state.currency === "sgd") {
      const changedAmount = Number(parseFloat(e.target.value * this.state.rate))
        .toFixed(2)
        .toLocaleString();
      this.setState({ amount: changedAmount });
    }
  };

  handleSelectChange = e => {
    this.setState({ currency: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="container-responsive">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-12 col-sm-12 mx-1">
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4">Current Rates</Panel.Title>
                </Panel.Heading>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">1 SGD : 4.90 CNY</li>
                  <li className="list-group-item">1 HKD : 0.85 CNY</li>
                </ul>
              </Panel>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
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
                        <select
                          className="browser-default custom-select"
                          value={this.state.currency}
                          onChange={this.handleSelectChange}
                        >
                          <option value="cny">I want CNY (WeChat TopUp)</option>
                          <option value="sgd">I want SGD</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <input
                          placeholder="Your desired amount"
                          onChange={this.handleNumberChange}
                        />
                      </div>
                    </div>
                    <p className="mb-1 text-left">
                      You would have to pay {this.state.amount}{" "}
                      {this.state.currency === "cny" ? "SGD" : "CNY"}
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
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">
                      Step 3: Make payment to us
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p className="mb-1 text-left">
                      You can transfer us your payment via PayNow, PayLah.
                    </p>
                    <p className="mb-1 text-left">Number : +65 8338 8886</p>
                    <p className="mb-1 text-left">
                      Please indicate your WeChat ID and Phone Number in the
                      Transaction Details.
                    </p>
                  </Panel.Body>
                </Panel>
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
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WeChatTopup;
