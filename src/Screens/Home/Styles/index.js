import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Row1 = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Row2 = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Iam = styled.div`
  font-size: 45px;
  font-weight: bold;
  padding-left: 100px;
  color: #ffffff;
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 20px;
  }
`;

const Des = styled.div`
  font-size: 40px;
  color: #ffffff;
  padding-left: 100px;
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 20px;
  }
`;
const Social = styled.div`
  padding-left: 100px;
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
  border: 5px solid rgb(255, 74, 87);
`;

const ImgSocial = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  margin-top: 7px;
  margin-left: 7px;
  @media (max-width: 768px) {
    margin-top: 7px;
    margin-left: -14px;
  }
`;

export { Container, Row1, Row2, Iam, Des, Social, SocialItem, ImgSocial };
