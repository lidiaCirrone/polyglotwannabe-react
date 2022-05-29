import axios from 'axios';
import {BASEURL, TIMEOUT} from './config';

const axiosInstance = axios.create({
   baseURL: BASEURL,
   timeout: TIMEOUT
})

const apiGet = async (resource, config = null) => {
   return axiosInstance.get(resource, config)
   .then(response => response?.data)
   .catch(error => error)
}

const apiPost = async (resource, obj, config = null) => {
   return axiosInstance.post(resource, obj, config)
   .then(response => response?.data)
   .catch(error => error)
}

const apiPut = async (resource, obj, config = null) => {
   return axiosInstance.put(resource, obj, config)
   .then(response => response?.data)
   .catch(error => error)
}

const apiDelete = async (resource, config = null) => {
   return axiosInstance.delete(resource, config)
   .then(response => response?.data)
   .catch(error => error)
}

export {
   apiGet,
   apiPost,
   apiPut,
   apiDelete
}