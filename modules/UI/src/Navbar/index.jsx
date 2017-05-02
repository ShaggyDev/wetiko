import React from "react";

import {Nav, NavItem, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
class NavBar extends React.Component {
  render() {
    return (<Navbar fixedTop>
        <Nav bsStyle="pills" activeKey={1} >
          <LinkContainer to="/workers">
            <NavItem eventKey={1} >NavItem 1 content</NavItem>
          </LinkContainer>
          <LinkContainer to="/" >
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          </LinkContainer>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
      </Navbar>

    );
  }
}
export default NavBar;