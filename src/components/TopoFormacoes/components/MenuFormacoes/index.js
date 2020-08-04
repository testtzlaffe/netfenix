import React from "react";
import "./MenuFormacoes.css";
import { Link } from "react-router-dom";

export default function MenuFormacoes() {
  return (
    <div className="MenuFormacoes">
      <div>
        <a href="https://www.alura.com.br/">
          <img
            src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
            alt="Logo Alura"
          />
        </a>
      </div>
      <div>
        <Link className="voltar" to="/">
          Voltar para NETFENIX
        </Link>
      </div>
    </div>
  );
}
