import React        from "react";
import { connect }  from 'react-redux';

import {
  Row,
  Col,
  DropdownButton,
  ButtonGroup,
  Button,
  MenuItem
}

  from "react-bootstrap";

class ChartComponent extends React.Component {
  render() {
    return (<br />);
  }

}
class ClusterSelect extends React.Component {
  getSelectedClusterName(){
    if(this.props.clusters.selected){
      return this.props.clusters.selectedCluster.name;
    }
    return "Select cluster";
  }
  render() {
    return (
      <ButtonGroup vertical block>
        <DropdownButton bsStyle="info" className="form-control" title={this.getSelectedClusterName()} noCaret id="dropdown-no-caret">
          <MenuItem key="none" eventKey="1">
          none
          </MenuItem>
          {this.props.clusters.clusters.map( (cluster)=>{
            return (
              <MenuItem key={cluster.name} eventKey="1">
                {cluster.name}
              </MenuItem>);
          } )}
        </DropdownButton>
      </ButtonGroup>
    );
  }

}
class Sidebar extends React.Component {
  render() {
    return (
      <Col md={this.props.cols}>
        <ClusterSelect clusters={this.props.clusters} />
      </Col>);
  }
}

function mapStateToProps(state) {
  return  {
    clusters:         state.clusters
  }
}
export default connect(mapStateToProps)(Sidebar);