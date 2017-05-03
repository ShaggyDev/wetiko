import React from "react";

import NavBar from "./navbar/index.jsx";
import {Grid, Row, Col} from "react-bootstrap";

class Page extends React.Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: "60px"}}>
        <NavBar />
        <Row>
          <Col md={2}>stuff</Col>
          <Col md={10}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Page;