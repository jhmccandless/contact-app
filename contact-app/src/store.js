import { createStore } from "redux";
import contacts_reducer from "./reducers";

const store = createStore(contacts_reducer);

export default store;
