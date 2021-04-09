import styled from "styled-components";

const Container = styled.div`
  min-height: 380px;
  width: 100%;
  & > .jumbotron {
    width: 100%;
    min-height: 380px;
    position: relative;
    z-index: 5;
    color: white;
    background-image: linear-gradient(
      to right bottom,
      #2d84c3,
      #1074bd,
      #0064b7,
      #0053ae,
      #0242a4
    );
    opacity: 0.8;
    & > .title-1 {
      display: inline-block;
      margin-top: 100px;
      margin-left: 50px;
      font-size: 30px;
      font-weight: 900;
      background-color: #ffffff;
      color: #2d84c3;
      padding: 5px;
      border-radius: 3px;
    }
    & > .title-2 {
      display: inline-block;
      margin-left: 50px;
      font-size: 34px;
      font-weight: bold;
    }
    & > .desc {
      display: inline-block;
      margin-left: 50px;
      font-size: 24px;
      font-weight: 400;
    }
  }
`;

const ImgMe = styled.img`
  object-fill: cover;
  height: 370px;
  right: 100px;
  position: absolute;
  top: 0;
  z-index: 1;
  float: right;
  padding-top: 10px;
`;

const ImgFondo = styled.img`
  object-fill: cover;
  height: 380px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  float: right;
  padding-top: 0px;
`;
const Social = styled.div`
  margin-left: 54px;
  margin-top: 15px;
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 20px;
  }
`;

const SocialItem = styled.div`
  margin-right: 20px;
  display: inline-block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid rgb(255, 74, 87);
  &:hover {
    background-color: rgb(255, 74, 87);
  }
`;

const ImgSocial = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  padding: 10px;
  @media (max-width: 768px) {
    margin-left: -20px;
  }
`;

const ContainerServices = styled.div`
  background-color: #fafafa;
  padding: 10px;
  & > .title {
    text-align: center;
    font-size: 32px;
    font-weight: 900;
  }
  & > .desc {
    display: block;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    color: #2d84c3;
  }
`;

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 30px;
`;

const GridItem = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0px -1px 5px -1px rgba(107,107,107,1);
  border-radius: 5px;
  min-height: 100px;
  & > .title {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }
  & > p {
    font-size: 22px;
    font-weight: 200;
  }
`;

const Tags = styled.div`
  margin-left: 54px;
  margin-top: 15px;
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 20px;
  }
`;

const TextTags = styled.span`
  display: inline;
  background-color: #ffffff;
  color: #2d84c3;
  border-radius: 20px;
  margin: 2px;
  padding: 0px 8px 0px 8px; 
  font-size: 22px;
  font-weight: 500;

`
export {
  Container,
  ImgMe,
  Social,
  SocialItem,
  ImgSocial,
  ImgFondo,
  ContainerServices,
  Grid,
  GridItem,
  Tags,
  TextTags
};
