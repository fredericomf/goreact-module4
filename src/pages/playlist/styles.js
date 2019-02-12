import styled, { css } from "styled-components";

import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 48px;
  }

  ${props =>
    props.loading &&
    css`
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
    `};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 220px;
    width: 220px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      font-weight: 300;
      letter-spacing: 1.11px;
    }

    h1 {
      font-size: 48px;
      margin-top: 10px;
    }

    p {
      color: #b3b3b3;
      font-size: 11px;
      letter-spacing: 1.11px;
      margin-top: 0;
      text-transform: uppercase;
    }

    button {
      background: #1db854;
      border: 0;
      border-radius: 16px;
      color: #fff;
      font-size: 12px;
      height: 32px;
      letter-spacing: 1.11px;
      line-height: 32px;
      margin-top: 10px;
      padding: 0 35px;
    }
  }
`;

export const SongList = styled.table`
  margin-top: 20px;
  text-align: left;
  width: 100%;

  thead th {
    color: #b3b3b3;
    font-size: 11px;
    font-weight: normal;
    letter-spacing: 1.11px;
    padding: 5px 10px;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }
`;

export const SongItem = styled.tr`
  td {
    background: ${props => (props.selected ? "#282828" : "transparent")};
    border-top: 1px solid #282828;
    color: ${props => (props.playing ? "#1ED760" : "#FFF")};
    font-size: 13px;
    line-height: 40px;
    padding: 0 10px;

    &:first-child {
      text-align: right;
      width: 80px;
    }

    &:last-child {
      text-align: right;
    }
  }

  &:hover td {
    background: #282828;
  }
`;
