import React from "react";

import NavBar from "./navbar/index.jsx";
import {Grid, Row, Col, Button } from "react-bootstrap";

class Page extends React.Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: "50px"}}>
        <NavBar />
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Page;