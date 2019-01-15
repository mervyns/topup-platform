import React, { Component, Fragment } from "react";

class WeChatTopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: "cny",
      amount: 0,
      rate: 4.92
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
          <div className="row justify-content-start">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div
                className="card"
                style={{ width: "22rem", marginTop: "1rem" }}
              >
                <div className="card-header">Current Rates</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">1 SGD : 4.92 CNY</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">How to Top Up my WeChat Pay?</div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Step 1: Choose your currency</h5>
                  </div>
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
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Step 2: Add us on WeChat</h5>
                </div>
                <div className="holderclass">
                  <img
                    src="../../wechat.png"
                    className="img-fluid"
                    alt="wechat"
                  />
                </div>
                <div className="holderclass">
                  <p className="card-text mb-1 text-left">
                    Scan our WeChat QR code to add us as a friend on WeChat and
                    let us know the amount that you wish to exchange.
                  </p>
                </div>
              </div>
            </div>
            <div className="holderclass">
              <h5 className="mb-1 font-weight-bold">
                Step 3: Make payment to us
              </h5>
            </div>
            <p className="mb-1 text-left">
              You can transfer us your payment via PayNow, PayLah.
            </p>
            <p className="mb-1 text-left">Number : +65 8338 8886</p>
            <p className="mb-1 text-left">
              Please indicate your WeChat ID and Phone Number in the Transaction
              Details.
            </p>
            <div className="holderclass">
              <h5 className="mb-1 font-weight-bold">
                Step 4: Confirm Transaction
              </h5>
            </div>
            <p className="mb-1 text-left">
              Once we have confirmed receipt of your payment, we will
              immediately do the transfer of funds to your WeChat account, and
              all you have to do is accept the transfer and the transaction is
              complete.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WeChatTopup;
