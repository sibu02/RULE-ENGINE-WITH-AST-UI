import axios from "axios"

export const baseUrl = `${process.env.BACKEND_URL}`
console.log(process.env.BACKEND_URL)
export const api = axios.create({
    baseURL:"http://localhost:8080",
    headers:{
        "Content-Type" : "application/json"
    }

})