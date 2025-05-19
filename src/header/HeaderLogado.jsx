import React from 'react'
import Modal from './Modal'

const Header = ({logado, setLogado}) => {

  const [modal, setModal] = React.useState(false)
  return (
    <header>

      <p className='empresa'><a href="home">Fórmula Motors</a></p>
      <ul className='listaLinksHeader'>
        <li><a href="reservarlogado">Veículos</a></li>
        <li><a href="cadastroveiculo">Cadastrar Veículo</a></li>
        <li><button className='btnLogado' onClick={() => setModal(true)}>logado</button></li>
      </ul>
      <Modal modal={modal} setModal={setModal} logado={logado} setLogado={setLogado}/>
    </header>
  )
}

export default Header