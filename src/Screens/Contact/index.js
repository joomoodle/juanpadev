import React, { useState } from "react";
import {
  PhoneIphone,
  Web,
  PhoneCallback as Telefono,
  Email,
  LocationCity
} from "@material-ui/icons";
import { Head } from "../../Components";
import {
  Container,
  DivRowCenter,
  Title,
  DivRow,
  DivItem,
  DivContainer,
  PoweredBy,
  Tecnologias
} from "./Styles";

const Proyectos = [
  {
    id: 1,
    text: "Estado de méxico, Tlalnepantla de Baz, Col. Cristobal Colon",
    name: "Dirección",
    icon: "LocationCity"
  },
  {
    id: 1,
    text: "5574641852",
    name: "Telefono",
    icon: "Telefono"
  },
  {
    id: 1,
    text: "juan_pablo_ing@outlook.es",
    name: "Email",
    icon: "Email"
  }
];

function Contact() {
  const getIcon = name => {
    switch (name) {
      case "PhoneIphone":
        return (
          <PhoneIphone
            style={{
              color: "rgb(255, 74, 87)",
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 40
            }}
            className={"iconDesc"}
          />
        );
      case "Telefono":
        return (
          <Telefono
            style={{
              color: "rgb(255, 74, 87)",
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 40
            }}
            className={"iconDesc"}
          />
        );
      case "LocationCity":
        return (
          <LocationCity
            style={{
              color: "rgb(255, 74, 87)",
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 40
            }}
            className={"iconDesc"}
          />
        );
      case "Email":
        return (
          <Email
            style={{
              color: "rgb(255, 74, 87)",
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 40
            }}
            className={"iconDesc"}
          />
        );
      default:
        return (
          <Web
            style={{
              color: "rgb(255, 74, 87)",
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 40
            }}
            className={"iconDesc"}
          />
        );
    }
  };
  const renderProyect = () => {
    return Proyectos.map((item, index) => {
      const mod = index % 2;

      return (
        <DivItem>
          <h3 style={{ color: "#fff", paddingLeft: 10 }}>{item.name}</h3>

          <div style={{ height: 150, paddingLeft: 10, paddingRight: 10 }}>
            <p style={{ color: "#fff", textAlign: "justify" }}>{item.text}</p>
          </div>
        </DivItem>
      );
    });
  };

  return (
    <>
      <Head />
      <Container>
        <DivRowCenter>
          <Title>Proyectos</Title>
        </DivRowCenter>
        <DivContainer>
          <DivRow>{renderProyect()}</DivRow>
        </DivContainer>
      </Container>
    </>
  );
}

export default Contact;
