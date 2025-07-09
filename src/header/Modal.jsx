import React from 'react'
import { Link } from 'react-router'

const Modal = ({ modal, setModal, logado, setLogado }) => {

  function Logout(){
    window.location.href = '/home'
    setLogado(false)
  }

  if (modal)
    return (
      <div className='modalCard'>
        <a href="cadastro" className='btnCadastroHeader'>Cadastrar</a>
        <button onClick={Logout}>Logout</button>
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>)

  return null
}

export default Modal