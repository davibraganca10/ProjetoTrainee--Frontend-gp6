    import React, { ReactNode } from 'react';
    interface Modal {
        isOpen: boolean;  
        onClose: () => void;
        children: ReactNode
    }
    export function ModalNovaPub({ isOpen, onClose, children }: Modal){  {/*função pra abrir e fechar modal*/}
    if(!isOpen) return null;

        return(
            <div className="fixed inset-0 z-50 flex items-center justify-center mx-auto max-w-3xl w-full">
                <div className="bg-corModal h-full max-h-[80vh] w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto">
                    <div className="relative z-10 h-full max-h-[680p] w-full max-w-6x1 overflow-y-auto  p-6 md:rounded-lg">{/*conteudo modal*/}
                    
                        <button
                        type='button'
                        className='absolute right-0 top-0 m-4 text-white transition-all hover:text-red-400'
                        onClick={onClose}
                        >
                            X
                        </button> 
                        <div className=''>{children}</div>
                    </div>
                </div>

            </div>
        );

    }