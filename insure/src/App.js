import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiTest from "./commponents/ApiTest";
import EncryptPage from "./page/EncryptPage";
import Hospital from "./page/Hospital";
import HospitalDetail from "./page/HospitalDetail";
import InsurePage from "./page/InsurePage";
import NewsPage from "./page/NewsPage";
import PharmacyPage from "./page/PharmacyPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/apitest" exact>
          <ApiTest></ApiTest>
        </Route>
        <Route path="/news" exact>
          <NewsPage></NewsPage>
        </Route>
        <Route path="/pharmacy" exact>
          <PharmacyPage></PharmacyPage>
        </Route>
        <Route path="/hospital" exact>
          <Hospital></Hospital>
        </Route>
        <Route path="/hospitalDetail" exact>
          <HospitalDetail></HospitalDetail>
        </Route>
        <Route path="/encrpytTest" exact>
          <EncryptPage></EncryptPage>
        </Route>
        <Route path="/insure" exact>
          <InsurePage></InsurePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
