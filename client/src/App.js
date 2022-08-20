import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ZeldaForm from "./components/ZeldaForm";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ZeldaForm />} path="/zelda/list/new" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
