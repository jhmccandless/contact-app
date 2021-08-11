const initialState = {
  contactList: [
    {
      name: "Harris",
      email: "harris@gmail.com",
      phone: 833333533,
      city: "Tulsa",
      state: "Texas",
      zip: 77777,
      inList: false,
    },
    {
      name: "Johnny",
      email: "jboy@gmail.com",
      phone: 888888888,
      city: "Venus",
      state: "Montana",
      zip: 77737,
      inList: false,
    },
  ],
};

function contacts_reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [...state.contactList, { name: action.data.contactList }],
      };
    case "DELETE_CONTACT":
      return {};
    default:
      return state;
  }
}

export default contacts_reducer;
