import React, { Component, Fragment } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

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
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12" md="6" lg="6">
              <MDBCard
                className="card-body"
                style={{ width: "22rem", marginTop: "1rem" }}
              >
                <MDBCardTitle>Current Rates</MDBCardTitle>
                <MDBCardText>1SGD : 4.92RMB</MDBCardText>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="12" md="6" lg="6">
              <MDBCard
                className="card-body"
                style={{ width: "22rem", marginTop: "1rem" }}
              >
                <MDBCardTitle>How to Top Up my WeChat Pay?</MDBCardTitle>
                <MDBCardText>
                  <MDBListGroup>
                    <MDBListGroupItem>
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 font-weight-bold">
                          Step 1: Choose your currency
                        </h5>
                      </div>
                      <div className="d-flex w-100 justify-content-between">
                      <MDBRow>
                          <select
                            className="browser-default custom-select"
                            value={this.state.currency}
                            onChange={this.handleSelectChange}
                          >
                            <option value="cny">I want CNY</option>
                            <option value="sgd">I want SGD</option>
                          </select>
                          <MDBInput
                            label="Your desired amount"
                            onChange={this.handleNumberChange}
                          />
                      </MDBRow>
                      </div>
                      <p className="mb-1 text-left">
                        You would have to pay {this.state.amount}{" "}
                        {this.state.currency === "cny" ? "SGD" : "CNY"}
                      </p>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 font-weight-bold">
                          Step 2: Add us on WeChat
                        </h5>
                      </div>
                      <div className="d-flex w-100 justify-content-between">
                        <MDBRow>
                          <MDBCol size="12">
                            <img
                              src="../../wechat.png"
                              className="img-fluid"
                              alt="wechat"
                            />
                          </MDBCol>
                        </MDBRow>
                      </div>
                      <div className="d-flex w-100 justify-content-between">
                        <MDBRow>
                          <MDBCol size="12">
                            <p className="mb-1 text-left">
                              Scan our WeChat QR code to add us as a friend on
                              WeChat and let us know the amount that you wish to
                              exchange.
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 font-weight-bold">
                          Step 3: Make payment to us
                        </h5>
                      </div>
                      <p className="mb-1 text-left">
                        You can transfer us your payment via PayNow, PayLah.
                      </p>
                      <p className="mb-1 text-left">Number : +65 8338 8886</p>
                      <p className="mb-1 text-left">
                        Please indicate your WeChat ID and Phone Number in the
                        Transaction Details.
                      </p>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 font-weight-bold">
                          Step 4: Confirm Transaction
                        </h5>
                      </div>
                      <p className="mb-1 text-left">
                        Once we have confirmed receipt of your payment, we will
                        immediately do the transfer of funds to your WeChat
                        account, and all you have to do is accept the transfer
                        and the transaction is complete.
                      </p>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardText>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Fragment>
    );
  }
}

export default WeChatTopup;
