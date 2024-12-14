import { Avaliacao, CreateUser, User } from '@/pages/api/types';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})



export const getUser = async (id: number): Promise<User> => {
    const response = await api.get(`/user/${id}`);
    return response.data;
}
  
export const getAvaliação = async (userid:number): Promise<Avaliacao[]> => {
    const response = await api.get(`/avaliacao/${userid}`);
    return response.data;
}

export const postUsuario = async (data:CreateUser): Promise<User> => {
    const response = await api.post(`/user/`, data);
    return response.data;
}
