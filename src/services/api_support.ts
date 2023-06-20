import axios from 'axios';

export const getSupports = (host: string, params?: any) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            Accept: 'application/json',
            Authorization: ''
        },
        params: {}
    };
    if (params) {
        requestOptions.params = params;
    }
    return apiSupportRequest(host, requestOptions);
};

async function apiSupportRequest(host: string, requestOptions: any) {
    requestOptions.url = host;

    const request = await axios(requestOptions);

    if (!request) {
        throw Error('No response');
    }

    return request;
}
