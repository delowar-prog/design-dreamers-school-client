import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from './useAuth';

//axiossecure create

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();
    const axiosSecure = axios.create({
        baseURL: 'https://summer-camp-fashion-design-server.vercel.app/', // Replace with your base URL
    });
    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                     await logoutUser();
                     navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logoutUser,navigate,axiosSecure]);
    return [axiosSecure];
};

export default useAxiosSecure;




