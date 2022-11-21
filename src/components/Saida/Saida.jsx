import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { SaidaStyled } from "./SaidaStyled";

export default function Saida() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const context = useContext(UserContext);

  const checkForm = () => {
    if (valor.length <= 0 || ![0,9]) {
      alert("valor deve ser um número positivo");
      return false;
    }
    if (descricao.length < 3 || descricao.length > 25) {
      alert("descricao inválida");
      return false;
    }
    return true;
  };

  const handlePost = async () => {
    if (!checkForm()) return;
    context.saida(valor, descricao);
  };

  return (
    <SaidaStyled>
      <h1>Nova Saída</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePost();
        }}
      >
        <input
          type="text"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></input>
        <button type="submit">Salvar Saída</button>
      </form>
      <Link to="/mainpage">
        <p>Voltar</p>
      </Link>
    </SaidaStyled>
  );
}
