import React, { useState, useEffect } from "react";
import { ModalNovaPub } from "./modal.nova.publicacao.d";
import Image from "next/image";
import axios from "axios";
import { Professor, Disciplina } from "@/pages/api/types";
import { useAuth } from "@/contexts/AuthContext";

const NovaPublicacaoModal = () => {
  const { user } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [professores, setProfessores] = useState<Professor[]>([]);
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [conteudo, setConteudo] = useState("");
  

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await axios.get("http://localhost:3333/professor");
        setProfessores(response.data);
      } catch (error) {
        console.error("erro:", error);
      }
    };

    const fetchDisciplinas = async () => {
      try {
        const response = await axios.get("http://localhost:3333/disciplina");
        setDisciplinas(response.data);
      } catch (error) {
        console.error("erro:", error);
      }
    };

    fetchProfessores();
    fetchDisciplinas();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Obtenha o token do localStorage ou de onde estiver salvo
      if (!token) {
        alert("Você não está autenticado. Faça login para continuar.");
        return;
      }
      if (!user) {
        alert("Informações do usuário não disponíveis. Faça login novamente.");
        return;
      }
      console.log("User ID:", user.id);
      const submitData = {
        userID: user.id,
        professorID: Number(selectedProfessor),
        disciplinaID: Number(selectedDisciplina),
        conteudo,
      };

      console.log("Dados enviados:", submitData);

      await axios.post("http://localhost:3333/avaliacao", submitData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Publicação enviada com sucesso!");
      setConteudo("");
      setSelectedProfessor("");
      setSelectedDisciplina("");
      setModalIsOpen(false);
    } catch (error) {
      if (error.response?.status === 401) {
        alert("erro de autenticação. (ERRO 401) ");
      } else {
        console.error("outro erro que nao é o 401: ", error);
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpenModal}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 mr-2 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl w-44"
      >
        Nova Publicação
      </button>

      <ModalNovaPub isOpen={modalIsOpen} onClose={handleOpenModal}>
        <div className="flex flex-col">
          <select
            className="w-full px-4 py-2 my-2 border rounded-xl"
            value={selectedProfessor}
            onChange={ (e) => setSelectedProfessor(e.target.value)}
          >
            <option value="" disabled selected>
              Nome do Professor
            </option>
            {professores.map((professor) => (
              <option key={professor.id} value={professor.id}>
                {professor.nome}
              </option>
            ))}
          </select>
          <select
            className="w-full px-4 py-2 my-4 border rounded-xl"
            value={selectedDisciplina}
            onChange={ (e) => setSelectedDisciplina(e.target.value)}
          >
            <option value="" disabled selected>
              Disciplina
            </option>
            {disciplinas.map((disciplina) => (
              <option key={disciplina.id} value={disciplina.id}>
                {disciplina.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-md rounded-b-none flex items-center gap-2 py-4 px-4 mt-4 bg-corTextAreaModal w-full h-4 transition-all">
          <button>
            <Image
              src="/nova_publicacao/Vector.png"
              alt="B"
              width={18}
              height={18}
            />
          </button>
          <button>
            <Image
              src="/nova_publicacao/italic.png"
              alt="I"
              width={20}
              height={18}
            />
          </button>
          <button>
            <Image
              src="/nova_publicacao/vector_h.png"
              alt="H"
              width={18}
              height={18}
            />
          </button>
          <button>
            <Image
              src="/nova_publicacao/link.png"
              alt="link"
              width={18}
              height={18}
            />
          </button>
          <button>
            <Image
              src="/nova_publicacao/vector_img.png"
              alt="img"
              width={18}
              height={18}
            />
          </button>
          <button>
            <Image
              src="/nova_publicacao/question-circle.png"
              alt="question-mark"
              width={18}
              height={18}
            />
          </button>
        </div>

        <div className="flex items-center bg-corTextAreaModal w-full ">
          <hr className="border-corHr w-full" />
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            className="rounded-md rounded-t-none py-3 px-4 mt-0 bg-corTextAreaModal flex flex-center items-center justify-center w-full h-60 transition-all"
            placeholder="Escreva aqui"
            value={conteudo}
            onChange={ (e) => setConteudo(e.target.value)}
          ></textarea>

          <div className="flex flex-rows justify-end">
            <button
              type="submit"
              className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 my-4 border-white border-2 rounded-xl hover:bg-blue-500 transition-all"
            >
              Enviar
            </button>
          </div>
        </form>
      </ModalNovaPub>
    </div>
  );
};

export default NovaPublicacaoModal;
