import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ZeldaForm from "./components/ZeldaForm";
import ZeldaHome from "./components/ZeldaHome";
import ZeldaList from "./components/ZeldaList";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ZeldaHome />} path="/" />
        <Route element={<ZeldaForm />} path="/zelda/list/new" />
        <Route element={<ZeldaList />} path="/zelda/lists" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
