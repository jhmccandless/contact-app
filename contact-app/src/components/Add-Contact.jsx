import React from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";

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

  //   updateContact(event) {
  //     console.log(event);
  //     console.log(event.target);
  //     // console.log(event.target.value);
  //     this.setState({ name: event.target.value, email: event.target.value });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <form onSubmit={(e) => this.handleSubmit(e)}>
  //           <label>Name</label>
  //           <input
  //             className="name"
  //             value={this.state.name}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <label>Email</label>
  //           <input
  //             className="email"
  //             value={this.state.email}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <label>Phone Number</label>
  //           <input
  //             className="phone"
  //             value={this.state.phone}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <label>Address</label>
  //           <input
  //             className="address"
  //             value={this.state.address}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <label>City</label>
  //           <input
  //             className="city"
  //             value={this.state.city}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <label>State</label>
  //           <input
  //             className="state"
  //             value={this.state.state}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <label>Zip Code</label>
  //           <input
  //             className="zip"
  //             value={this.state.zip}
  //             onChange={(e) => this.updateContact(e)}
  //           ></input>
  //           <br />
  //           <button
  //             type="submit"
  //             value={this.state.contact}
  //             onChange={(e) => this.updateContact(e)}
  //           >
  //             Add Contact
  //           </button>
  //         </form>
  //       </div>
  //     );
  //   }
  // }

  updateContactName(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ name: event.target.value });
  }
  updateContactEmail(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ email: event.target.value });
  }
  updateContactPhone(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ phone: event.target.value });
  }
  updateContactAddress(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ address: event.target.value });
  }
  updateContactCity(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ city: event.target.value });
  }
  updateContactState(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ state: event.target.value });
  }
  updateContactZip(event) {
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
    this.setState({ zip: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name</label>
          <input
            className="name"
            value={this.state.name}
            onChange={(e) => this.updateContactName(e)}
          ></input>
          <br />
          <label>Email</label>
          <input
            className="email"
            value={this.state.email}
            onChange={(e) => this.updateContactEmail(e)}
          ></input>
          <br />
          <label>Phone Number</label>
          <input
            className="phone"
            value={this.state.phone}
            onChange={(e) => this.updateContactPhone(e)}
          ></input>
          <br />
          <label>Address</label>
          <input
            className="address"
            value={this.state.address}
            onChange={(e) => this.updateContactAddress(e)}
          ></input>
          <br />
          <label>City</label>
          <input
            className="city"
            value={this.state.city}
            onChange={(e) => this.updateContactCity(e)}
          ></input>
          <br />
          <label>State</label>
          <input
            className="state"
            value={this.state.state}
            onChange={(e) => this.updateContactState(e)}
          ></input>
          <br />
          <label>Zip Code</label>
          <input
            className="zip"
            value={this.state.zip}
            onChange={(e) => this.updateContactZip(e)}
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
