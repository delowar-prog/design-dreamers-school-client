import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://summer-camp-fashion-design-server.vercel.app', // Replace with your base URL
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext)

    useEffect(() => {
         axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('user_access_key');
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
    }, [logoutUser,navigate]);
    return [axiosSecure];
};

export default useAxiosSecure;




