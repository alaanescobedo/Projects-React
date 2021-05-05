import React, { useRef } from "react";

export default function HookReferences() {
  //   const refMenu = createRef(); Class components
  let refMenu = useRef(),
    refMenuBtn = useRef();

  const handleToggleMenu = (e) => {
    /*const menu = document.querySelector("#menu");
    if (e.target.textContent === "Menu") {
      e.target.textContent = "Close";
      menu.style.display = "block";
    } else {
      e.target.textContent = "Menu";
      menu.style.display = "none";
    } */
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Close";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>References</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#a">Section 1</a>
        <br />
        <a href="#a">Section 2</a>
        <br />
        <a href="#a">Section 3</a>
        <br />
        <a href="#a">Section 4</a>
        <br />
        <a href="#a">Section 5</a>
      </nav>
    </>
  );
}
