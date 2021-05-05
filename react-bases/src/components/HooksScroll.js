import React, { useState, useEffect } from "react";

export default function HooksScroll() {
  const [scrollY, setscrollY] = useState(0);

  useEffect(() => {
    // console.log("ComponentDidUnmount - Fase de montaje");
  }, []);

  useEffect(() => {
    //   console.log("ComponentDidMount - Fase de actualizacion");
    // });
  });

  useEffect(() => {
    const detectScroll = () => setscrollY(window.pageYOffset);
    window.addEventListener("scroll", detectScroll);

    return () => {
      // console.log("ComponentWillUnmount - Fase de desmontaje");
      window.removeEventListener("scroll", detectScroll);
    };
  });

  return (
    <>
      <h2>Hooks - useEffec & LifeCycle</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
