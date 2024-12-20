import { Avaliacao, CreateComentario, CreateUser, editAvaliacao, EditUser, Professor, SendLogin, Token, User } from '@/pages/api/types';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

interface LoginRequest {
    email: string;
    senha: string;
  }
  
  interface LoginResponse {
    access_token: string;
  }

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

export const postLogin = async (data: { email: string; senha: string }) => {
    const response = await axios.post('http://localhost:3333/auth/login', data);
    return response.data;
  };
export const GetProfavaliacao = async (avaliacaoid: number): Promise<Professor> => {
    const response = await api.get(`/professor/${avaliacaoid}`);
    return response.data;
}

export const patchUser = async (user: Partial<EditUser>, id: number) => {
    const token = localStorage.getItem("token"); // Obtenha o token do localStorage ou de onde estiver salvo
    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
    } 
    const response = await api.patch(`/user/update/${id}`, {
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        departamento: user.departamento,
        curso: user.curso
    }, {headers: {
        Authorization: `Bearer ${token}`,
      },});
    
    return response.data;
}
export const deleteUser = async (id: number) => {
    const token = localStorage.getItem("token"); // Obtenha o token do localStorage ou de onde estiver salvo
    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
    } 
    await api.delete(`/user/${id}`, {headers: {
        Authorization: `Bearer ${token}`,
      },})
}
export const postComentario = async (data:CreateComentario): Promise<CreateComentario> => {
    const token = localStorage.getItem("token"); // Obtenha o token do localStorage ou de onde estiver salvo
    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
    } 
    const response = await api.post(`/comentarios/`, data, {headers: {
        Authorization: `Bearer ${token}`,
      },});
    
    return response.data;
}
export const patchAvaliacao = async (avaliacao: Partial<editAvaliacao>,id:number) =>{
    const token = localStorage.getItem("token"); // Obtenha o token do localStorage ou de onde estiver salvo
    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
    } 
        const response = await api.patch(`/avaliacao/${id}`,
            {
                conteudo: avaliacao.conteudo
            },
            {headers: {
                Authorization: `Bearer ${token}`,
              },}
        );
        return response.data;
}
export const deleteAvaliacao = async (id: number) => {
    const token = localStorage.getItem("token"); // Obtenha o token do localStorage ou de onde estiver salvo
    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
    } 
    await api.delete(`/avaliacao/${id}`, {headers: {
        Authorization: `Bearer ${token}`,
      },})
}