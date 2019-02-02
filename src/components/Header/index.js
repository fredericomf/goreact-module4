import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Buscar" />
    </Search>

    <User>
      <img
        src="https://avatars3.githubusercontent.com/u/29743771?s=460&v=4"
        alt="Avatar"
      />
      Frederico Mottinha de Figueiredo
    </User>
  </Container>
);

export default Header;
