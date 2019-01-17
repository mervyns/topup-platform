import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PayOnBehalf extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Row>
            <PageHeader>Pay On Behalf (代付) Service</PageHeader>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4">
                    Paying TaoBao / MeiTuan / Online Shopping
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <p>
                    If you are purchasing something on TaoBao or MeiTuan or any
                    other e-commerce sites and require payment services, we can
                    do that for you too.
                  </p>
                  <p>
                    <Panel.Title componentClass="h4">
                      Method 1 - Add to your own shopping cart
                    </Panel.Title>
                  </p>
                  <p>
                    Add the items to your shopping cart, and once done, let us
                    know your login details and we will log into your platform
                    and process the payment for you.
                  </p>
                  <p>
                    <a href="https://wa.me/6583388886/?text=urlencodedtext">
                      <i className="fas fa-apple" />
                      <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                      WhatsApp Us +65-83388886
                    </a>
                  </p>
                  <p>
                    Please note that for this method, we require you to transfer
                    us the equivalent payment in your preferred currency first
                    before we make the payment for you.
                  </p>
                  <Panel.Title componentClass="h4">
                    <p>Method 2 - We Purchase for you</p>
                  </Panel.Title>
                  <p>
                    Send us the links for your item and your desired shipping
                    address. We will then purchase the items for you with our
                    shopping cart and ship it to your desired address.
                  </p>
                  <p>
                    <a href="https://wa.me/6583388886/?text=urlencodedtext">
                      <i className="fas fa-apple" />
                      <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                      WhatsApp Us +65-83388886
                    </a>
                  </p>
                  <p>
                    For this method of payment, we can accept 50% of the order
                    value first, and the remaining 50% upon order confirmation
                    from the supplier.
                  </p>
                </Panel.Body>
              </Panel>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4">
                    Pay your Suppliers
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <p>
                    If you are a merchant that purchases items from wholesalers
                    or WeChat merchants in China, we can also help you to pay
                    your suppliers via WeChat Pay (preferred method) or AliPay.
                  </p>
                  <p>
                    All you have to do is to message us and let us know your
                    Suppliers' WeChat ID, or you can get your Supplier to add
                    our WeChat ID as well.
                  </p>
                  <p>
                    Let us know the amount that you wish to send to your
                    supplier. We will then give you a verification code to
                    provide your supplier and all your supplier has to do is to
                    send that verification code to us.
                  </p>
                  <p>
                    Upon confirmation of receipt of your payment, we will then
                    immediately transfer the funds via WeChat Pay to your
                    supplier. We will then send you a screenshot of the transfer
                    once accepted by your supplier to confirm the transaction.
                  </p>
                  <Panel.Title componentClass="h4">
                    Scan the QR Code below to add us on WeChat
                  </Panel.Title>
                  <img
                    src="../../wechat.png"
                    className="card-image-top"
                    style={{ width: "32rem" }}
                    alt="wechat"
                  />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

export default PayOnBehalf;
