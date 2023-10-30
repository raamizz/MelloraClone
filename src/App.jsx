import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routes";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
