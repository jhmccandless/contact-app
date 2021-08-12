import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import ContactInfo from "./components/ContactInfo";
import AddContact from "./components/Add-Contact";
import Contacts from "./components/Contacts";
import DeleteConfirm from "./components/DeleteConfirm";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header>
            <h2>
              <Link to="/dashboard">Contact Info</Link>
            </h2>
            <Link to="/dashboard">Contact List</Link>
            <Link to="/add_contact">Add a Contact</Link>
          </header>
          <Switch>
            <Route exact path="/dashboard" component={Contacts} />
            <Route path="/add_contact" component={AddContact} />
            <Route path="/contact_info/:index" component={ContactInfo} />
            <Route path="/delete_confirm/:index" component={DeleteConfirm} />
            <Route path="*">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
