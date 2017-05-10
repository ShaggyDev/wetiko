import React        from "react";
import { connect }  from 'react-redux';
import {login}        from "./user.actions";

import {
  Row,
  Col,
  Button,
  Alert,
  Modal,
  FieldGroup
}                   from "react-bootstrap";

class LoginModal extends React.Component{
  constructor(...args){
    super(...args);    this.state = {};
  }
  login(){
    this.props.login(this.usernameField.value, this.passwordField.value);
  }
  errorMessage(){
    if(this.props.user.errorMsg){
      return (<Alert bsStyle="warning">
        {this.props.user.errorMsg}
      </Alert>);
    }
    return;
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
            <input ref={(input)=>{ this.usernameField = input} } type="password" defaultValue="admin" disabled className="form-control" placeholder="Username" />
            <input ref={(input)=>{ this.passwordField = input} } type="password" className="form-control" placeholder="Password"/>
            <Button onClick={()=>{this.login()}} className="btn btn-success btn-raised"> Login</Button>
          </Col>
        </Row>
        {this.errorMessage()}
      </Modal.Body>

    </Modal>);
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password)=>{ dispatch( login(username, password) ) }
});
function mapStateToProps(state) {
  return  {
    user:      state.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);