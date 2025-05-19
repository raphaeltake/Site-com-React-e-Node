import React from 'react'
import FormCadastroReserva from './FormEditarVeiculos'

const ModalReservar = ({ modal, setModal, logado, setLogado, carro, atualizarLista }) => {
  if (!modal) return null;

  return (
    <div className="modalVeiculos">
      <div className="headerEditar">
      <button onClick={() => setModal(false)}>Fechar</button>
        <h2>Editar veículo</h2>
      </div>
      <FormCadastroReserva carro={carro} fecharModal={() => setModal(false)} atualizarLista={atualizarLista} />
    </div>
  )
}

export default ModalReservar
