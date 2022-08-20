import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
