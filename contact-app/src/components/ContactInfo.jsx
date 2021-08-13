import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateContactInstance } from "../actions";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateContact(event, attr, index) {
    this.props.updateContact(index, attr, event.target.value);
  }

  render() {
    return (
      <Card style={{ maxWidth: "500px", margin: "30px auto" }}>
        <CardContent>
          <h3>Contact:</h3>
          <ul>
            {Object.keys(this.props.contInfo).map((el, index) => {
              return (
                <li key={index}>
                  <h4>{el}</h4>
                  <input
                    value={this.props.contInfo[`${el}`]}
                    onChange={(e) => this.updateContact(e, el, index)}
                  />
                </li>
              );
            })}
          </ul>
          <Link
            to={{
              pathname: `/delete_confirm/${this.props.match.params.index}`,
            }}
          >
            Delete
          </Link>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.index;
  // if (state.new_state) {
  //   state = state.new_state;
  // }
  return {
    contInfo: state.contactList[id],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateContact(index, attr, value) {
      dispatch(updateContactInstance(index, attr, value));
    },
  };
}

const ConnectedSeeContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactInfo);

export default ConnectedSeeContact;
