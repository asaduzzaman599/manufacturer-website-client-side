import axios from "axios";

export const privateUrl = axios.create({
    baseURL: 'http://localhost:5000/'
});