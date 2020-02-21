import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper />

      </div>
    </Router>
  )
}


export default App;
