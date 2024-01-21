import React, { createContext, useContext } from 'react';

import { deleteAxios, getAxios, postAxios, putAxios } from '@/helpers/axios';

export const ServerContext = createContext(null);

export const useServer = () => useContext(ServerContext);
class ServerApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API;
    this.url = import.meta.env.VITE_API_MICROSERVICE;
  }

  login = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.url}/cliente/login`, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  register = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.baseUrl}/cliente`, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  getClients = () => {
    return new Promise((resolve, reject) => {
      getAxios(`${this.baseUrl}/cliente`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  updateClient = (id, data) => {
    return new Promise((resolve, reject) => {
      putAxios(`${this.baseUrl}/cliente/${id}`, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  deleteClient = (id) => {
    return new Promise((resolve, reject) => {
      deleteAxios(`${this.baseUrl}/cliente/${id}`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  getCountries = () => {
    return new Promise((resolve, reject) => {
      getAxios(`${this.baseUrl}/pais`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  getProcedures = () => {
    return new Promise((resolve, reject) => {
      getAxios(`${this.baseUrl}/tramite`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  procedure = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.baseUrl}/tramite`, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  deleteProcedure = (id) => {
    return new Promise((resolve, reject) => {
      deleteAxios(`${this.baseUrl}/tramite/${id}`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  updateProcedure = (id, data) => {
    return new Promise((resolve, reject) => {
      putAxios(`${this.baseUrl}/tramite/${id}`, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  getRegisters = () => {
    return new Promise((resolve, reject) => {
      getAxios(`${this.baseUrl}/registro`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };

  createRegister = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.baseUrl}/registro`, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  };
}

export const ServerProvider = ({ children }) => (
  <ServerContext.Provider value={new ServerApi()}>{children}</ServerContext.Provider>
);
