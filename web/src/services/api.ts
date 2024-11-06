import { API_URL, API_TOKEN } from '../configs/constants';
import axios from 'axios';
import type { LoginCredentials, AuthResponse, RegisterCredentials } from '../types/auth';

//const API_URL = 'https://api.example.com'; // Replace with your API URL

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('auth-storage') || '{}')?.state?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/login', credentials);
    return data;
  },
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/register', credentials);
    return data;
  },
  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },
};

export default api;