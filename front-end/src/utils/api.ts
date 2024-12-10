import { Avaliação, User } from '@/pages/api/types';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})



export const getUser = async (id: number): Promise<User> => {
    const response = await api.get(`/user/${id}`);
    return response.data;
}
  
export const getAvaliação = async (userid:number): Promise<Avaliação[]> => {
    const response = await api.get(`/avaliacao/${userid}`);
    return response.data;
}
