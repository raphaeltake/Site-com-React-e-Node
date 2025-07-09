import React from 'react'
import Contato from './Contato'
import Endereco from './Endereco'

const ContatoEndereco = () => {
  return (
    <section className='contatoEndereco'>
        <Contato />
        <Endereco />
    </section>
  )
}

export default ContatoEndereco