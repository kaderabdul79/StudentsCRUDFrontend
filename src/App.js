import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import AddStudent from './pages/AddStudent';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />

          <Switch>

            <Route path="/add-students" component={AddStudent} />

          </Switch>
        </Router>
    </div>
  );
}

export default App;
