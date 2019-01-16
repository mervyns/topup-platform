import React from "react";
import { Panel } from "react-bootstrap";

const HKDTransferPanel = () => (
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h4">Step 3: Make payment to us</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <p className="mb-1 text-left">
        You can transfer us your payment via HK Bank Account.
      </p>
      <p className="mb-1 text-left">Number : +852 6080 0796</p>
      <p className="mb-1 text-left">
        Please indicate your WeChat ID and Phone Number in the Transaction
        Details.
      </p>
    </Panel.Body>
  </Panel>
);

export default HKDTransferPanel;
