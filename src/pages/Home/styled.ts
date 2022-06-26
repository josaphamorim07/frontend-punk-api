import styled from "styled-components";

export const ContainerHome = styled.div`
  text-align: center;
  color: white;
  height: 97vh;
`;

export const TitleHome = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 5px;
  margin-top: -60px;
  padding-left: 10px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const TitleHomeList = styled.div`
  color: #fff;
  font-family: "lato", sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  font-size: 20px;
  letter-spacing: 5px;
  margin-top: 60px;
  margin-bottom: 60px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
`;
