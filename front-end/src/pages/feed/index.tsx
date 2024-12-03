import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeedDeslogado = () => {
  return (
    <main>
      <header className='bg-verde_unb h-20 flex items-center justify-between px-4'>
        <Link href="/feed" className='ml-3'> 
          <Image src="/unb_logo.png" alt='logo unb' width={92} height={46} layout="responsive" /> 
        </Link>

        <Link href='PAGINA DE LOGIN (FALTA FAZER)' 
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-6 py-1 mr-7 border-white border-2 rounded-xl hover:bg-blue-500 hover transition-all drop-shadow-2xl">
          Login
        </Link>
      </header>
      

      
        
    </main>
      
  )
}

export default FeedDeslogado;
