export type Professor = {
    id: number,
    nome: string,
    departamento: string,
    createdAt: Date,
    updatedAt: Date,
  }

export type User = {
    id: number,
    nome: string,
    email: string,
    senha: string,
    departamento: string,
    curso: string,
    createdAt: Date,
    updatedAt: Date,
  }
  export type Avaliação = {
    id: number,
    userID: number,
    conteudo: string,
    createdAt: Date,
    updatedAt: Date,
  }

  export type CreateUser = {
    nome: string,
    email: string,
    senha: string,
    departamento: string,
    curso: string,
  }

  export type Comentario = {
    id: number;
    userID: number;
    avaliacaoID: number;
    conteudo: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
      nome: string;
    };
  }
  