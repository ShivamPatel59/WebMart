import axios from "axios";

export const register = async (name, email, password) => {
    const req = await axios.post(`http://localhost:4000/api/v1/register`, {name, email, password}, {withCredentials: true})
    return req.data
}

export const login = async (email, password) => {
    const req = await axios.post(`http://localhost:4000/api/v1/login`, {email, password}, {withCredentials: true})
    return req.data
}

export const loadUser = async () => {
    const req = await axios.get(`http://localhost:4000/api/v1/me`, {withCredentials: true})
    return req.data
}

export const logout = async () => {
    const req = await axios.post(`http://localhost:4000/api/v1/logout`, {withCredentials: true})
    return req.data
}

export const addToCart = async (orderItems) => {
    console.log(orderItems)
    const req = await axios.post(`http://localhost:4000/api/v1/order/new`, {orderItems}, {withCredentials: true})
    console.log(req.data)
    return req.data
}

export const getCartItems = async () => {
    const req = await axios.get(`http://localhost:4000/api/v1/orders/me`, {withCredentials: true})
    console.log(req.data)
    return req.data
}

export const removeCartItem = async (id) => {
    const req = await axios.delete(`http://localhost:4000/api/v1/order/remove/${id}`, {withCredentials: true})
    return req.data
}

