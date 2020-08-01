import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://tetzflix.herokuapp.com/categorias";

    setTimeout(() => {
      fetch(URL).then(async (response) => {
        const data = await response.json();
        setCategorias([...data]);
      });
    }, 3 * 1000);
  }, []);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange({ target }) {
    setValue(target.getAttribute("name"), target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
        }}
      >
        <FormField
          label="Nome"
          type="text"
          name="nome"
          onChange={handleChange}
          value={values.nome}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          onChange={handleChange}
          value={values.descricao}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          onChange={handleChange}
          value={values.cor}
        />

        <button>Cadastrar</button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
