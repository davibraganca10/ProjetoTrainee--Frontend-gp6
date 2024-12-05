import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})


const getUser = async() => {
    await api.get("/user/");
}