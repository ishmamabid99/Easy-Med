import axios from './axios'


export const checkState = async (token) => {
    if (token) {
        const res = await axios.get('/app', {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        if (res) {
            return true;
        }
        else return false
    }
    else return false
}
export const checkRegistration = async (email) => {
    const res = await axios.get(`/check/${email}`);
    if (res.data) {
        return true;
    }
    else return false
}