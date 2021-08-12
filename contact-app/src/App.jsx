import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";
import { AppBar, Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core/";

import ContactInfo from "./components/ContactInfo";
import AddContact from "./components/Add-Contact";
import Contacts from "./components/Contacts";
import DeleteConfirm from "./components/DeleteConfirm";
import store from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <div className="App">
              <AppBar position="relative">
                <Toolbar>
                  <Box
                    display="flex"
                    alignItems="center"
                    width={"100%"}
                    margin="0 300px"
                  >
                    <Box flexGrow={1} width="200px">
                      <h2>
                        <Link
                          style={{ textDecoration: "none", color: "yellow" }}
                          to="/dashboard"
                        >
                          ContactApp
                        </Link>
                      </h2>
                    </Box>
                    <Box margin="0 20px">
                      <Link
                        style={{ textDecoration: "none", color: "yellow" }}
                        to="/dashboard"
                      >
                        Contact List
                      </Link>
                    </Box>
                    <Box>
                      <Link
                        style={{ textDecoration: "none", color: "yellow" }}
                        to="/add_contact"
                      >
                        Add a Contact
                      </Link>
                    </Box>
                  </Box>
                </Toolbar>
              </AppBar>
              <Switch>
                <Route exact path="/dashboard" component={Contacts} />
                <Route path="/add_contact" component={AddContact} />
                <Route path="/contact_info/:index" component={ContactInfo} />
                <Route
                  path="/delete_confirm/:index"
                  component={DeleteConfirm}
                />
                <Route path="*">
                  <Redirect to="/dashboard" />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
