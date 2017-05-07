import React        from "react";
import { connect }  from 'react-redux';

import axios from "axios";

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
  login(){
    axios.get("/api/client/v1/login")
      .then((response)=>{
        console.log(response)
        console.log(response.data)
      }).catch((err)=>{
        console.log(err);
      });
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
            <input ref={(input)=>{ this.userNameField = input} } type="password" className="form-control" placeholder="Username" />
            <input ref={(input)=>{ this.passwordField = input} }type="password" className="form-control" placeholder="Password"/>
            <Button onClick={this.login} className="btn btn-success btn-raised"> Login</Button>
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