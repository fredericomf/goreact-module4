import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: #282828;
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 12px;
`;

export const Current = styled.div`
  align-items: center;
  display: flex;

  img {
    height: 48px;
    width: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    span {
      color: #fff;
      font-size: 13px;
    }

    small {
      color: #b3b3b3;
      font-size: 11px;
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Controls = styled.div`
  align-items: center;
  display: flex;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Time = styled.div`
  align-items: center;
  display: flex;
  margin-top: 5px;

  span {
    color: #b3b3b3;
    font-size: 11px;
  }
`;

export const ProgressSlider = styled.div`
  margin: 0 15px;
  width: 500px;
`;

export const Volume = styled.div`
  align-items: center;
  display: flex;
  margin-right: 20px;
  width: 100px;

  img {
    margin-right: 5px;
  }
`;
