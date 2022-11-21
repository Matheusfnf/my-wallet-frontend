import { createContext } from "react";

import api from "../service/api";
import { setCookie } from "nookies";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  async function signIn(email, password) {
    try {
      const response = await api.post("/sign-in", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        window.location.href = "/mainpage";
        setCookie(undefined, "userauth.token", response.data.token, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
        setCookie(undefined, "userauth.nome", response.data.user, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
      }
    } catch (e) {
      console.log(e);
      alert("Conta inválida, por favor faça seu cadastro!");
    }
  }

  async function cadastro(email, nome, senha) {
    try {
      const response = await api.post("/sign-up", {
        email: email,
        name: nome,
        password: senha,
      });

      if (response.status == 201) alert("Conta criada com sucesso!");
      window.location.href = "/";
    } catch (e) {
      console.log(e);
      alert(e);
      return false;
    }
  }

  async function saida(valor, descricao) {
    try {
      const response = await api.post("/entradas", {
        value: valor,
        description: descricao,
        type: "saida",
      });

      if (response.status == 201) alert("Valor inserido com sucesso!");
      window.location.href = "/mainpage";
    } catch (e) {
      console.log(e);
      alert(e);
      return false;
    }
  }

  async function entrada(valor, descricao) {
    try {
      const response = await api.post("/entradas", {
        value: valor,
        description: descricao,
        type: "entrada",
      });

      if (response.status == 201) alert("Valor inserido com sucesso!");
      window.location.href = "/mainpage";
    } catch (e) {
      console.log(e);
      alert(e);
      return false;
    }
  }

  return (
    <UserContext.Provider value={{ cadastro, signIn, entrada, saida }}>
      {children}
    </UserContext.Provider>
  );
}
