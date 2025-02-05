import axios from '../lib/axios'
// const controller = new AbortController();

// const baseUrl = '/tasks'
// const session = await getSession()
// axios.defaults.headers.common['Authorization'] = `Bearer ${session?.user.token}`;
// axios.interceptors.response.use( function (response) {
//     return response;
//   }, async function (error) {
//     if(error?.response?.status===401){
//         controller.abort()
//         await signOut({redirect: false})
//     }
//     return Promise.reject(error);
// });

async function getAll(Url) {
    return await axios.get(Url)
}

// async function getById(id) {
//     return await axios.get(`${baseUrl}/${id}`);
// }

async function create(Url, data) {
    return await axios.post(`${Url}`, data);
}

async function update(Url, params) {
        return await axios.put(`${Url}`, params);
}
async function updatePatch(Url, params) {
        return await axios.patch(`${Url}`, params);
}

async function post(Url, data) {
        return await axios.post(`${Url}`, data);
}

async function _delete(Url, data = null) {
    if (data) {
        return await axios.delete(`${Url}`, {data: data});
    } else {
        return await axios.delete(`${Url}`);
    }
}

export const globalServices = {getAll, post, create, update, updatePatch, delete: _delete}

