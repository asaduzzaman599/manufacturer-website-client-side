import axios from "axios";

export const baseUrl = axios.create({
    baseURL: 'https://vehicle-portion-asaduzzaman599.herokuapp.com'
});