import React, { useState } from "react";

import { Container, ImgMe, SocialItem, ImgSocial, Social, ImgFondo } from "./Styles";

const socialMedia = [
  {
    id: 1,
    name: "GitHub.png",
    link: "https://github.com/joomoodle/",
  },
  {
    id: 2,
    name: "facebook.png",
    link: "https://www.facebook.com/joomoodle",
  },
  {
    id: 3,
    name: "instagram.png",
    link: "https://www.instagram.com/jdionicio_/",
  },
  {
    id: 4,
    name: "linkedin.png",
    link: "https://www.linkedin.com/in/juan-dionicio-621600aa/",
  },
];

function Home() {
  const renderSocial = () => {
    return socialMedia.map((item) => (
      <SocialItem>
        {item.name ? (
          <a href={item.link} target="_blank">
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
      <Container>
        <ImgFondo  src={`${process.env.PUBLIC_URL}/fondo.jpg`} />
        <ImgMe src={`${process.env.PUBLIC_URL}/me.png`} />
        <div class="jumbotron">
          <span className={"title-1"}>Hola</span> <br />
          <span className={"title-2"}>
            Soy desarrollador frontend & Backend
          </span>
          <br />
          <span className={"desc"}>
            Me gusta el mundo de la progración hace ya 7 años que inicie en este
            mundo
          </span>
          <br />
          <Social>{renderSocial()}</Social>
        </div>
      </Container>
    </>
  );
}

export default Home;
