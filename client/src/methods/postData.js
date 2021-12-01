import axios from './axios'

export const addOrganization = async (data) => {
    const res = await axios.post('/addOrganization', { data: data });
    if (res.status === 200) {
        return true;
    }
    else return false;
}
export const addUser = async (data) => {
    const res = await axios.post('/addUser', { data: data });
    if (res.status === 200) {
        return true;
    }
    else return false;
}
export const loginUser = async (data) => {
    const res = await axios.post('/login', { data: data });
    if (res.status === 200 && res) {
        return res
    }
    else {
        return false
    }
}