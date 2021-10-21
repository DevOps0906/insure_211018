import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiTest from "./commponents/ApiTest";
import DesignComponent from "./commponents/DesignComponent";
import ListComponent from "./commponents/ListComponent";
import Welcome from "./commponents/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome></Welcome>
        </Route>
        <Route path="/test" exact>
          <DesignComponent></DesignComponent>
        </Route>
        <Route path="/list" exact>
          <ListComponent></ListComponent>
        </Route>
        <Route path="/apitest" exact>
          <ApiTest></ApiTest>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
