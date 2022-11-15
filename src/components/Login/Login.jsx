import { InputStyled, Loginstyled } from "./LoginStyled";
import myWalletLogo from "../../images/MyWallet.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Loginstyled>
        <img src={myWalletLogo} />

        <InputStyled>
          <form>
            <input type="text" className="email" placeholder="E-mail" />
            <input type="text" className="password" placeholder="Senha" />
          </form>
        </InputStyled>
        <button>Entrar</button>
        <Link to="/cadastro">
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </Loginstyled>
    </>
  );
}
