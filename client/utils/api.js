import axios from 'axios';

import { API_URL } from '../config/config';

export function api() {
  const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  });

  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (401 === error.response.status) {
        // redirect to login page
      }
      if (404 === error.response.status) {
        // redirect to 404 page
      }
      if (500 === error.response.status) {
        // redirect to 500 page
      }
      return Promise.reject(error);
    }
  );

  return api;
}
