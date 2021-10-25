import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getList = () => api.get('/');
export const getLatest = (title) => {
    // console.log(title);
    api.get(`/${title}`)}
export const createItem = (note) => {api.post('/', note)};
export const deleteItem = (id) => {
    // console.log(id);
    api.delete(`/${id}`, { params: {_id: id} });
}


const apis = {
    getList,
    getLatest,
    createItem,
    deleteItem
}

export default apis