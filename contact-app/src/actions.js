export function addContact(data) {
  return {
    type: "ADD_CONTACT",
    data,
  };
}

export function updateContactInstance(index, key, value) {
  return {
    type: "UPDATE_CONTACT",
    index,
    key,
    value,
  };
}

export function deleteContact(data) {
  return {
    type: "DELETE_CONTACT",
    data,
  };
}
