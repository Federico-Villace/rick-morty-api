import { useEffect, useState } from "react";
import { SingleCharacter } from "../Character/SingleCharacter";
import { useCharacter } from "../../hooks/useCharacter";
import "../../app.css";

export const AllCharacters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const { getAllCharacters, getSingleCharacter } = useCharacter();

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
              <SingleCharacter
                character={item}
                key={index}
                onSelected={(item) => getSingleCharacter(item)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
