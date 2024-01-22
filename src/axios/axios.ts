import axios from "axios"


export const domain = "http://127.0.0.1:3001/api"

export const instance = axios.create({
    baseURL:domain,
    timeout:30000
})

