import React from 'react'

const Endereco = () => {
  return (
    <section className='endereco'>
      <h2>Nosso Endereço</h2>
        <p>R. Bel Aliance, 225 - Jardim Sao Caetano, São Caetano do Sul</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5169.090394356656!2d-46.57719047358404!3d-23.636629993772473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cb6c8baf5a7%3A0x24fb537795849cc!2sFatec%20S%C3%A3o%20Caetano%20do%20Sul%20Antonio%20Russo!5e0!3m2!1spt-BR!2sbr!4v1744655592635!5m2!1spt-BR!2sbr"
          width="300"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </section>
  )
}

export default Endereco