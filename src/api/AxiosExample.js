import axios from "axios";
import "nprogress/nprogress.css";
import nProgress from "nprogress";

const AxiosExample = axios.create({
  baseURL: "http://gmall-h5-api.atguigu.cn/api",
  timeout: 1000,
});

AxiosExample.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});

AxiosExample.interceptors.response.use(
  (res) => {
    nProgress.done();
    return res.data;
  },
  (error) => {
    nProgress.done();
    return error;
  }
);

export default AxiosExample;
