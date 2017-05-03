import React from "react";

import {Nav, NavItem, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
class NavBar extends React.Component {
  render() {
    return (<Navbar fixedTop>
        <Nav bsStyle="pills" activeKey={1} >
          <LinkContainer to="/clusters">
            <NavItem eventKey={1} >Clusters</NavItem>
          </LinkContainer>
          <LinkContainer to="/workers">
            <NavItem eventKey={2} >Workers</NavItem>
          </LinkContainer>
          <LinkContainer to="/benchmarks" >
            <NavItem eventKey={3} title="Item">Benchmarks</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>

    );
  }
}
export default NavBar;