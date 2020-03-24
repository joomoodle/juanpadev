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
  flex-direction: row;
  @media (max-width: 1024px) {
    .row1 {
      display: none;
    }
    .row2 {
      width: 100% !important;
      margin-left: 20px;
    }
  }
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 28px;
  text-align: center;
`;
export { Container, DivRowCenter, Title, DivRow, divColumn };
