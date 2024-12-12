import HeaderLogado from "@/components/header.logado";
import React, {useState} from "react";
import Image from "next/image";
import { Comentario } from "../api/types";

const AvaliacaoComComentario = () => {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [loading, setLoading] = useState(true);
    const [showComentarios, setShowComentarios] = useState(false);

    const fetchComentarios = async () => {
        try {
          setLoading(true); 
          const response = await fetch("http://localhost:3333/comentarios");
          if (response.ok) {
            const data: Comentario[] = await response.json();
            setComentarios(data);
          } else {
            console.log("Erro");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
      const handleShowComentarios = () => {
        if (!showComentarios && comentarios.length === 0) {
          fetchComentarios(); 
        }
        setShowComentarios((prev) => !prev);
      };

      
  return (
    <div>
      <HeaderLogado />
      <div className="min-h-screen bg-corFundo flex justify-center">
        <div className="w-full max-w-md h-full min-h-screen bg-white rounded-xl shadow-md overflow-hidden p-8">
          <div className="bg-corModal p-4 border rounded-xl">
            <div className="flex flex-rows items-center gap-2 mb-2">
                <Image src='/morty.png' alt='' width={30} height={40}/>  
                <h2 className="text-lg font-bold text-black">Morty Gamer</h2>
            </div>
            <p className="text-sm text-black">
              08/04/2024, às 21:42 - Homer Simpson · Engenharia Química
            </p>
            <p className="mt-2 text-black">
              Professor bacana. Adoro quando falta!
            </p>
            <div className="mt-3">
            <button
                onClick={handleShowComentarios}
                className="text-blue-500 underline"
              >
                {showComentarios
                  ? "Esconder comentários"
                  : `Ver ${
                      loading
                        ? "..." 
                        : comentarios.length === 1
                        ? "1 comentário"
                        : `${comentarios.length} comentários`
                    }`}
              </button>
            </div>
            
          </div>

          {showComentarios && (
            <div className="bg-green-200 p-6 border-t mx-4 flex flex-col gap-6">
              {loading ? (
                <p>Carregando comentários...</p>
              ) : comentarios.length > 0 ? (
                comentarios.map((comentario) => (
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
                        {new Date(comentario.createdAt).toLocaleString("pt-BR")}
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
      </div>
    </div>
  );
};

export default AvaliacaoComComentario;
        

