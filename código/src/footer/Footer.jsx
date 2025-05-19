import React from 'react'

const Footer = () => {
  return (
    <footer>
  <table className="tabelaFooter">
    <thead>
      <tr>
        <th>Contato</th>
        <th>Endereço</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Telefone: +55 (11) 99999-9999</td>
        <td>R. Bel Aliance, 225 - Jardim São Caetano, São Caetano do Sul</td>
      </tr>
      <tr>
        <td>WhatsApp: +55 (11) 99999-9999</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <p className="direitos">© Todos os direitos reservados.</p>
</footer>

  )
}

export default Footer