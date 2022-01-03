import { publicKey, privateHash } from './MarvelKeys.js';

export const marvelURL = ' https://gateway.marvel.com:443';
export const allCharacters = `${marvelURL}/v1/public/characters?&ts=1&apikey=${publicKey}&hash=${privateHash}`;
// export const character = (characterId) => `${marvelURL}/v1/public/characters/${characterId}`;
