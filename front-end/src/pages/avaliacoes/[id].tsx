import HeaderLogado from "@/components/header.logado";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Comentario, Avaliacao, CreateComentario } from "../api/types";
import axios from "axios";
import Link from "next/link";
import { Modal } from "@/components/modal";
import { postComentario } from "@/utils/api";

const Avaliacoes = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
      function handleOpenModal(){
        setModalIsOpen(!modalIsOpen)
      }
  const router = useRouter();
  const { id } = router.query;
  const [comentarios, setComentarios] = useState<Record<number, Comentario[]>>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [loadingAvaliacoes, setLoadingAvaliacoes] = useState(true);
  const [showComentarios, setShowComentarios] = useState<
    Record<number, boolean>
  >({});
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
const [comentariocriado, setComentar] = useState<CreateComentario>(
    {
      userID: 7, //fixo no leo pele, depois mudar para o id do usuario logado. mudar na linha 191 tmb
      avaliacaoID: 24,
      conteudo: ''
      
    }
    
   
  );
  const criaComentario = async (avaliacaoID: number,userID: number) => {
    try {
      
      const comentar = {
        ...comentariocriado,
        userID:userID,
        avaliacaoID: avaliacaoID,
        
      };
  
      await postComentario(comentar);
      console.log('Comentário postado:', comentar);
     
  
    } catch  {
      console.log('deu zebra')
    }
  };
  const fetchAvaliacoes = async () => {
    try {
      setLoadingAvaliacoes(true);
      console.log(id);
      const response = await axios.get(
        `http://localhost:3333/avaliacao/${id}`
      );
      console.log(response.data);
      setAvaliacoes([response.data]);
      console.log(avaliacoes)
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAvaliacoes(false);
    }
  };

  const fetchComentarios = async (avaliacaoId: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3333/comentarios/avaliacao/${avaliacaoId}`
      );
      
      setComentarios((prev) => ({
        ...prev,
        [avaliacaoId]: response.data,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowComentarios = (avaliacaoId: number) => {
    if (!showComentarios[avaliacaoId]) {
      fetchComentarios(avaliacaoId);
    }
    setShowComentarios((prev) => ({
      ...prev,
      [avaliacaoId]: !prev[avaliacaoId],
    }));
  };

  useEffect(() => {
    if (id) {
        fetchAvaliacoes();
      }
  }, [id]);

  return (
    <div>
      <HeaderLogado />
      <div className="min-h-screen bg-corFundo flex justify-center">
        <div className="w-full max-w-md h-full min-h-screen bg-white rounded-xl shadow-md overflow-hidden p-8">
          {loadingAvaliacoes ? (
            <p>Carregando avaliações...</p>
          ) : avaliacoes.length > 0 ? (
           avaliacoes.map((avaliacao) => (
            console.log(avaliacao.user?.nome,'ok'),
                
              <div
                key={avaliacao.id}
                className="bg-corModal p-4 border rounded-xl mb-4"
              >
                <div className="flex flex-rows items-center gap-2 mb-2">
                  <Image src="/perfil.png" alt="" width={30} height={40} />
                  <h2 className="text-lg font-bold text-black">
                   
                  <Link href={`/user/${avaliacao.userID}`}>{avaliacao.user?.nome}</Link>
                  </h2>
                </div>
                <p className="text-sm text-black">
                  {new Date(avaliacao.createdAt).toLocaleString("pt-BR")}
                </p>
                <p className="mt-2 text-black">{avaliacao.conteudo}</p>
                <div className="mt-3">
                  <button
                    onClick={() => handleShowComentarios(avaliacao.id)}
                    className="text-blue-500 underline"
                  >
                    {showComentarios[avaliacao.id]
                      ? "Esconder comentários"
                      : "Ver comentários"}
                  </button>
                </div>

                {showComentarios[avaliacao.id] && (
                  <div className="bg-green-200 p-6 border-t mx-4 flex flex-col gap-6">
                    {loading ? (
                      <p>Carregando comentários...</p>
                    ) : comentarios[avaliacao.id]?.length > 0 ? (
                      comentarios[avaliacao.id].map((comentario) => (
                        <div key={comentario.id} className="mb-2">
                          <div className="flex flex-rows items-center gap-2 mb-1">
                            <Image
                              src="/perfil.png"
                              alt=""
                              width={20}
                              height={30}
                            />
                            <p className="text-sm font-bold text-black">
                              <Link href={`/user/${comentario.userID}`}>{comentario.user?.nome} -{" "}</Link>
                              {new Date(comentario.createdAt).toLocaleString(
                                "pt-BR"
                              )}
                            </p>
                          </div>
                          <p className="text-black">{comentario.conteudo}</p>
                          <hr className="border-corHr w-full mt-4" />
                        </div>
                        
                      ))
                    
                    ) : (
                      <p>Nenhum comentário disponível.</p>
                    )}
                  </div>
                  
                )}
               <div className="flex items-center justify-center"><button
              className="flex items-center justify-center w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-500 transition-all" onClick={handleOpenModal}>
            Comentar</button></div>
                <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
                <div className='mb-6 border-b border-green-300 py-7 text-center'>
                              <div className='mt-3'>
                                <h2 className='text-3xl font-semibold text-white'>Adicionar comentario</h2>
                              </div>
                            </div>
                            <textarea className='bg-green-100 px-4 py-3 flex flex-center items-center rounded-md justify-center w-full h-60 transition-all'
                              placeholder='Escreva aqui'
                              value={comentariocriado.conteudo}
                          onChange={(e) => setComentar({...comentariocriado,conteudo:e.target.value})}
                              ></textarea>
                            <div className='flex justify-center'>
                              <button className="flex justify-center w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-400 transition-all" onClick={()=> criaComentario(Number(id),7)}>Enviar</button>
                            </div>
                </Modal>
                
              </div>
              
            ))
          ) : (
            <p>Nenhuma avaliação disponível.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;