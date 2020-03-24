import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivRowCenter = styled.div`
  display: 0 auto;
`;

const divColumn = styled.div`
  flex-direction: column;
`;
const DivRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 28px;
  text-align: center;
`;

const DivItem = styled.div`
  flex: 0 0 33.333333%;
  max-width: 30%;
  height: 350px;
  background: #23263a;
  margin: 10px;
  &:hover {
    transition: 0.5s;
    background: rgb(255, 74, 87);
    div > span {
      color: #ffffff !important;
    }
    .iconDesc {
      color: #ffffff !important;
      -webkit-transition: 0.8s linear;
      -o-transition: 0.8s linear;
      transition: 0.8s linear;
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
  }
`;

const DivContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center !important;
`;

const PoweredBy = styled.div`
  position: absolute;
  color: #ffffff;
  padding-left: 10px;
  letter-spacing: 2px;
`;
const Tecnologias = styled.div`
  color: #ffffff;
  padding-left: 10px;
  letter-spacing: 2px;
  height: 50px;
`;

//#
export {
  Container,
  DivRowCenter,
  DivContainer,
  Title,
  DivRow,
  divColumn,
  DivItem,
  PoweredBy,
  Tecnologias
};
