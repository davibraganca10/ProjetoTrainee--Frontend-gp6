import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})


export const getUsers = async() => {
    const response = await api.get("/user");
    return response.data;
}

export const CreateUser = async (user: Partial<User>) => {
    const response = await api.post("/user",{
        name: user.name,
        email: user.email
    });
    return response.data;
}

export const patchUserReq = async(user: Partial<User>, id:number) => {
    api.patch('/user${id}',user);
}