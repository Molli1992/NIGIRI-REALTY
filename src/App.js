import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentes/header/header";
import Inicio from "./componentes/inicio/inicio";
import Footer from "./componentes/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
