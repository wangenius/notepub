import axios from "axios";

export const domain = "https://127.0.0.1:3001/api";
export const domain2 = "https://api.wangenius.com:3000/api";
// export const domain2 = "https://39.96.54.181:3000/api";

export const instance = axios.create({
  baseURL: domain2,
  // headers: {
  //   "Content-Type": "application/json;charset=UTF-8",
  //   "X-Requested-With": "XMLHttpRequest",
  //   "X-Content-Type-Options": "no-sniff",
  //   "Cache-Control": "no-cache",
  // },

  timeout: 30000,
});
