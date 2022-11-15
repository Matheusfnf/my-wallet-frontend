import { Link } from "react-router-dom";
import myWalletLogo from "../../images/MyWallet.png";
import { Cadastrostyled, InputStyled } from "./CadastroStyled";

export default function Cadastro() {
  return (
    <>
      <Cadastrostyled>
        <img src={myWalletLogo} />

        <InputStyled>
          <form>
            <input type="text" className="username" placeholder="Nome" />
            <input type="text" className="email" placeholder="E-mail" />
            <input type="text" className="password" placeholder="Senha" />
            <input
              type="text"
              className="confirm-password"
              placeholder="Confirme a senha"
            />
          </form>
        </InputStyled>
        <button> Cadastrar</button>
        <Link to="/">
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </Cadastrostyled>
    </>
  );
}
