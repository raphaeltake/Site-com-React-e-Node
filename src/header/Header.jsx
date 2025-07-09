import React from 'react'

const Header = ({ logado, setLogado }) => {

  return (
    <header>
      <p className='empresa'><a href="home">Fórmula Motors</a></p>
      <ul className='listaLinksHeader'>
        <li><a href="reservar">Veículos</a></li>
        <li><a href='login'>Entrar</a></li>
      </ul>
    </header>
  )
}

export default Header