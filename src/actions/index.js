import axios from 'axios'

export const getSecretWord = () => {
  return axios.get('http://localhost:3030').then((result) => {
    //console.log(result.data);
    return result.data
  });
  //.then(result => result.data)
}

