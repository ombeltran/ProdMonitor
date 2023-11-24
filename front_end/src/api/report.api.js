import axios from './axios';

export const createReport = (report) => axios.post('/reports', report);