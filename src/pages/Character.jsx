import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export const Character = () => {
  const location = useLocation();
  const char = location.state;

  const { getEpisodesFromCharacter, episodesInfo } = useCharacter();

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const newEpisodes = char.episode.map((item) => {
      const episode = parseInt(item.slice(40));
      return episode;
    });
    setEpisodes(() => [...newEpisodes]);
    getEpisodesFromCharacter(episodes);
  }, []);

  return (
    <>
      <article>
        <div>
          <img src={char.image} alt="" />
        </div>
        <div>
          Episodes
          {episodesInfo.length === 0 ? (
            <>...</>
          ) : (
            episodesInfo.map((item, index) => (
              <p key={index} style={{ color: "white" }}>
                {item.name}
              </p>
            ))
          )}
        </div>
      </article>
    </>
  );
};
