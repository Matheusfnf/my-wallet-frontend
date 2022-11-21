import { InputStyled, Loginstyled } from "./LoginStyled";
import myWalletLogo from "../../images/MyWallet.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const context = useContext(UserContext);
  const checkForm = () => {
    if (!validator.isEmail(email)) {
      toast.error("email invalido");
      return false;
    }
    if (senha.length < 3 || senha.length > 20) {
      toast.error("senha invalida");
      return false;
    }
    return true;
  };

  const handlePost = async () => {
    if (!checkForm()) return;
    context.signIn(email, senha);
  };

  return (
    <>
      <Loginstyled>
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

            <button type="submit">Entrar</button>
          </form>
        </InputStyled>
        <Link to="/cadastro">
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </Loginstyled>
    </>
  );
}
