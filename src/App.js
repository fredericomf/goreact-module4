import React, { Fragment, Component } from "react";
import { GlobalStyle } from "./styles/global";
import Sidebar from "./components/Sidebar";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Sidebar />
  </Fragment>
);

export default App;
