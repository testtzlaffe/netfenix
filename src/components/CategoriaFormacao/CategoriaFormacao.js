import React from "react";
import IconeMobile from "../../assets/img/mobile.svg";
import IconeDataScience from "../../assets/img/data-science.svg";
import IconeDesignUX from "../../assets/img/design-ux.svg";
import IconeFrontEnd from "../../assets/img/front-end.svg";
import IconeInfraestrutura from "../../assets/img/infraestrutura.svg";
import IconeProgramacao from "../../assets/img/programacao.svg";
import IconeMarketingDigital from "../../assets/img/marketing-digital.svg";
import IconeInovacaoGestao from "../../assets/img/inovacao-gestao.svg";
import "./CategoriaFormacao.css";

export default function CategoriaFormacao({
  categoria,
  onClick,
  onCourseClick,
  formacoes,
}) {
  let Icone = null;
  const { categoryUrlName } = categoria;
  switch (categoryUrlName) {
    case "mobile":
      Icone = IconeMobile;
      break;
    case "data-science":
      Icone = IconeDataScience;
      break;
    case "design-ux":
      Icone = IconeDesignUX;
      break;
    case "front-end":
      Icone = IconeFrontEnd;
      break;
    case "infraestrutura":
      Icone = IconeInfraestrutura;
      break;
    case "programacao":
      Icone = IconeProgramacao;
      break;
    case "marketing-digital":
      Icone = IconeMarketingDigital;
      break;
    case "inovacao-gestao":
      Icone = IconeInovacaoGestao;
      break;
    default:
      Icone = IconeProgramacao;
  }

  const formacoesFiltradas = formacoes.filter((formacao) => {
    return formacao.categoryUrlName === categoryUrlName;
  });

  return (
    <div onClick={() => onClick(categoryUrlName)} className="CategoriaFormacao">
      <img src={Icone} className="icone" alt="ícone" />
      <span className="spanFormacoes">{categoria.categoryName}</span>
      <div className="formacaoContainer">
        {formacoesFiltradas.map((formacao) => {
          return (
            <div
              className="formacao"
              onClick={() => onCourseClick(formacao.code)}
            >
              {formacao.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
