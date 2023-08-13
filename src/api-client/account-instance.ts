import { instance, baseInterceptor } from "api-client";

import { GetFunction, PostUrlFunction, PostFunction } from "./types";

type LoginErrorPayload = {
    Login: string
};

type LoginFunc = PostFunction<any, LoginErrorPayload, any>;

/**
 * You can also copy base instance as instance.create({}) and inherit 
 * and overwrite parameters, but typescript throws error. 
 * This is useful for using different interceptors, 
 * but you might want to remove previous ones.
 */

// @ts-ignore
const account = instance.create({
    baseURL: "/api/Account"
});
// removes interceptor in new instance, but not in base one
account.interceptors.response.eject(baseInterceptor);

const get: GetFunction = (url, params = undefined, headers = undefined) => {
    if (url[0] === "/") url = url.slice(1);
    return account.get(url, params, headers);
}

const post: PostUrlFunction = (url, data = undefined, headers = undefined) => {
    if (url[0] === "/") url = url.slice(1);
    return account.post(url, data, headers);
}

const login: LoginFunc = (data, headers = undefined) => {
    return account.post(`/Login`, data, headers);
}

export {
    get, post, login
}