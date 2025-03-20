// axiosInstance.ts
import axios from 'axios';
import { logout } from './authApi';


// Create an instance of axios


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Use your API URL
});

// Request interceptor to add the access token to every request except login
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token && config.url !== '/auth/login') {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = document.cookie.split('refresh_token=')[1]?.split(';')[0];
            if (!refreshToken) {
                logout();
                // window.location.href = "/auth/login";
                // throw new Error('No refresh token available');
            }

            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, { refresh_token: refreshToken });
                const newAccessToken = response.data.access;
                localStorage.setItem('access_token', newAccessToken);
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                logout();
                console.log(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
