import React        from "react";
import { connect }  from 'react-redux';
import NavBar       from "./navbar/index.jsx";
import Sidebar      from "./sidebar/Sidebar.jsx";
import {Grid,
  Row,
  Col
}

  from "react-bootstrap";


class Page extends React.Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: "80px"}}>
        <NavBar />
        <Row>
          <Sidebar clusters={this.props.clusters} cols={3} />
          <Col md={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Page;