const initialState = {
  contactList: [
    {
      name: "Harris",
      email: "harris@gmail.com",
      phone: 833333533,
      address: "1234 Tulsa Lane",
      city: "Tulsa",
      state: "Texas",
      zip: 77777,
    },
    {
      name: "Johnny",
      email: "jboy@gmail.com",
      phone: 888888888,
      address: "3423 Horror Street",
      city: "Venus",
      state: "Montana",
      zip: 77737,
    },
  ],
};

function contacts_reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: action.data.name,
            email: action.data.email,
            phone: action.data.phone,
            address: action.data.address,
            city: action.data.city,
            state: action.data.state,
            zip: action.data.zip,
          },
        ],
      };
    // case "ADD_CONTACT":
    //   return {
    //     ...state,
    //     contactList: [...state.contactList, { name: action.data.contactList }],
    //   };
    case "DELETE_CONTACT":
      let arr = state.contactList;
      let newContactList = state.contactList.splice(Number(action.id), 1);
      return {
        ...state,
        contactList: arr,
      };
    default:
      return state;
  }
}

export default contacts_reducer;
