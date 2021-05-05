import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksCustom() {
  //   console.log(useFetch());
  const url = "https://pokeapi.co/api/v2/pokemons/";

  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Custom Hooks</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <code>{JSON.stringify(data)}</code>
      </h3>
    </>
  );
}
