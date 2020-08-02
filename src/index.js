import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Formacoes from "./pages/Formacoes";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/formacoes" component={Formacoes} />
      <Route path="/" component={Home} exact />
      <Route component={() => <h1>404</h1>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
