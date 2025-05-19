import React from 'react'
import FormCadastro from './FormCadastro'
import FacaLogin from '../login/facaLogin'

const Cadastro = ({ logado, setLogado }) => {
  if (logado) {
    return (
      <section className='outCardCadastro'>
        <div className='cardCadastro'>
          <h1>Cadastro</h1>
          <FormCadastro />
        </div>
      </section>
    )
  } else {
    return (
      <FacaLogin />
    )
  }
}

export default Cadastro