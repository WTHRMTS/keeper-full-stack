import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3002/api'
})

export const getList = () => api.get('/');
export const createItem = payload => api.post('/', payload);
export const deleteItem = id => api.delete('/delete')
