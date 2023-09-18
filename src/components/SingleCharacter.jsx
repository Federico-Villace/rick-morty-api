export const SingleCharacter = (props) => {
  const { character } = props;
  const { image, name, origin, species } = character;

  /*useEffect(() => {
    getSingleCharacter(1).then((data) => setCharacter(data));
  }, [setCharacter]);*/

  return (
    <li className="character-element">
      <div>
        <img src={image} />
      </div>
      <div>
        <h4>{name}</h4>
        <h5>{origin.name}</h5>
        <h5>{species}</h5>
      </div>
    </li>
  );
};
