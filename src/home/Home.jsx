import React from 'react'
import ContatoEndereco from './contatoEndereco/ContatoEndereco'


const Home = () => {
  return (
    <main>
      <div className='imagemCarroHome'>
        <h1>Encontre o veículo <span className='destaqueVerde'>perfeito</span> para sua jornada!</h1>
        <img src="imagens\carroReact.webp" alt="" />
        <ul>
          <li>100% confiavel</li>
          <li>Preços acessíveis</li>
          <li>Suporte 24h</li>
          <li>Veículos revisados e confiaveis</li>
        </ul>
      </div>
      <ContatoEndereco />
    </main>
  )
}

export default Home