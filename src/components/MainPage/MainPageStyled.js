import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;

  p {
    font-size: 26px;
    color: white;
    font-weight: 700;
  }
`;

export const MainBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .Mainboard {
    background-color: white;
    width: 326px;
    height: 420px;
    border-radius: 5px;
    overflow-y: scroll;
  }

  .Mainboard h2 {
    display: flex;
  }
`;

export const EntradaESaidaContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    width: 21px;
    height: 21px;
    margin: 10px;
    color: white;
  }

  .NovaEntrada {
    width: 155px;
    height: 114px;
    background-color: #a328d6;
    margin: 10px;
    color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .NovaSaida {
    width: 150px;
    height: 114px;
    background-color: #a328d6;
    margin: 10px;
    display: flex;
    align-items: flex-end;
    color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .NovaSaida p {
    margin: 10px;
    font-weight: 700;
  }

  .NovaEntrada p {
    margin: 10px;
    text-align: left;
    font-weight: 700;
  }
`;

export const BoardContent = styled.ul`
  li {
    display: grid;
    grid-template-columns: 20% 55% 25%;
    background-color: white;
  }

  .time {
    margin: 5px;
    color: #c6c6c6;
  }
  .activity {
    margin: 5px;
    color: #000000;
  }
  .price {
    margin: 5px;
    margin-left: 40%;
  }
`;

export const Saldo = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-left: 6.5%;
  border-radius: 5px;
  border: 1px solid black;

  h3 {
    margin-right: 3%;
  }

  p {
    margin-left: 3%;
    margin-top: 2%;
    margin-bottom: 1%;
    font-weight: 700;
  }
`;
