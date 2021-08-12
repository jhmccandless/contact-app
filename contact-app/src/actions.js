export function addContact(data) {
  return {
    type: "ADD_CONTACT",
    data,
  };
}

export function deleteContact(data) {
  return {
    type: "DELETE_CONTACT",
    data,
  };
}
