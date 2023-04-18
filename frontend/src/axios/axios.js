import axios from "axios";

export const register = async (name, email, password) => {
    const req = await axios.post(`http://localhost:4000/api/v1/register`, {name, email, password})
    return req.data
}

export const login = async (email, password) => {
    const req = await axios.post(`http://localhost:4000/api/v1/login`, {email, password})
    return req.data
}

export const loadUser = async () => {
    const req = await axios.get(`http://localhost:4000/api/v1/me`)
    return req.data
}

export const logout = async () => {
    const req = await axios.get(`http://localhost:4000/api/v1/logout`)
    return req.data
}

