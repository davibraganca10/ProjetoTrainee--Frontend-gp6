import React, { useState } from 'react';
import { ModalNovaPub } from './modal.nova.publicacao.d';
import Image from 'next/image';

const NovaPublicacaoModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <div className="relative">

      {/* botao em si (com fundo azul e escrito nova publicacao*/}
      <button
        onClick={handleOpenModal}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 mr-2 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl w-44">
        Nova Publicação
      </button>

      <ModalNovaPub isOpen={modalIsOpen} onClose={handleOpenModal}>
        {/* <h2 className="text-white text-xl">Nova Publicação</h2> */}
        <select className='w-full px-4 py-2 my-4 border rounded-xl '>
          <option value="" disabled selected>Nome do Professor</option>
          <option value="">Professor 1</option>
          <option value="">Professor 2</option>
          <option value="">Professor 3</option>
        </select>
        <select className='w-full px-4 py-2 border rounded-xl '>
          <option value="" disabled selected>Disciplina</option>
          <option value="">Disciplina 1</option>
          <option value="">Disciplina 2</option>
          <option value="">Disciplina 3</option>
        </select>
        <div className='rounded-md rounded-b-none flex items-center gap-2 py-4 px-4 mt-4 bg-corTextAreaModal w-full h-4 transition-all'>
          <button>
          <Image src="/nova_publicacao/Vector.png" alt='B' width={18} height={18} />
          </button>
          <button>
          <Image src="/nova_publicacao/italic.png" alt='I' width={20} height={18} />
          </button>
          <button>
          <Image src="/nova_publicacao/vector_h.png" alt='H' width={18} height={18} />
          </button>
          <button>
          <Image src="/nova_publicacao/link.png" alt='link' width={18} height={18} />
          </button>
          <button>
          <Image src="/nova_publicacao/vector_img.png" alt='img' width={18} height={18} />
          </button>
          <button>
          <Image src="/nova_publicacao/question-circle.png" alt='question-mark' width={18} height={18} />
          </button>
        </div >
        <div className='flex items-center bg-corTextAreaModal w-full '>
          <hr className="border-corHr w-full" />
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault(); 
          }}>
          <textarea className='rounded-md rounded-t-none py-3 px-4 mt-0 bg-corTextAreaModal flex flex-center items-center justify-center w-full h-60 transition-all'
            placeholder='Escreva aqui'>
          </textarea>
          <div className='flex flex-rows justify-end'>
          <button
            type="submit"
            className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 my-4 border-white border-2 rounded-xl hover:bg-blue-500 transition-all">
            Enviar
          </button>
          </div>
        </form>
        
        
        
        
      </ModalNovaPub>
    </div>
  );
};

export default NovaPublicacaoModal;