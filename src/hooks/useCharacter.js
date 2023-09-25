import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCharacter = () => {
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  const getAllCharacters = () => {
    const data = fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => data);
    return data;
  };

  const getSingleCharacter = async (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        navigate("/character", { state: data });
      });
  };

  const getEpisodesFromCharacter = async (episodes) => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/episode/${episodes}`
    )
      .then((res) => res.json())
      .then((data) => data.results);
    return data;
  };

  return {
    getAllCharacters,
    getSingleCharacter,
    character,
    getEpisodesFromCharacter,
  };
};
