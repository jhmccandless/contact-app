import React from "react";
import { connect } from "react-redux";

class Contacts extends React.Component {
  render() {
    console.log(this.props.contactList);
    return (
      <div>
        <h3>this is the contact list</h3>
        <ul>
          {this.props.contactList.map((contact, index) => {
            return <li key={index}> {contact.name} </li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactList: state.contactList,
  };
}

const ConnectedContactList = connect(mapStateToProps)(Contacts);
export default ConnectedContactList;
