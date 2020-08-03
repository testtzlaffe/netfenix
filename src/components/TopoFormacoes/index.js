import React from "react";
import MenuFormacoes from "./components/MenuFormacoes";
import TextoInicial from "./components/TextoInicial";
import "./TopoFormacoes.css";

export default function TopoFormacoes() {
  return (
    <div className="TopoFormacoes">
      <MenuFormacoes />

      <TextoInicial />
    </div>
  );
}
