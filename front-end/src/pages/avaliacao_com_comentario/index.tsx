import HeaderLogado from "@/components/header.logado";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { Comentario } from "../api/types";

const AvaliacaoComComentario = () => {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch("http://localhost:3333/comentarios");
        if (response) {
            const data: Comentario[] = await response.json();
            setComentarios(data);
            setLoading(false);
        }

      } catch (error) {
        console.error(error);
      }
    }
    if (loading){
        fetchComentarios();    
    }
  });
      
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
              <p className="text-sm text-gray-700">{comentarios.length === 1 ? '1 comentário' : `${comentarios.length} comentários`}</p>
            </div>
          </div>

          <div className="bg-green-200 p-6 border-t mx-4 flex flex-col gap-6">
            {comentarios.map((comentario) => (
              <div key={comentario.id} className="mb-2">
                <div className="flex flex-rows items-center gap-2 mb-1">
                  <Image
                    src='/perfil.png'
                    alt=""
                    width={20}
                    height={30}
                  />
                  <p className="text-sm font-bold text-black">
                    {comentario.user.nome} - {new Date(comentario.createdAt).toLocaleString("pt-BR")}
                  </p>
                </div>
                <p className="text-black">{comentario.conteudo}</p>
                <hr className="border-corHr w-full mt-4" />
              </div>
            ))}
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvaliacaoComComentario;
