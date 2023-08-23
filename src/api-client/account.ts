import { baseGet, basePost } from "api-client";

import { GetFunction, PostUrlFunction, PostFunction } from "./types";

/**
 * You can define custom types for responses, but you
 * need to use them all the way down the latest
 * callback.
 */
type LoginErrorPayload = {
    Login: string
};

type LoginFunc = PostFunction<any, LoginErrorPayload, any>;

const get: GetFunction = (url, params = undefined, headers = undefined) => {
    if (url[0] === "/") url = url.slice(1);
    return baseGet(`/Account/${url}`, params, headers);
}

const post: PostUrlFunction = (url, data = undefined, headers = undefined) => {
    if (url[0] === "/") url = url.slice(1);
    return basePost(`/Account/${url}`, data, headers);
}

const login: LoginFunc = (data, headers = undefined) => {
    return basePost(`/Account/Login`, data, headers);
}

export {
    get, post, login,
    LoginErrorPayload
}