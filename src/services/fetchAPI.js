import axios from 'axios';

const API_URL =
  'https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json';

export const fetchData = async () => {
  return axios
    .get(API_URL)
    .then(response => response.data)
    .catch(error => console.error('Error: ', error));
};
