const initialState = {
  contactList: [
    { name: "Harris", inList: false },
    { name: "Johnny", inList: false },
  ],
};

function contacts_reducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  return state;
}

export default contacts_reducer;
