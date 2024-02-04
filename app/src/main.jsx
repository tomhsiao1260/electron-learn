import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Work } from "./pages/Work";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Layout />
      <Switch>
        <Route exact path="/" component={() => <></>} />
        <Route path="/work" component={Work} />
        <Redirect from="/" to="/" />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);
