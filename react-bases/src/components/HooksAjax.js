import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function HooksAjax() {
  const [pokemons, setPokemons] = useState([]);

  /*
  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        json.results.forEach((el) =>
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            })
        )
      );
  }, []);*/

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url);
      const data = await res.json();

      data.results.forEach(async (el) => {
        let res = await fetch(el.url);
        const data = await res.json();

        let pokemon = {
          id: data.id,
          name: data.name,
          avatar: data.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Hooks - Ajax</h2>
      <div className="grid">
        {pokemons.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          pokemons.map((pok) => <Pokemon key={pok.id} name={pok.name} avatar={pok.avatar} />)
        )}
      </div>
    </>
  );
}
