import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import myWalletLogo from "../../images/MyWallet.png";
import { Cadastrostyled, InputStyled } from "./CadastroStyled";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmasenha, setConfirmaSenha] = useState("");
  const context = useContext(UserContext);

  const checkForm = () => {
    if (nome.length < 3 || nome.length > 20) {
      toast.error("nome invalido");
      return false;
    }
    if (!validator.isEmail(email)) {
      toast.error("email inválido");
      return false;
    }
    if (senha.length < 3 || senha.length > 20) {
      toast.error("senha invalida");
      return false;
    }
    if(confirmasenha !== senha){
      toast.error("as senhas não coincidem");
      return false;
    }
    
    return true;
  };

  const handlePost = async () => {
    if (!checkForm()) return;
    context.cadastro(email, nome, senha);
    
  };

  return (
    <>
      <Cadastrostyled>
        <img src={myWalletLogo} />

        <InputStyled>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePost();
            }}
          >
            <input
              type="text"
              className="username"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              className="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type="password"
              className="confirm-password"
              placeholder="Confirme a senha"
              value={confirmasenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />

            <button type="submit"> Cadastrar</button>
          </form>
        </InputStyled>
        <Link to="/">
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </Cadastrostyled>
    </>
  );
}
