import React from "react";
import { connect } from "react-redux";

class DeleteCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.deleteContact(this.props.match.params.index);
    this.props.history.push("/");
  };

  render() {
    let keys = Object.keys(this.props.contRemove);
    console.log(
      keys.map((el) => {
        console.log(this.props.contRemove[`${el}`]);
      })
    );
    return (
      <div>
        <h3>Contact:</h3>
        {Object.keys(this.props.contRemove).map((el) => {
          return (
            <ul>
              <li>
                {el}: {this.props.contRemove[`${el}`]}
              </li>
            </ul>
          );
        })}
        <h3>Are you sure you want to delete?</h3>
        <button onClick={this.handleClick}>OK!</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.index;
  return {
    contRemove: state.contactList[id],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteContact: (id) => {
      dispatch({ type: "DELETE_CONTACT", id });
    },
  };
}

const ConnectedDeleteContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCont);

export default ConnectedDeleteContact;
