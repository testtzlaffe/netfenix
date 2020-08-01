import React from "react";
import LogoBronze from "../../assets/img/LogoBronze.png";
import LogoOuro from "../../assets/img/LogoOuro.png";
import LogoPrata from "../../assets/img/LogoPrata.png";

import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Menu({ cor }) {
  const Logo =
    cor === "ouro" ? LogoOuro : cor === "prata" ? LogoPrata : LogoBronze;

  return (
    <nav className={`Menu Menu--${cor}`}>
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      {/* <Button as={Link} cor={cor} to="/cadastro/video">
        Novo vídeo
      </Button> */}
    </nav>
  );
}
