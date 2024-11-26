import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: 'http://localhost:8000/api'
});

axiosConfig.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem('accessToken');
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosConfig;
