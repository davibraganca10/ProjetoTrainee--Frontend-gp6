import { Avaliacao, CreateUser, EditUser, SendLogin, Token, User } from '@/pages/api/types';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})



export const getUser = async (id: number): Promise<User> => {
    const response = await api.get(`/user/${id}`);
    return response.data;
}
  
export const getAvaliação = async (userid:number): Promise<Avaliacao[]> => {
    const response = await api.get(`/avaliacao/user/${userid}`);
    return response.data;
}

export const postUsuario = async (data:CreateUser): Promise<User> => {
    const response = await api.post(`/user/`, data);
    return response.data;
}

export const postLogin = async (data:SendLogin): Promise<Token> => {
    const response = await api.post(`/login/`, data);
    return response.data;
}

export const patchUser = async (user: Partial<EditUser>, id: number) => {
    const response = await api.patch(`/user/update/${id}`, {
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        departamento: user.departamento,
        curso: user.curso
    },);
    return response.data;
}
export const deleteUser = async (id: number) => {
    await api.delete(`/user/${id}`)
}