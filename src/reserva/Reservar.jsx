import React, {useState, useEffect} from 'react'
import api from '../../services/api'

const Reservar = ({ logado, setLogado }) => {
  const [carros, setCarros] = useState([])
  async function getCars() {
    const carros = await api.get('/carros')

    setCarros(carros.data)
  }
useEffect(() => {
  getCars()
}, [])

function alerta(id){
  alert(id)
}
const [modal, setModal] = React.useState(false)

  return (
    <>
      {[...carros]
        .sort((a, b) => {
          if (a.status === 'disponível' && b.status !== 'disponível') return -1;
          if (a.status !== 'disponível' && b.status === 'disponível') return 1;

          return a.modelo.localeCompare(b.modelo);
        })
        .map(({ id, marca, modelo, categoria, ano, cor, diaria, motor, img, status }) => (
          <section className='outCardVeiculo' key={id}>
            <div className='cardVeiculo'>
              <div className='divImgVeiculo'>
                <img src={`imgVeiculos\\${img}`} alt="" className='imgVeiculo' />
              </div>

              <div className='dadosVeiculos'>
                <div className='nomeVeiculo'>
                  <h1>{modelo} <span>{marca} | R${diaria} | {categoria}</span></h1>
                </div>
                <ul className='infosVeiculo'>
                  <li>Ano: {ano}</li>
                  <li>Cor: {cor}</li>
                  <li>Motor: {motor}</li>
                </ul>
              </div>
            </div>
          </section>
        ))}
    </>
  )
}

export default Reservar