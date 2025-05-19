import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import FacaLogin from '../login/facaLogin'
import ModalReservar from './ModalReservar'


const Reservar = ({ logado, setLogado }) => {
  if (logado) {
    const [carros, setCarros] = useState([])
    const [modal, setModal] = useState(false)
    const [carroSelecionado, setCarroSelecionado] = useState(null)

    async function getCars() {
      const carros = await api.get('/carroslogin')
      setCarros(carros.data)
    }

    useEffect(() => {
      getCars()
    }, [])

    async function CancelarAnuncio(id) {
      await api.put(`/carroslogin/${id}`)
      getCars()
    }

    return (
      <>
        {modal && carroSelecionado && (
          <ModalReservar
            modal={modal}
            setModal={setModal}
            logado={logado}
            setLogado={setLogado}
            carro={carroSelecionado}
            atualizarLista={getCars}
          />
        )}

        {[...carros]
          .sort((a, b) => {
            if (a.status === 'disponível' && b.status !== 'disponível') return -1;
            if (a.status !== 'disponível' && b.status === 'disponível') return 1;
            return a.modelo.localeCompare(b.modelo);
          })
          .map((carro) => (
            <section className='outCardVeiculo' key={carro.id}>
              <div className='cardVeiculo'>
                <div className='divImgVeiculo'>
                  <img src={`imgVeiculos\\${carro.img}`} alt="" className='imgVeiculo' />
                </div>

                <div className='dadosVeiculos'>
                  <div className='nomeVeiculo'>
                    <h1>{carro.modelo} <span>{carro.marca} | R${carro.diaria} | {carro.categoria}</span></h1>
                  </div>
                  <ul className='infosVeiculo'>
                    <li>Ano: {carro.ano}</li>
                    <li>Cor: {carro.cor}</li>
                    <li>Motor: {carro.motor}</li>
                    <li>Status: <span className={carro.status === 'disponível' ? 'veiculoDisponivel' : 'veiculoIndisponivel'}>{carro.status}</span></li>
                  </ul>
                </div>
                <div className='divBtnReservar'>
                  <button className='btnReservar' onClick={() => { setCarroSelecionado(carro); setModal(true); }}>
                    Editar anúncio
                  </button>
                  <button className='btnReservar' onClick={() => CancelarAnuncio(carro.id)}>
                    {carro.status === "disponível" ? 'Cancelar anúncio' : 'Reativar anúncio'}
                  </button>
                </div>
              </div>
            </section>
          ))}
      </>
    )
  } else {
    return <FacaLogin />
  }
}

export default Reservar