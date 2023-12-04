import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL || 'https://backend-prodmonitor.onrender.com/api'; 

const client = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

export default client;
