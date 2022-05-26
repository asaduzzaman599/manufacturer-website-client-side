import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";

export const privateUrl = axios.create({
    baseURL: 'https://vehicle-portion-asaduzzaman599.herokuapp.com'
});

privateUrl.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (!config?.headers?.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
privateUrl.interceptors.response.use(function (response) {


    return response;
}, function (error) {

    console.log(error?.response?.status)
    if (error?.response?.status === 403 || error?.response?.status === 401) {

        console.log(error?.response?.status)
        signOut(auth)
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});