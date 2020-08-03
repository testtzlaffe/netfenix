import React from "react";
import "./TextoInicial.css";

export default function TextoInicial() {
  return (
    <div>
      <div className="texto-icone">FORMAÇÕES</div>
      <div className="titulo">Formações e cursos de tecnologia</div>
      <div className="subtitulo">
        Formações com conteúdo do mercado de trabalho: sequências de cursos e
        conteúdo para você se capacitar em tecnologia e negócios digitais.
      </div>
      <a href="https://alura.com.br/planos-cursos-online">
        <button className="botao">MATRICULE-SE E COMECE AGORA</button>
      </a>
    </div>
  );
}
