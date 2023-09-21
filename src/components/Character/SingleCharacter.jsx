export const SingleCharacter = (props) => {
  const { character } = props;
  const { image, name, origin, species, location, status } = character;

  /*useEffect(() => {
    getSingleCharacter(1).then((data) => setCharacter(data));
  }, [setCharacter]);*/

  return (
    <li className="character-element">
      <img src={image} />

      <div className="character-card-props">
        <div>
          <h4>{name}</h4>
          <p
            style={{
              color: "white",
              marginTop: "0.3em",
              marginBottom: "0.3em",
            }}
          >
            {`${status} - ${species}`}
          </p>
        </div>
        <div>
          <h5>Last known location:</h5>
          <label>{origin.name}</label>
        </div>
        <div>
          <h5>First seen in:</h5>
          <label>{location.name}</label>
        </div>
      </div>
    </li>
  );
};
