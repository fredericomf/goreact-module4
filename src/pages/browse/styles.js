import styled from "styled-components";

// NOTA_ESTUDO: É o componente que é chamado para navegar entre as rotas
import { Link } from "react-router-dom";

import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-decoration: none;
  width: 250px;

  img {
    height: 250px;
  }

  strong {
    color: #fff;
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    color: #b3b3b3;
    font-size: 13px;
    line-height: 22px;
    margin-top: 5px;
  }

  &:hover {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }
`;
