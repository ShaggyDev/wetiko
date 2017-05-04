import React from "react";

import {Row,
  Col,
  Collapse,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Accordion

} from "react-bootstrap";

class ClusterDetailsDBPanel extends React.Component {

  constructor(...args){
    super(...args);
    this.state = {};
  }
  toggle(){
    this.setState({ open: !this.state.open });
  }
  render(){
    return (
      <Panel header={this.props.db.name} eventKey={this.props.eventKey}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>);


    }
  }
  class ClusterDetailsPanel extends React.Component {
  constructor(...args){
    super(...args);
    this.state = {};
  }
  toggle(){
    this.setState({ open: !this.state.open });
  }
  render(){
    let eventKey = 0;
    return (

      <Panel header={"Cluster: " + this.props.cluster.name}>
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
        <Row>
          <Col md={12}>
            <Accordion>
              {
                this.props.cluster.clusterInfo.databases
                  .map((db)=>{
                    eventKey += 1;
                    console.log(eventKey);
                    return (<Panel header={db.name} eventKey={eventKey}>
                      Anim pariatur cliche r
                    </Panel>);

                    return (<ClusterDetailsDBPanel eventKey={eventKey.toString()} key={db.id} db={db} />)
                  })
              }
            </Accordion>
          </Col>
        </Row>
      </Panel>

    );
  }
}

export default ClusterDetailsPanel;