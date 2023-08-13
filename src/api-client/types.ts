import { AxiosError, AxiosResponse } from "axios";

type PostPayload = string | Record<string, any> | URLSearchParams | FormData | File | Blob | null | undefined;
type GetParams = string | Record<string, any> | URLSearchParams | null | undefined;
type HttpHeaders = Record<string, string> | undefined;

/**
 * You can pass types for AxiosResponse and AxiosError for better typings, 
 * but this is a lot of additional work. Also, promises inherit same type
 * for resolved and rejected values, so you better stick to default
 * <any, any, any> types, and pass types in handlers. You can check
 * that types don't inherit in Login/index.tsx handler #4 in reject.
 */
type GetFunction<Ok = any, Err = any, Conf = any> = (
    url: string,
    params?: GetParams,
    headers?: HttpHeaders
) => Promise<AxiosResponse<Ok, Conf> | AxiosError<Err, Conf>>;

type PostFunction<Ok = any, Err = any, Conf = any> = (
    data: PostPayload,
    headers?: HttpHeaders
) => Promise<AxiosResponse<Ok, Conf> | AxiosError<Err, Conf>>;

type PostUrlFunction<Ok = any, Err = any, Conf = any> = (
    url: string,
    data: PostPayload,
    headers?: HttpHeaders
) => Promise<AxiosResponse<Ok, Conf> | AxiosError<Err, Conf>>;

// I'd use this
// type PostFunction = (data: PostPayload, headers?: HttpHeaders) => Promise<AxiosResponse|AxiosError>;

export { PostPayload, GetParams, HttpHeaders, GetFunction, PostUrlFunction, PostFunction };