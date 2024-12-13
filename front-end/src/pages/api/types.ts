export type Professor = {
  id: number;
  nome: string;
  departamento: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Disciplina = {
  id: number;
  nome: string;
  professoresID: string;
  createdAt: Date;
  updatedAt: Date;
}

export type User = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  departamento: string;
  curso: string;
  createdAt: string;
  updatedAt: Date;
};

export type Avaliacao = {
  id: number;
  userID: number;
  conteudo: string;
  createdAt: string;
  updatedAt: string;
  user: {
    nome: string;
  };
};

export type CreateUser = {
  nome: string;
  email: string;
  senha: string;
  departamento: string;
  curso: string;
};

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
};
