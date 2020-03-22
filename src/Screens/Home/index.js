import React, { useState } from "react";
import { Head } from "../../Components";
import { Container, Row1, Row2, Iam, Des, Social, SocialItem, ImgSocial } from "./Styles";

const socialMedia = [
  {
    id: 1,
    name: "GitHub.png",
    link: ""
  },
  {
    id: 2,
    name: "facebook.png",
    link: ""
  },
  {
    id: 2,
    name: "instagram.png",
    link: ""
  },
  {
    id: 2,
    name: "linkedin.png",
    link: ""
  }
];
function Home() {
  const renderSocial = () => {
    return socialMedia.map(item => (
      <SocialItem>
        {item.name ? (
          <ImgSocial
            src={`${process.env.PUBLIC_URL}/${item.name}`}
            alt="#"
          />
        ) : (
          ""
        )}
      </SocialItem>
    ));
  };

  return (
    <>
      <Head />
      <Container>
        <Row1>
          <div style={{ paddingTop: 150 }}>
            <Social>{renderSocial()}</Social>
            <Iam>Soy Juan Pablo Dionicio</Iam>
            <Des>
              Desarrollador web profesional con larga experiencia en este campo.
            </Des>
          </div>
        </Row1>
        <Row2>
          <img
            src={`${process.env.PUBLIC_URL}/dev_1.png`}
            alt=""
            style={styles.img}
          />
        </Row2>
      </Container>
    </>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "row"
  },
  row1: {
    width: "60%"
  },
  row2: {
    width: "40%"
  },
  nameTitle: {
    fontSize: 45,
    color: "#ffffff",
    fontWeight: "bold",
    paddingLeft: 100
  },
  desTitle: {
    fontSize: 40,
    color: "#ffffff",
    paddingLeft: 100
  },
  img: {
    width: "95%",
    objectFill: "contain",
    verticalAlign: "middle",
    borderStyle: "none"
  },
  social: {
    paddingLeft: 100
  },
  socialItem: {
    marginRight: 20,
    display: "inline-block",
    borderRadius: "50%",
    width: 40,
    height: 40,
    borderWidth: 5,
    border: "rgb(255, 74, 87) 3px solid"
  },
  imgIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    marginTop: 7,
    marginLeft: 7
  }
};
export default Home;
