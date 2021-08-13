import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core/";
import { CardContent } from "@material-ui/core";

class Contacts extends React.Component {
  render() {
    return (
      <Card style={{ maxWidth: "500px", margin: "30px auto" }}>
        <CardContent>
          <h3>Contact List:</h3>
          <ul>
            {this.props.contactList.map((contact, index) => {
              let pathName = `/contact_info/${index}`;
              return (
                <li key={index}>
                  {contact.name}
                  <ul>
                    <li>City: {contact.city}</li>
                    <li>State: {contact.state}</li>
                  </ul>
                  <Link to={{ pathname: pathName }}>Contact Info</Link>
                </li>
              );
            })}
          </ul>
          <Link to="/add_contact">Add a Contact</Link>
        </CardContent>
      </Card>
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
