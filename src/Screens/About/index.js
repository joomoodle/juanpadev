import React, { useState } from "react";
import { Head } from "../../Components";
import { Container, DivRowCenter, Title, DivRow } from "./Styles";

function About() {
  return (
    <>
      <Head />
      <Container>
        <DivRowCenter>
          <DivRow>
            <div style={{ width: "45%" }} className={'row1'}>
              <img
                src={`${process.env.PUBLIC_URL}/dev_avatar.png`}
                alt=""
                style={{ width: "80%", paddingLeft: 50, top: -10 }}
              />
            </div>
            <div style={{ width: "55%" }} className={'row2'}>
              <h2 style={{ color: "#ffffff" }}>Hola</h2>
              <p
                style={{
                  color: "#ffffff",
                  textAlign: "justify",
                  marginRight: 40,
                  fontSize: 22
                }}
                className={'pDesc'}
              >
                Casi todo el tiempo desde que egrese de la universidad
                tecnológica de Xicotepec de Juárez me dedique al desarrollo web
                empezando en lenguajes del lado del servidor como vb.net, c# ,
                php y java, gestionando igual bases de datos en sql server y
                mysql. Actualmente tengo más de 5 años de experiencia en el
                desarrollo he participado en diferentes proyectos con diferente
                tecnologías aplicaciones móviles y web en la mayoría de
                proyectos se han realizado con metodologías como scrum algunos
                proyectos han sido simples y algunos con mayor importancia.
                Considero que siempre hay que estar al día con las nuevas
                tecnologías que están o que van saliendo. Me gusta enseñar a mis
                amigos lo aprendido o ayudarlos a solucionar sus problemas en
                los proyectos
              </p>
            </div>
          </DivRow>
        </DivRowCenter>
      </Container>
    </>
  );
}

export default About;
