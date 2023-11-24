import axios from './axios';

export const createReportRequest = (report) => axios.post('/reports', report);

export const getAllReportRequest = () => axios.get('/reports');

export const getReportRequest = (id) => axios.get(`/reports/${id}`);