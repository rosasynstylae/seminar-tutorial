import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import ParentContextExample from './ParentContextExample/ParentContextExample.jsx';
import ProviderWrapperExample from './ProviderWrapperExample/ProviderWrapperExample.jsx';
import HOCExample from './HOCExample/HOCExample.jsx';

const App = () => (
  <div className="wrapper">
    <Router>
      <Switch>
        <Route path="/hoc" component={HOCExample} />
        <Route path="/parent" component={ParentContextExample} />
        <Route path="/hooks" component={ProviderWrapperExample} />
      </Switch>
    </Router>
  </div>
);

export default App;
