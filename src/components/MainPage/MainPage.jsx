import React, { useEffect, useState } from "react";
import {
  BoardContent,
  EntradaESaidaContainer,
  MainBoard,
  NavBar,
  Saldo,
} from "./MainPageStyled";
import exitIcon from "../../images/ExitIcon.png";
import { Link } from "react-router-dom";
import mais from "../../images/mais.png";
import menos from "../../images/menos.png";
import api from "../../service/api";
import { parseCookies } from "nookies";

export default function MainPage() {
  const { "userauth.nome": nome } = parseCookies();
  const [entradas, setEntradas] = useState([]);
  const [values, setValues] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/entradas");
        setEntradas(response.data);
        let arr = [];
        response.data.forEach((caixa) => {
          console.log(caixa.value);
          arr.push(Number(caixa.value));
        });
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        setValues(sum);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <NavBar>
        <p>Olá, {nome} </p>
        <Link to="/">
          <img src={exitIcon} />
        </Link>
      </NavBar>
      <MainBoard>
        <div className="Mainboard">
          <BoardContent>
            {entradas?.map((caixa, index) => {
              const str = String(caixa.value);
              return (
                <li key={index}>
                  <div className="time">{caixa.time}</div>
                  <div className="activity">{caixa.description}</div>
                  <div
                    style={
                      caixa.type == "entrada"
                        ? { color: "green" }
                        : { color: "red" }
                    }
                    className="price"
                  >
                    {str.split("-").join("")}
                  </div>
                </li>
              );
            })}
          </BoardContent>
        </div>
      </MainBoard>
      <Saldo>
        <p>Saldo</p>
        <h3>{values}</h3>
      </Saldo>

      <EntradaESaidaContainer>
        <Link to="/entrada">
          <div className="NovaEntrada">
            <img src={mais}></img>
            <p>
              Nova <br></br> entrada
            </p>
          </div>
        </Link>
        <Link to="/saida">
          <div className="NovaSaida">
            <img src={menos}></img>
            <p>
              Nova <br></br> saída
            </p>
          </div>
        </Link>
      </EntradaESaidaContainer>
    </>
  );
}
