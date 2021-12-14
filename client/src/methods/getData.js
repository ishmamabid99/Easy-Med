import Cookies from 'js-cookie';
import axios from './axios'
import jwt_decode from 'jwt-decode'
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
export const getInfo = async (_id) => {
    const token = Cookies.get('access')
    const res = await axios.get(`/getinfo/${_id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res) {
        return res;
    }
    else {
        return false;
    }
}
export const getInventory = async () => {
    const token = Cookies.get('access')
    const decode = jwt_decode(token)
    const res = await axios.get(`/getinventory/${decode._id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res) {
        return res;
    }
    else {
        return false;
    }
}
export const getMarketinfo = async () => {
    const token = Cookies.get('access');
    const res = await axios.get('/getmarketinfo', {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res.status === 200) {
        return res.data
    }
    else {
        return null;
    }
}
export const getOrderDataLarge = async () => {
    const token = Cookies.get('access');
    const decode = jwt_decode(token);
    const res = await axios.get(`/getlargeorder/${decode._id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res.status === 200) {
        return res;
    }
    else {
        return null
    }
}
export const getAllOrg = async () => {
    const token = Cookies.get('access');
    const res = await axios.get('/getallorg', {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return res.data;
    }
    else return null;
}
export const getAllUser = async () => {
    const token = Cookies.get('access');
    const res = await axios.get('/getalluser', {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) return res.data;
    else return null;
}
export const deleteOrg = async (data) => {
    const token = Cookies.get('access');
    const res = await axios.get('/deleteorg/' + data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return true;
    }
    else return null
}
export const getAllUserData = async () => {
    const token = Cookies.get('access');
    const res = await axios.get('/getalluser', {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return res;
    }
    else return null;
}
export const deleteUser = async (data) => {
    const token = Cookies.get('access');
    const res = await axios.get('/deleteuser/' + data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return true;
    }
    else return null
}