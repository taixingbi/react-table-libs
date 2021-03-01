import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Materialtable from './Materialtable';
import Rctable from './Rctable';
import MUIDataTable from './MUIDataTable';

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/materialtable" children={<Materialtable />} />
          <Route path="/rctable" children={<Rctable />} />
          <Route path="/muidatatable" children={<MUIDataTable />} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
