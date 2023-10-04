import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export const CharacterPage = () => {
  const location = useLocation();
  const char = location.state;
  const { image, name, gender, species } = char;

  const { getEpisodesFromCharacter, episodesInfo, setEpisodesInfo } =
    useCharacter();

  const [episodes] = useState([]);

  useEffect(() => {
    char.episode.map((item) => {
      const episode = parseInt(item.slice(40));
      episodes.push(episode);
    });
    setTimeout(() => {
      getEpisodesFromCharacter(episodes);
    }, 1000);
  }, [setEpisodesInfo]);

  console.log(episodesInfo);

  return (
    <>
      <div className="character-page">
        <article className="container">
          <div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ marginBlockStart: "0.2em" }}>
                {name} - {gender} - {species}
              </h3>
            </div>
            <img src={image} alt={name} />
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Episodes</h3>
            <ul className="character-episodes">
              {episodesInfo.length === 0 ? (
                <>...</>
              ) : (
                episodesInfo.map((item, index) => (
                  <li key={index} style={{ color: "white" }}>
                    {item.name}
                  </li>
                ))
              )}
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};
