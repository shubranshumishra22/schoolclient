import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const getNews = () => api.get('/news');
export const getEvents = () => api.get('/events');
export const getGallery = () => api.get('/gallery');
export const submitContact = (data) => api.post('/contact', data);
export const submitAdmission = (data) => api.post('/admissions', data);

export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);
export const getMe = () => api.get('/auth/me');

export const getAdmissions = () => api.get('/admissions');
export const getContacts = () => api.get('/contact');

export default api;
