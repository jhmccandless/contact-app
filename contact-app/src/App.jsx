import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import AddContact from "./components/Add-Contact";
import Contacts from "./components/Contacts";
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
