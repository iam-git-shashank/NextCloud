import { DataProvider } from '@refinedev/core';
import axios from 'axios';

// const API_URL = "http://localhost:3000/api"; // replace with your NestJS API base URL
const API_URL = 'https://api.fake-rest.refine.dev';

export const customDataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const params = new URLSearchParams();
    if (pagination?.current && pagination?.pageSize) {
      const start = (pagination.current - 1) * pagination.pageSize;
      const end = pagination.current * pagination.pageSize;
      params.append('_start', start.toString());
      params.append('_end', end.toString());
    }

    const response = await fetch(`${API_URL}/${resource}?${params.toString()}`);

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return {
      data,
      total: 0, // We'll cover this in the next steps.
    };
  },

  getOne: async ({ resource, id }) => {
    const response = await axios.get(`${API_URL}/${resource}/${id}`);
    return {
      data: response.data,
    };
  },

  create: async ({ resource, variables }) => {
    const response = await axios.post(`${API_URL}/${resource}`, variables);
    return {
      data: response.data,
    };
  },

  update: async ({ resource, id, variables }) => {
    const response = await axios.put(`${API_URL}/${resource}/${id}`, variables);
    return {
      data: response.data,
    };
  },

  deleteOne: async ({ resource, id }) => {
    const response = await axios.delete(`${API_URL}/${resource}/${id}`);
    return {
      data: response.data,
    };
  },
  getApiUrl: function (): string {
    throw new Error('Function not implemented.');
  },
};
