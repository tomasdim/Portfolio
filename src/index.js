import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Presentation from "./components/Presentation";
import Works from "./components/Works";
import Fun from "./components/Fun";
import Inquiry from "./components/Inquiry";
import Home from "./pages/Home";
import Website from "./pages/Website";
import Calculator from "./pages/Calculator";
import Rick from "./pages/Rick";
import Gym from "./pages/Gym";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/Portfolio" component={Home} />
        <Route exact path="Portfolio/Website" component={Website} />
        <Route exact path="Portfolio/Rick" component={Rick} />
        <Route exact path="Portfolio/Calculator" component={Calculator} />
        <Route exact path="Portfolio/Gym" component={Gym} />
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
