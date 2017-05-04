import React from "react";

import NavBar from "./navbar/index.jsx";
import {Grid, Row, Col} from "react-bootstrap";

class Page extends React.Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: "80px"}}>
        <NavBar />
        <Row>
          <Col md={3}>stuff</Col>
          <Col md={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Page;