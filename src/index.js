import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Presentation from "./components/Presentation";
import Works from "./components/Works";
import Fun from "./components/Fun";
import Inquiry from "./components/Inquiry";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/Portfolio" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
        <Presentation />
        <Works />
        <Fun />
        <Inquiry />
        <App />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
