import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCharacter = () => {
  const [character, setCharacter] = useState({});
  const [episodesInfo, setEpisodesInfo] = useState([]);

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
    const res = await fetch(
      `https://rickandmortyapi.com/api/episode/[${episodes}]`
    );
    const data = await res.json();
    setEpisodesInfo(data);
  };

  return {
    getAllCharacters,
    getSingleCharacter,
    character,
    getEpisodesFromCharacter,
    episodesInfo,
    setEpisodesInfo,
  };
};
