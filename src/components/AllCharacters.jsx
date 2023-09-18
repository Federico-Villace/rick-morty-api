import { useEffect, useState } from "react";
import { getAllCharacters } from "../services/rickMortyApi";
import "../app.css";
import { SingleCharacter } from "./SingleCharacter";

export const AllCharacters = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then((resp) => setAllCharacters(resp.results));
  }, []);

  return (
    <>
      {allCharacters.length === 0 ? (
        <>...</>
      ) : (
        <div className="characters-list-container">
          <ul className="characters-list">
            {allCharacters.map((item, index) => (
              <SingleCharacter character={item} key={index} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
