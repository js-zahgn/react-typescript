import axios from 'axios';

const BaseUrl: string = 'https://www.easy-mock.com/mock/5b3cbb92eaf38c457dee360d/example';

export const Url: any = {
  getTotalData: `${BaseUrl}/getData`,
  getGoodsInfo: `${BaseUrl}/getGoodsInfo`
};

axios.interceptors.request.use((config: any) => {
  config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  return config;
});

axios.interceptors.response.use((data: any) => {
  return data;
});

export const Http = axios;