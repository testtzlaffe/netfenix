import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

export default function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de vídeos</h1>
      <Link to="/cadastro/categoria">Cadatrar categoria</Link>
    </PageDefault>
  );
}
