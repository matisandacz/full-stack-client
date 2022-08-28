import axios from 'axios'
const baseUrl = '/api/notes'

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const create = async note => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, note, config)
    return response.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const deleteNote = async (id) => {
    const url = `${baseUrl}/${id}`
    const response = await axios.delete(url);
    return response.data
}

const makeImportant = async (id, note) => {
    const url = `${baseUrl}/${id}`
    const response = await axios.put(url, note);
    return response.data;
}

export default {setToken, create, getAll, deleteNote, makeImportant}