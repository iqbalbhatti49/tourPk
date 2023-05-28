import axios from 'axios'

let store

export const injectStore = _store => {
    store = _store
}
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

axiosInstance.interceptors.request.use(config => {
    config.headers.authorization = store.getState().user.token
    return config
})

export default axiosInstance
