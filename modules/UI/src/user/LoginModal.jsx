import React        from "react";
import { connect }  from 'react-redux';

import {
  Row,
  Col,
  DropdownButton,
  ButtonGroup,
  Button,
  MenuItem,
  Modal,
  FieldGroup
}                   from "react-bootstrap";

class LoginModal extends React.Component{
  constructor(...args){
    super(...args);
    this.state = {};
  }


  render(){
    return (
    <Modal backdrop="static" show={!this.props.user.authenticated} onHide={this.close}>
      <Modal.Body>
        <Row>
          <Col xs={5} >
            <img className="img img-responsive" src="/assets/images/wetikoMaskot.png" />
          </Col>
          <Col xs={7} >
            <h3>Wetiko Login</h3>
            <input type="password" className="form-control" placeholder="Username" />
            <input type="password" className="form-control" placeholder="Password"/>
            <Button className="btn btn-success btn-raised"> Login</Button>
          </Col>
        </Row>
      </Modal.Body>

    </Modal>);
  }
}

function mapStateToProps(state) {
  return  {
    user:      state.user
  }
}
export default connect(mapStateToProps)(LoginModal);