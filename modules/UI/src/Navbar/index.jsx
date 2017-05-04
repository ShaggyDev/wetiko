import React                    from "react";

import {Nav, NavItem, Navbar, NavDropdown, MenuItem}   from "react-bootstrap";
import {LinkContainer}          from "react-router-bootstrap";
import {Link}                   from "react-router-dom";
class NavBar extends React.Component {
  render() {

    return (
      // should not have to define styles manually
      //todo: fix and make it proper
      <Navbar fixedTop style={{paddingTop: "4px"}} className="navbar-warning">
        <Navbar.Header>
          <Navbar.Brand>
              <Link to="/" >wetico rethinkdb</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
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
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;