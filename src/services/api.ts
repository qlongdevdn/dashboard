import axios from 'axios';
// import { get } from 'lodash';
// import Swal from 'sweetalert2';
import { NETWORK_ERROR_ENUM } from '../enum/index';
import { auth } from './../utils/auth';
// import { errorMessageAlert } from './notification';

const DOMAIN_API = import.meta.env.VITE_DOMAIN_API;
export default class APIService {
    constructor() {
        axios.defaults.baseURL = `${DOMAIN_API}`;
        this.setCommonHeader();
        this.setInterceptors();
    }

    setCommonHeader() {
        axios.defaults.withCredentials = false;
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
    }

    setInterceptors() {
        axios.interceptors.request.use(
            (request: any) => {
                // GET TOKEN FROM LOCAL STORAGE
                // let token = localStorage.getItem("user")
                const local = auth.get();
                const token = local?.access_token;
                if (token && request && request.headers) {
                    request.headers['Authorization'] = `Bearer ${token}`;
                }
                return request;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            (response: any) => response,
            (error: any) => {
                const { response } = error;
                // console.log(error.response.data.error);

                // handle error
                if (response && response?.status === NETWORK_ERROR_ENUM.UNAUTHORIZED) {
                    localStorage.removeItem('ACCESS-TOKEN');

                    // location.reload();
                    // Swal.fire('You need to sign in with your account');
                    return Promise.reject(error);
                }

                // if (response && response?.status === NETWORK_ERROR_ENUM.PERMISSION) {
                // 	Swal.fire("You don't have a permission. Please contact adminstrator to get more response");
                // 	return Promise.reject(error);
                // }

                if (response && response?.status === NETWORK_ERROR_ENUM.BAD_REQUEST) {
                    // const errorMessage = get(response, 'data.error.message');
                    // errorMessageAlert({
                    // 	errorMessage,
                    // });
                    return Promise.reject(error);
                }

                return Promise.reject(error);

                // RETRY GET TOKEN IF 401
                // if (response.status === 401 && response.config && !response.config.__isRetryRequest) {
                //   return new Promise((resolve, reject) => {
                //     refreshLogin(getRefreshToken(),
                //       (success: any) => {
                //         setTokens(success.access_token, success.refresh_token)
                //         error.config.__isRetryRequest = true
                //         error.config.headers.Authorization = 'Bearer ' + getAccessToken()
                //         resolve(axios(error.config))
                //       },
                //       (error: any) => {
                //         console.log('Refresh login error: ', error)
                //         reject(error)
                //       }
                //     )
                //   });
                // }
            }
        );
    }

    // createURL(uri: string | any) {
    // 	let paramsUrl: any = '';
    // 	if (typeof uri[uri.length - 1] !== 'string') {
    // 		paramsUrl = uri.pop();
    // 		let url = uri.join('/');
    // 		Object.keys(paramsUrl).forEach((x) => {
    // 			const tempURL: string = paramsUrl && paramsUrl[x];
    // 			url = url.replace(`:${x}`, tempURL);
    // 		});

    // 		return url;
    // 	} else {
    // 		return uri.join('/');
    // 	}
    // }

    get(uri: string, options = {}) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${DOMAIN_API}${uri}`, {
                    params: options
                })
                .then((resp: any) => {
                    resolve(resp?.data);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    post(uri: string, data = {}, moreConfigs = {}) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${DOMAIN_API}${uri}`, data, moreConfigs)
                .then((resp: any) => {
                    resolve(resp.data);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    put(uri: string, data = {}, moreConfigs = {}) {
        return new Promise((resolve, reject) => {
            axios
                .put(`${DOMAIN_API}${uri}`, data, moreConfigs)
                .then((resp: any) => {
                    resolve(resp.data);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    delete(uri: string, data = {}) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`${DOMAIN_API}${uri}`, {
                    data
                })
                .then((resp: any) => {
                    resolve(resp.data);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }
}
