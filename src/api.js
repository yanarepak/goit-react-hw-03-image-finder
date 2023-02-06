import axios from 'axios';

const API_KEY = '32598892-04f2af8dd617e3c39ac21f527';

const getPhotos = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: API_KEY,
    per_page: '12',
  },
});

export const fetchPhotos = async (query, page) => {
  return await getPhotos.get(`?q=${query}&page=${page}`);
}