import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './app';
import './App.css';

function MainApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}

export default MainApp;
