import axios from 'axios'
const API = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}
/**
 * set the base url for all the REST
 */
export const axiosInstance = axios.create({
    baseURL: 'http://kaboom.rksv.net/api/'
  });

export const makeApiCall = (url,data,method,params) => {
    switch(method){
        case API.GET:
            console.log('GET CALLED');
            return getApi(url,params);
        case API.POST:
            return postApi(url,data);
        case API.PUT:
            return putApi(url,data);
        case API.DELETE:
            return deleteApi(url,data);
            
        default:
            return getApi(url, data, params);
    }
}
export const getApi = async(url,qParams) => {
    return axiosInstance({
        'url':url,
        'params': qParams,
        'method':API.GET
    })
}

export const postApi = async(url,data) => {
    return axiosInstance({
        'url':url,
        'method':API.POST,
        'data':data
    })
}

export const putApi = async(url,data) => {
    return axiosInstance({
        'url':url,
        'method':API.PUT,
        'data':data
    })
}

export const deleteApi = async(url,data,qParams) => {
    return axiosInstance({
        'url':url,
        'method':API.DELETE,
        'data':data
    })
}