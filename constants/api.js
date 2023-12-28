import axios from 'axios';

export const fetchData = () => {
  return axios.get('http://192.168.0.100:5000/logements/')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
};


