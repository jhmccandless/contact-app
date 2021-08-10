import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import AddContact from "./components/Add-Contact";
import Contacts from "./components/Contacts";

// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/dashboard">Contact List</Link>
          <Link to="/add_contact">Add a Contact</Link>
        </nav>
        <Switch>
          <Route exact path="/dashboard" component={Contacts} />
          <Route path="/add_contact" component={AddContact} />
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
