import React from "react";

import {Row,
  Col,
  Collapse,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel} from "react-bootstrap";

class AddNewClusterPanel extends React.Component {

  constructor(...args){
    super(...args);
    this.state = {};
  }
  toggle(){
    this.setState({ open: !this.state.open });
  }
  render(){
    return (
      <Collapse in={this.state.open}>
        <Panel header="Create new cluster">
          <Form horizontal>

            <Row>
              <Col md={6}>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Name of your cluster" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Name of your cluster" />
                  </Col>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Name of your cluster" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Panel>
      </Collapse>
    );
  }
}

export default AddNewClusterPanel;