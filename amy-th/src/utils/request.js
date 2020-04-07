import axios from "axios";
import { Toast } from "@nutui/nutui";

const service = axios.create({
    // baseURL: "/web", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers["Authorization"] = localStorage.getItem("t_token");
        return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res && res.code != 200) {
            Toast.text("请求异常" + res.msg);
            return Promise.reject(new Error(res.msg || "Error"));
        } else {
            console.debug("data response", res)
            return res;
        }
    },
    error => {
        console.log("err" + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
