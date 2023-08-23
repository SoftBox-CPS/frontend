import axios from "axios";

import { GetFunction, PostUrlFunction } from "./types";

const instance = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-Type": "application/json"
    },
    responseType: 'json',
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },
});

const baseInterceptor = instance.interceptors.response.use(
    // 200-299
    (response) => {
        return response;
    },
    // <200, >=300
    (response) => {
        return Promise.reject(response);
    });

const baseGet: GetFunction = (url, params = undefined, headers = undefined) => {
    return instance.get(url, {
        params,
        headers
    })
}

const basePost: PostUrlFunction = (url, data = undefined, headers = undefined) => {
    return instance.post(url, data, { headers })
}

export {
    instance, baseGet, basePost,
    baseInterceptor
};