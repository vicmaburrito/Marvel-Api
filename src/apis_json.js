import { allCharacters } from './endpoints.js';

const JsonallCharacters = async () => {
  const response = await fetch(allCharacters);
  const info = await response.json();
  return info;
};

// export const getmarvelJson = async (characterId) => {
//   const response = await fetch(character(characterId));
//   const info = await response.json();
//   return info;
// };

export default JsonallCharacters();
