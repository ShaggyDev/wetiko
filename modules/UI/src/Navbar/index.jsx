import React                    from "react";

import {Nav, NavItem, Navbar, NavDropdown, MenuItem}   from "react-bootstrap";
import {LinkContainer}          from "react-router-bootstrap";
import {Link}                   from "react-router-dom";
import MaskotImg from '../assets/images/wetikoMaskot.png';
class NavBar extends React.Component {
  render() {

    return (
      // should not have to define styles manually
      //todo: fix and make it proper
      <Navbar fixedTop style={{paddingTop: "4px"}} className="navbar-warning">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" >
            {/* fix this, we be using no styles, we be using them classes*/}
              <img style={{height: "120%", width: "auto", display: "inline", marginTop: "-10px"}} src={MaskotImg} />
              wetico rethinkdb
            </Link>

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