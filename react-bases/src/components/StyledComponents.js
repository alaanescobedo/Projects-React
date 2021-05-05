import React from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

export default function StyledComponents() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTIme = (time) => `all ${time} ease-in-out `;

  const fadeIn = keyframes`
  0%{
    opacity:0;
  }

  100%{
    opacity:1;
  }
  
  `;

  const GlobalStyle = createGlobalStyle`
  h2 {
    padding:2rem;
    background-color: #fff;
    color:#61dafb;
    text-transform:uppercase;
  }
`;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    background-color: ${mainColor};
    color: ${({ color }) => color};
    color: ${({ color }) => color || "#000"};
    /* transition: all 0.5s ease-in-out; */
    transition: ${setTransitionTIme("1s")};
    animation: ${fadeIn} 2s ease-in-out;

    ${(props) =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.5rem;
        cursor: pointer;
      `}
    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#ddd",
  };
  const dark = {
    color: "#ddd",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;
  return (
    <>
      <GlobalStyle />
      <h2>Styled Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled components</MyH3>
      <MyH3 color="#61dafb">Hola soy un h3 estilizado con styled components</MyH3>
      <MyH3 isButton>H3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Light Box</Box>
        <BoxRounded>Light Box Rounded</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Dark Box</Box>
        <BoxRounded>Dark Box Rounded</BoxRounded>
      </ThemeProvider>
    </>
  );
}
