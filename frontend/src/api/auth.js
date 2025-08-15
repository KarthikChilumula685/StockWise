import api from './axios';

export const registerUser = (payload) => api.post('/api/auth/signup', payload);
export const loginUser = (payload) => api.post('/api/auth/login', payload);
