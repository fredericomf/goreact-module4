import styled from "styled-components";

import SearchIcon from "../../assets/images/search.svg";

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 0;
`;

export const Search = styled.div`
  align-items: center;
  background: #fff url(${SearchIcon}) no-repeat 7px center;
  border-radius: 12px;
  display: flex;
  height: 24px;
  padding: 6px 7px 6px 26px;
  width: 210px;

  input {
    border: 0;
    color: #121212;
    flex: 1;
    font-size: 13px;
  }
`;

export const User = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;

  img {
    border-radius: 50%;
    height: 27px;
    margin-right: 5px;
    width: 27px;
  }
`;
