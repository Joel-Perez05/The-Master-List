import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <Header /> 
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
