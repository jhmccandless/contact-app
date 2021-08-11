import React from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: "",
    };
  }

  handleSubmit(event) {
    console.log(event);
    console.log(this.props);
    event.preventDefault();
    this.props.addContact({ contactList: this.state.contact });
    this.setState({ contact: "" });
  }

  updateContact(event) {
    this.setState({ contact: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name</label>
          <input
            className="name"
            value={this.state.contact}
            onChange={(e) => this.updateContact(e)}
          ></input>
          <br />
          {/* <input className="email"></input>
          <br />
          <input className="phone"></input>
          <br />
          <input className="address"></input>
          <br />
          <input className="city"></input>
          <br />
          <input className="state"></input>
          <br /> */}
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: function (data) {
      dispatch(addContact(data));
    },
  };
}

const connectedAddingContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);

export default connectedAddingContact;
