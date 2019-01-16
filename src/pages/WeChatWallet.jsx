import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";

class WeChatWallet extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Row>
            <PageHeader>
              Setting up your WeChat Wallet For The First Time
            </PageHeader>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4">
                    Changing The Language
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <p>
                    WeChat Pay Wallet is not normally enabled on the
                    international version of WeChat. However, you can
                    temporarily switch your WeChat Language to Simplified
                    Chinese to enable the wallet function.
                  </p>
                  <p>
                    <Panel.Title componentClass="h4">
                      Step 1: On the "Me" tab of your WeChat App, tap on
                      "Settings" → "General"
                    </Panel.Title>
                  </p>
                  <img
                    src="../../wallet1.png"
                    style={{ margin: "10px" }}
                    alt="wechat options"
                    className="img-responsive"
                  />
                  <Panel.Title componentClass="h4">
                    <p>Step 2: Tap on "Language" → "简体中文" → "Save"</p>
                    <p>
                      You should now be able to see the "Wallet" feature in your
                      "我" ("Me") tab. It will be a permanent addition.
                    </p>
                  </Panel.Title>
                  <img
                    src="../../wallet2.png"
                    style={{ margin: "10px" }}
                    className="img-responsive"
                    alt="wechat language options"
                  />
                </Panel.Body>
              </Panel>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h4">
                    Get someone to send you a Red Packet
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <p>
                    The easiest way to set up your WeChat Wallet is to get a
                    friend to send a WeChat Red Packet to you with a small
                    balance.
                  </p>
                  <p>
                    We are able to send you a introductory Red Packet if you
                    need.{" "}
                  </p>
                  <p>
                    Just like{" "}
                    <a href="https://www.facebook.com/topupla">
                      TopUpLah! on Facebook
                    </a>{" "}
                    and add us on WeChat.{" "}
                  </p>
                  <p>
                    Let us know your Facebook name and we will send you an
                    introductory Red Packet to help get your WeChat Wallet
                    Started
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

export default WeChatWallet;
