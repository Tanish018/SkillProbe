import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true // Browser will send cookies with each request automatically
})

export default axiosInstance;