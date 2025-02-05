import Axios from 'axios';

const axios = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL
});

axios.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response?.status === 401) {
    //   console.error("Unauthorized - Redirecting to login...");
    //   if(typeof localStorage !== 'undefined'){
    //     localStorage.removeItem("token");
    //   }
    //   if(typeof window !== "undefined"){
    //     window.location.href = "/";
    //     alert('Session Expired');
    //   }
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
  }
);

export const axiosWithToken = (token?: string) => Axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Authorization': `Bearer ${token}`,
		'Accept': 'application/json',
	}
})

export default axios;
