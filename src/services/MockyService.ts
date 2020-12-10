import axios from 'axios';
import { getUrlBuilder } from 'helpers/buildUrl';

const BASE_URL = 'http://www.mocky.io/v2/';

const axiosInstance = axios.create({
  baseURL: 'BASE_URL',
});

const buildUrl = getUrlBuilder(BASE_URL);

export const MockyService = {
  getCategories: async () => {
    const resp = await axiosInstance.get(buildUrl('5bcdd3942f00002c00c855ba'));
    return resp.data;
  },

  getCoordinators: async () => {
    const resp = await axiosInstance.get(buildUrl('5bcdd7992f00006300c855d5'));
    return resp.data;
  },
};
