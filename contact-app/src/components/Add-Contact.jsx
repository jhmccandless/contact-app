import React from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";
import { Card } from "@material-ui/core/";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };
  }

  handleSubmit(event) {
    console.log(event);
    console.log(this.state);
    console.log(this.props);
    event.preventDefault();
    this.props.addContact({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    });
    this.setState({
      contact: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      },
    });
  }

  updateContact(event, attr) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ [attr]: event.target.value });
  }

  render() {
    return (
      <Card style={{ maxWidth: "500px", margin: "0 auto" }}>
        <CardContent>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Name</label>
            <input
              className="name"
              value={this.state.name}
              onChange={(e) => this.updateContact(e, "name")}
            ></input>
            <br />
            <label>Email</label>
            <input
              className="email"
              value={this.state.email}
              onChange={(e) => this.updateContact(e, "email")}
            ></input>
            <br />
            <label>Phone Number</label>
            <input
              className="phone"
              value={this.state.phone}
              onChange={(e) => this.updateContact(e, "phone")}
            ></input>
            <br />
            <label>Address</label>
            <input
              className="address"
              value={this.state.address}
              onChange={(e) => this.updateContact(e, "address")}
            ></input>
            <br />
            <label>City</label>
            <input
              className="city"
              value={this.state.city}
              onChange={(e) => this.updateContact(e, "city")}
            ></input>
            <br />
            <label>State</label>
            <input
              className="state"
              value={this.state.state}
              onChange={(e) => this.updateContact(e, "state")}
            ></input>
            <br />
            <label>Zip Code</label>
            <input
              className="zip"
              value={this.state.zip}
              onChange={(e) => this.updateContact(e, "zip")}
            ></input>
            <br />
            <button
              type="submit"
              value={this.state.contact}
              onChange={(e) => this.updateContact(e)}
            >
              Add Contact
            </button>
          </form>
        </CardContent>
      </Card>
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
