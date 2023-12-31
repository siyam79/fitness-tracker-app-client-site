import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import { Navigate } from "react-router-dom";


const axiosSecure = axios.create({
  baseURL: "https://n-three-vert.vercel.app"
})
const useAxiosSecure = () => {

const navigate = useNavigate()


 const {logOut} = useAuth()
  // request interceptor
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interceptore', token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  })

  //  intetceptor response

  axiosSecure.interceptors.response.use(function (response) {
    return response;

  }, async (error) => {
    const status = error.response.status;
    console.log('status error', status);
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error)
  })


  return axiosSecure
};

export default useAxiosSecure;