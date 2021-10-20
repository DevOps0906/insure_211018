import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DesignComponent from "./commponents/DesignComponent";
import ListComponent from "./commponents/ListComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <DesignComponent></DesignComponent>
        </Route>
        <Route path="/list" exact>
          <ListComponent></ListComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
