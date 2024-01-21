import axios from 'axios';

export const postAxios = (url, data) => {
  return new Promise((res, rej) => {
    axios
      .post(url, data)
      .then((result) => res(result.data))
      .catch((error) => rej(error));
  });
};

export const getAxios = (url) => {
  return new Promise((res, rej) => {
    axios
      .get(url)
      .then((result) => res(result.data))
      .catch((error) => rej(error));
  });
};

export const putAxios = (url, data) => {
  return new Promise((res, rej) => {
    axios
      .put(url, data)
      .then((result) => res(result.data))
      .catch((error) => rej(error));
  });
};

export const deleteAxios = (url) => {
  return new Promise((res, rej) => {
    axios
      .delete(url)
      .then((result) => res(result.data))
      .catch((error) => rej(error));
  });
};
