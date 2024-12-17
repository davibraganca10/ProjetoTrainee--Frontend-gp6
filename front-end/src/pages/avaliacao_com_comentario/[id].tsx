import HeaderLogado from "@/components/header.logado";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Comentario, Avaliacao } from "../api/types";
import axios from "axios";

const AvaliacaoComComentario = () => {
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

  const fetchAvaliacoes = async () => {
    try {
      setLoadingAvaliacoes(true);
      const response = await axios.get(
        `http://localhost:3333/avaliacao/professor?professorID=${id}`
      );
      setAvaliacoes(response.data);
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
              <div
                key={avaliacao.id}
                className="bg-corModal p-4 border rounded-xl mb-4"
              >
                <div className="flex flex-rows items-center gap-2 mb-2">
                  <Image src="/perfil.png" alt="" width={30} height={40} />
                  <h2 className="text-lg font-bold text-black">
                    {avaliacao.user.nome}
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
                              {comentario.user.nome} -{" "}
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

export default AvaliacaoComComentario;
