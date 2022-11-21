import React from "react";
import "./App.css";
import "./reset.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./components/Cadastro/Cadastro";
import MainPage from "./components/MainPage/MainPage";
import Entrada from "./components/Entrada/Entrada";
import Saida from "./components/Saida/Saida";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/entrada" element={<Entrada />} />
            <Route path="/saida" element={<Saida />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
