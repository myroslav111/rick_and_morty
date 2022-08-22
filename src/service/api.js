import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
const character = '/character';
// const location = '/location';
// const episode = '/episode';
// const itemOnPage = 10;
// const page = 1;

async function getCharacter() {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api${character}`
  );
  // console.log(data.results);
  return data;
}

async function getNextPage(nextPage) {
  const { data } = await axios.get(nextPage);
  // console.log(data);
  return data;
}

const api = {
  getCharacter: getCharacter,
  getNextPage: getNextPage,
};

export default api;
