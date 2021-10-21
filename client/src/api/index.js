import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getList = () => api.get('/');
export function createItem(note) {
    api.post('/', note)
    console.log(note)
};
export const deleteItem = id => api.delete('/delete')


const apis = {
    getList,
    createItem,
    deleteItem
}

export default apis