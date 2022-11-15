import "./App.css";
import "./reset.css"
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./components/Cadastro/Cadastro";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
