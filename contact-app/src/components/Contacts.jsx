import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <h3>this is the contact list</h3>
        <ul>
          {this.props.contactList.map((contact, index) => {
            let pathName = `/delete_contact/${index}`;
            return (
              <li key={index}>
                {contact.name}{" "}
                <Link to={{ pathname: pathName }}>Delete Contact</Link>
              </li>
            );
          })}
        </ul>
        <button>Add Contact</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactList: state.contactList,
  };
}

function mapDispatchToProps(data) {
  return {};
}

const ConnectedContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

export default ConnectedContactList;
