import React, { useState } from "react";
import { PhoneIphone, Web } from "@material-ui/icons";
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
    text:
      "Aplicación móvil para generar adelantos de nómina en el cual los empleados ya registrados pueden solicitar el prestamo el deposito de hace vía spei",
    name: "CrediEmpleado",
    icon: "PhoneIphone",
    powered: "Hybrido Studio",
    tec: ".Net Core | C# | Web Api | SQL SERVER | REACT NATIVE | REACT JS"
  },
  {
    id: 1,
    text:
      "Proyecto para pagar servicios (agua, luz, tv, recargas). En este proyecto restructure la version 1a que se lanzo en 2018. Se cambio de tecnologias y de estructura de base de datos y la api. Se creo un adminstrador para los reportes y alta de nuevos productos ",
    name: "BillyPays",
    icon: "PhoneIphone",
    powered: "Hybrido Studio",
    tec: ".Net Core | C# | Web Api | SQL SERVER | REACT NATIVE | REACT JS"
  },
  {
    id: 1,
    text:
      "Aplicación movil. Para el usuario final refleja sus ultimos movimientos, bloqueo de tarjetas y activación",
    name: "Winko",
    icon: "PhoneIphone",
    powered: "Hybrido Studio",
    tec: ".Net Core | C# | Web Api | SQL SERVER | REACT NATIVE"
  },
  {
    id: 1,
    name: "Asofarma",
    text:
      "Es una aplicación movil para los gerentes de venta en la cual entran a realizar encuentas a ejecutivos.",
    icon: "PhoneIphone",
    powered: "Swplus",
    tec: ".Net|MVC|WEB API|IONIC|SQL SERVER | JQUERY | Javascript"
  },
  {
    id: 1,
    name: "School",
    text:
      "Es una web para colegios donde administran la cobranza de los servicios (facturas, pagos, notas de credito, cargos automaticos)",
    icon: "",
    powered: "Swplus",
    tec: ".Net | Vb.net | SQL SERVER | JQUERY | Javascript"
  }
];

function Portafolio() {
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
          {getIcon(item.icon)}
          <h3 style={{ color: "#fff", paddingLeft: 10 }}>{item.name}</h3>
          <div style={{ height: 150, paddingLeft: 10, paddingRight: 10 }}>
            <p style={{ color: "#fff", textAlign: "justify" }}>{item.text}</p>
          </div>
          <Tecnologias>
            <span>{item.tec}</span>
          </Tecnologias>
          <PoweredBy>
            Powered by :{" "}
            <span style={{ color: "rgb(255, 74, 87)" }} className={"spam"}>
              {item.powered}
            </span>
          </PoweredBy>
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

export default Portafolio;
