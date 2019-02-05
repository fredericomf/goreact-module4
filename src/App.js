import React, { Fragment, Component } from "react";

import { Provider } from "react-redux";

// NOTA_ESTUDO: O BrowserRouter dá acesso aos nossos componentes para informações que estão contidas na nossa URL, ex: parâmetros, query strings, etc...
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";

import { GlobalStyle } from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    {/*
     * NOTA_ESTUDO: Se o BrowserRouter fosse colocado no nosso arquivo de ROUTES, só o componente Routes teria acesso
     * aos dados da URL, e este não é o comportamento que queremos. Precisamos que os outros componentes também tenham
     * acesso à essas informações, então utilizamos o BrowserRouter aqui, envolvendo todos.
     */}
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
