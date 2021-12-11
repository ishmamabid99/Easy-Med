import axios from './axios'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

const token = Cookies.get('access')
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
export const updateRes = async (data) => {
    const cookie = jwt_decode(token);
    const res = await axios.post('/updateres', { data: data, _id: cookie._id }, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
    if (res.status === 200 && res) {
        return res;
    }
    else {
        return false;
    }
}
export const updateProfile = async (file) => {
    const cookie = jwt_decode(token)
    const formData = new FormData();
    formData.append('articleImage', file);
    formData.append('_id', cookie._id);
    const res = await axios.post('/updateProfile', formData, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200 && res) {
        return true;
    }
    else {
        return false
    }
}
export const postProduct = async (data) => {
    const res = await axios.post('/postproduct', data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return res;
    }
    else {
        return false;
    }
}
export const updateProduct = async (file, _id) => {
    const formData = new FormData();
    const cookie = jwt_decode(token);
    formData.append('articleImage', file);
    formData.append('_id', _id);
    const res = await axios.post('/updateproduct', formData, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200 && res) {
        return true;
    }
    else {
        return false
    }
}
export const postLocalOrder = async (data) => {
    console.log(data)
    const res = await axios.post('/postlocalorder', { data: data }, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res.status === 200) {
        return true
    }
    else {
        return false;
    }

}
export const updateInventory = async (data) => {

    const res = await axios.post('/updateinventory', { data: data }, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res.status === 200) {
        return true;
    }
    else {
        return false;
    }
}
export const deleteOrder = async (data) => {
    const res = await axios.post('/deleteorder', { data: data }, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return res.data
    }
    else {
        return false
    }
}
export const addToLocal = async (data) => {
    const decode = jwt_decode(token)
    const newData = {
        buyer: data.buyer,
        img: data.img,
        price: data.price,
        productId: data.productId,
        quantity: data.quantity,
        seller: data.seller,
        my_id: decode._id
    }
    const res = await axios.post('/addtolocal', { data: newData }, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return res.data;
    }
    else {
        return false
    }
}
export const getMarketData = async (data) => {
    console.log(data)
    const res = await axios.post('/getusermarket', { data: data }, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (res.status === 200) {
        return res.data;
    }
    else {
        return false
    }
}
export const postUserOrder = async (data) => {
    console.log(data)
    const res = await axios.post('/postuserorder', { data: data }, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    if (res.status === 200) {
        return true
    }
    else {
        return false;
    }
}