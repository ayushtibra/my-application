import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./navbar";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy color="inherit" variant="button">
              My header
            </TypoGraphy>
            <TypoGraphy color="inherit" variant="button">
              <NavBar />
            </TypoGraphy>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
