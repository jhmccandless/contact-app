import React from "react";
import { connect } from "react-redux";

class DeleteCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.match.params.index);

    return (
      <div>
        <h3>Contact:</h3>
        <p>{this.props.match.params.index}</p>
        <h3>Are you sure you want to delete?</h3>
        <button>OK!</button>
      </div>
    );
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
