import React, { useState } from "react";
import { Head } from "../../Components";
import {
  Container,
  Row1,
  Row2,
  Iam,
  Des,
  Social,
  SocialItem,
  ImgSocial
} from "./Styles";

const socialMedia = [
  {
    id: 1,
    name: "GitHub.png",
    link: "https://github.com/joomoodle/"
  },
  {
    id: 2,
    name: "facebook.png",
    link: "https://www.facebook.com/joomoodle"
  },
  {
    id: 2,
    name: "instagram.png",
    link: "https://www.instagram.com/joomoodle/"
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
          <a href={item.link}>
            <ImgSocial src={`${process.env.PUBLIC_URL}/${item.name}`} alt="#" />
          </a>
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
  img: {
    width: "95%",
    objectFill: "contain",
    verticalAlign: "middle",
    borderStyle: "none"
  }
};
export default Home;
