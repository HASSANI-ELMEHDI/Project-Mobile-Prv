import axios from 'axios';

export const fetchData = () => {
  return axios.get('http://192.168.0.131:5000/logements/')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getLogementById = (id) => {
  return axios.get(`http://192.168.0.131:5000/logements/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
};

