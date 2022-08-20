import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ZeldaForm from "./components/ZeldaForm";
import ZeldaHome from "./components/ZeldaHome";
import ZeldaList from "./components/ZeldaList";
import Update from "./components/Update";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ZeldaHome />} path="/" />
        <Route element={<ZeldaForm />} path="/zelda/list/new" />
        <Route element={<ZeldaList />} path="/zelda/lists" />
        <Route element={<Update />} path="zelda/list/edit/:id" />
        <Route element={<Detail />} path="game/details/:id" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
