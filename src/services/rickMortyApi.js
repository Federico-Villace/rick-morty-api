export const getAllCharacters = () => {
  const data = fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => data);
  return data;
};

export const getSingleCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
};
