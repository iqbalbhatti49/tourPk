import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { logoutUser } from '../app/features/user/userSlice';

const isTokenExpired = (token) => {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Get current time in seconds
    return decodedToken.exp < currentTime;
};
//  to check token expiration
const tokenExpirationMiddleware = (store) => (next) => (action) => {
    const token = store.getState().user.token; // TODO : Change this to get token from state ****************

    if (token && isTokenExpired(token)) {
        // Token has expired, Clear the token from the state and the authorization header
        store.dispatch(logoutUser());
        return;
    }
    return next(action);
};

export const Api = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

//add token expiration check middleware to the Axios instance so that it is applied to all requests before making Api calls
Api.interceptors.request.use(tokenExpirationMiddleware(Api));

//send token(if exists) in the Authorization header of every request
export const setAuthToken = (token) => {
    if (token) {
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete Api.defaults.headers.common['Authorization'];
    }
};
