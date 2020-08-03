import React from "react";
import LogoBronze from "../../assets/img/LogoBronze.png";
import LogoOuro from "../../assets/img/LogoOuro.png";
import LogoPrata from "../../assets/img/LogoPrata.png";

import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Menu({ cor }) {
  const paginaFormacoes = window.location.href.includes("formacoes");

  const Logo =
    cor === "ouro" ? LogoOuro : cor === "prata" ? LogoPrata : LogoBronze;

  return (
    <nav className={`Menu Menu--${cor}`}>
      {paginaFormacoes && (
        <>
          <a href="https://www.alura.com.br/">
            <img
              target="_blank"
              src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
              alt="Logo Alura"
            />
          </a>

          <Link to="/">
            <img className="Logo" src={Logo} alt="Logo" />
            aaa
          </Link>
        </>
      )}

      {!paginaFormacoes && (
        <>
          <Link to="/">
            <img className="Logo" src={Logo} alt="Logo" />
          </Link>
          <Button as={Link} cor={cor} to="/formacoes">
            Formações Alura
          </Button>
        </>
      )}

      {/* <Button as={Link} cor={cor} to="/cadastro/video">
        Novo vídeo
      </Button> */}
    </nav>
  );
}
