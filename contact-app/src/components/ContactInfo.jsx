import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Contact:</h3>
        <ul>
          {Object.keys(this.props.contInfo).map((el, index) => {
            return (
              <li key={index}>
                {el}: {this.props.contInfo[`${el}`]}
              </li>
            );
          })}
        </ul>
        <Link
          to={{ pathname: `/delete_confirm/${this.props.match.params.index}` }}
        >
          Delete
        </Link>
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
  return {};
}

const ConnectedSeeContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactInfo);

export default ConnectedSeeContact;
