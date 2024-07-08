import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export const CharacterPage = () => {
  const location = useLocation();
  const char = location.state;
  const { image, name, gender, species } = char;

  const { getEpisodesFromCharacter, episodesInfo } = useCharacter();

  useEffect(() => {
    const episodeNumbers = char.episode.map((item) => parseInt(item.slice(40)));

    // Make the API request inside a function to avoid synchronization issues
    const fetchEpisodes = async () => {
      await getEpisodesFromCharacter(episodeNumbers);
    };

    fetchEpisodes();
  }, [char.episode, getEpisodesFromCharacter]);

  return (
    <div className="character-page">
      <h3 className="character-card-episodes-title">Character Episodes</h3>

      <article className="character-card">
        <div className="character-card-header">
          <img className="character-card-image" src={image} alt={name} />
          <div className="character-card-info">
            <h3 className="character-card-title">{`${name} - ${gender} - ${species}`}</h3>
          </div>
        </div>
        <div className="character-card-episodes-section">
          <ul className="character-card-episodes-list">
            {(episodesInfo || []).length === 0 ? (
              <>...</>
            ) : (
              episodesInfo.map((item, index) => (
                <li key={index} className="character-card-episode-item">
                  {item.name}
                </li>
              ))
            )}
          </ul>
        </div>
      </article>
    </div>
  );
};
