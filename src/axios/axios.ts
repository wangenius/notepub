import axios from "axios";

export const domain = "https://api.wangenius.com:3000/api";

export const instance = axios.create({
  baseURL: domain,
  timeout: 30000,
});
