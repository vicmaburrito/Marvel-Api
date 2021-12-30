import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import JsonallCharacters from './apis_json.js';
import allCharacters from './endpoints.js';
// TODO id it's equal with character id, suing target.dataset.id;
// const characterId = 1;
// const infoCharacters = getmarvelJson(characterId);

fetch(allCharacters)
  .then((response) => response.json())
  .then((json) => {
    json.data.results.map((item) => {
      console.log(item);
    });
  });

// infoCharacters.then((info) => {
//   console.log(info);
// });

const allInfo = JsonallCharacters();
allInfo.then((info) => {
  console.log(info);
});