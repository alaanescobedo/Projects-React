import React from "react";
import "./Styles.css";
import "./Styles.scss";
import moduleStyles from "./Styles.module.css";

export default function Styles() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <>
      <section className="styles">CSS Styles in React</section>
      <h3 className="bg-react">Estilos en hoja css externa</h3>
      <h3 className="bg-react" style={{ borderRadius: ".25rem", margin: "1rem" }}>
        Estilos en linea (atributo style:)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en linea (atributo style:)
      </h3>
      <h3 className={moduleStyles.error}>Estilos con modulos</h3>
      <h3 className={moduleStyles.success}>Estilos con modulos</h3>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </>
  );
}
