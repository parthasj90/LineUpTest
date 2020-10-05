import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/users/:id" component={Profile} />
          <Route path="/">
            <div>
              Welcome
            </div>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
