import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import CategoriaFormacao from "../../components/CategoriaFormacao/CategoriaFormacao";
import ModalFormacao from "../../components/Modal";
import MenuFormacoes from "../../components/TopoFormacoes/components/MenuFormacoes";
import PageDefault from "../../components/PageDefault";
import TopoFormacoes from "../../components/TopoFormacoes";
import "./Formacoes.css";
import ListaFormacoes from "../../components/ListaFormacoes";
import CardFormacao from "../../components/CardFormacao";

export default function Formacoes() {
  const URLFORMACOES = "https://www.alura.com.br/api/formacoes";
  const URLBASE = "https://www.alura.com.br/api/formacao-";
  const [categoriasFormacoes, setCategoriasFormacoes] = useState([
    {
      id: 1,
      categoryName: "Mobile",
      categoryUrlName: "mobile",
      color: "yellow",
    },
    { id: 2, categoryName: "Programação", categoryUrlName: "programacao" },
    { id: 3, categoryName: "Front-end", categoryUrlName: "front-end" },
    {
      id: 4,
      categoryName: "Infraestrutura",
      categoryUrlName: "infraestrutura",
    },
    { id: 5, categoryName: "Design & UX", categoryUrlName: "design-ux" },
    { id: 6, categoryName: "Data Science", categoryUrlName: "data-science" },
    {
      id: 7,
      categoryName: "Marketing Digital",
      categoryUrlName: "marketing-digital",
    },
    {
      id: 8,
      categoryName: "Inovação & Gestão",
      categoryUrlName: "inovacao-gestao",
    },
  ]);
  const [formacoes, setFormacoes] = useState([]);
  const [formacoesFiltradas, setFormacoesFiltradas] = useState([]);
  const [formacaoSelecionada, setFormacaoSelecionada] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    fetch(URLFORMACOES)
      .then((response) => response.json())
      .then((data) => {
        setFormacoes([...data]);
      });
  }, []);

  useEffect(() => {
    const filtro = formacoes.filter(
      (formacao) => formacao.categoryUrlName === "mobile"
    );
    setFormacoesFiltradas([...filtro]);
  }, [formacoes]);

  function handleCategoryClick(categoryUrlName) {
    const filtro = formacoes.filter(
      (formacao) => formacao.categoryUrlName === categoryUrlName
    );
    setFormacoesFiltradas([...filtro]);
  }

  function handleFormacaoClick(formacaoCode) {
    setFormacaoSelecionada({});
    handleShowModal();
    fetch(`${URLBASE}${formacaoCode}`)
      .then((response) => response.json())
      .then((data) => {
        setFormacaoSelecionada({ ...data });
      });
  }

  function handleCourseClick(formacaoCode) {
    setFormacaoSelecionada({});
    handleShowModal();
    fetch(`${URLBASE}${formacaoCode}`)
      .then((response) => response.json())
      .then((data) => {
        setFormacaoSelecionada({ ...data });
      });
  }

  function handleShowModal() {
    setModalIsOpen(true);
  }

  function handleHideModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="Formacoes">
      <TopoFormacoes />

      <ListaFormacoes>
        {categoriasFormacoes.map((categoria) => {
          return (
            <CardFormacao>
              <CategoriaFormacao
                className="CategoriaFormacao"
                key={categoria.id}
                categoria={categoria}
                onClick={handleCategoryClick}
                onCourseClick={handleCourseClick}
                formacoes={formacoes}
                cor={categoria.color}
              />
            </CardFormacao>
          );
        })}
      </ListaFormacoes>

      <ModalFormacao
        isOpen={modalIsOpen}
        formacao={formacaoSelecionada}
        handleHideModal={handleHideModal}
      />
    </div>
  );
}
