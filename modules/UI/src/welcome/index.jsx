import React from "react";

import {Row, Col} from "react-bootstrap";
class Welcome extends React.Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <h2>Welcome</h2>
        </Col>
      </Row>
    );
  }
}
export default Welcome;