import './App.css'
import Buttons from './Buttons';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/">
              <Buttons />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;