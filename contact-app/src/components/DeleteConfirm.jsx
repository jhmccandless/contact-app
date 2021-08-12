import React from "react";
import { connect } from "react-redux";

class DeleteComfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.deleteContact(this.props.match.params.index);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>Delete contact?</h3>
        <ul>
          <li>{this.props.contInfo.name}</li>
        </ul>
        <button onClick={this.handleClick}>OK!</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.index;
  return {
    contInfo: state.contactList[id],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteContact: (id) => {
      dispatch({ type: "DELETE_CONTACT", id });
    },
  };
}

const connectedDeleteConfirm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteComfirm);

export default connectedDeleteConfirm;
