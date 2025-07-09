import React from 'react'
import FormCadastro from './FormCadastroVeiculo'
import FacaLogin from '../../login/facaLogin'

const CadastroVeiculo = ({logado, setLogado}) => {
  if(logado){
    return(
      <section className='outCardCadastro'>
        <div className='cardCadastro'>
          <h1>Cadastrar veículo</h1>
          <FormCadastro />
        </div>
      </section>
    ) 
  } else{
    return(
      <FacaLogin />
    )
  }
}

export default CadastroVeiculo