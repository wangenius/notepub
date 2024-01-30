import axios from "axios";

export const domain = "http://39.96.54.181:3002/api";

export const instance = axios.create({
  baseURL: domain,
  timeout: 30000,
});
