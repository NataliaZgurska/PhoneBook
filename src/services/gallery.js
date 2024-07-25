import axios from 'axios';

const MY_ACCESS_KEY = 'r5X1Oa10oS9-BERhXbh0nWixL3GFYc5WhGNcDvhdj7k';
const queryArray = [
  'people',
  'person',
  'phone',
  'contact',
  'cat',
  'iphone',
  'call',
  'speak',
  'people',
  'call',
  'contact',
];

export const getImages = async () => {
  const page = Math.round(Math.random() * 10) + 1;
  const { data } = await axios.get(
    'https://api.unsplash.com/search/photos?client_id=' +
      MY_ACCESS_KEY +
      '&page=' +
      page +
      '&query=' +
      queryArray[page - 1] +
      '&per_page=25'
  );

  //https://api.unsplash.com/search/photos?client_id=r5X1Oa10oS9-BERhXbh0nWixL3GFYc5WhGNcDvhdj7k&page=1&query=cat&per_page=25'

  console.log(data.results);
  return data;
};
