import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex: 1; /*Para ocupar toda a largura*/
`;

export const Content = styled.div`
  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
