import React from "react";
import { connect } from "react-redux";

class DeleteCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props.match.params);
  }
  render() {
    return <div>deleting div</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(data) {
  return {};
}

const ConnectedDeleteContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCont);

export default ConnectedDeleteContact;
