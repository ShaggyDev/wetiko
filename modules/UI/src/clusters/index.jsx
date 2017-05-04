import React from "react";

import FontAwesome from "react-fontawesome";

import {Row,
  Col,
  Collapse,
  Button,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Table
} from "react-bootstrap";

import AddNewClusterPanel   from "./AddNewClusterPanel.jsx";
import ClusterDetailsPanel  from "./ClusterDetailsPanel.jsx";
import { connect }          from 'react-redux';

class ClusterRow extends React.Component {
  constructor(...args){
    super(...args);
    this.state = {};
  }
  getDefault(){
    //todo: remove style
    return (<tr >
      <td>{this.props.cluster.name}</td>
      <td>{this.props.cluster.createdAt}</td>
      <td>{this.props.cluster.primed}</td>
      <td>{this.props.cluster.nodeCount}</td>
      <td>{this.props.cluster.dbCount}</td>
      <td>

        <Button className="btn-raised"
                bsStyle="danger"
                bsSize="xs"
                onClick={()=>{this.toggleExtended()}}
                style={{margin: "0px", marginRight: "8px"}}
        >
          <FontAwesome name="trash" />
        </Button>
        <Button className=" btn-raised"
                bsStyle="info"
                bsSize="xs"
                onClick={()=>{this.toggleExtended()}}
                style={{margin: "0px"}}
        >
          <FontAwesome name="plus-square" />
        </Button>
      </td>
    </tr>);
  }
  getExtended(){
    //todo: remove style
    return (<tr >
      <td colSpan={5}>
        <ClusterDetailsPanel cluster={this.props.cluster} />
      </td>
      <td>
        <Button className="btn-raised"
                bsStyle="danger"
                bsSize="xs"
                onClick={()=>{this.toggleExtended()}}
                style={{margin: "0px", marginRight: "8px"}}
        >
          <FontAwesome name="trash" />
        </Button>
        <Button  className="btn-raised"
                   bsStyle="info"
                   bsSize="xs"
                   onClick={()=>{this.toggleExtended()}}
                   style={{margin: "0px"}}
        >
          <FontAwesome name="minus-square" />
        </Button>
      </td>
    </tr>);
  }
  toggleExtended(){
    this.setState({extended: !this.state.extended});
  }
  render(){
    if(this.state.extended){
      return this.getExtended();
    }
    return this.getDefault()
  }

}

class Clusters extends React.Component {
  render() {

    return (
      <Row>
        <Col md={12}>
          <span className="pull-right">
            <Button onClick={()=>{this.togglePanel()}} className="btn  btn-info btn-fab">
              <FontAwesome name='plus' />
            </Button>
          </span>
          <h2>Clusters</h2>
        </Col>
        <Col md={12}>
          <AddNewClusterPanel
            ref={(panel) => { this.togglePanel = ()=>{ panel.toggle()}; }} />
          <Table responsive condensed hover>
            <thead>
            <tr>
              <th>Name</th>
              <th>Created at</th>
              <th>Primed</th>
              <th>Node count</th>
              <th>DB count</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.props.clusters.clusters.map((cluster)=>{
              return (<ClusterRow key={cluster.name} cluster={cluster} />);
            })
            }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return  {
    clusters:         state.clusters
  }
}

export default connect(mapStateToProps)(Clusters);