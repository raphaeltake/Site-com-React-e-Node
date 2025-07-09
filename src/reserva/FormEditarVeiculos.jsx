import React, { useRef, useEffect } from 'react'
import api from '../../services/api'

const FormCadastroReserva = ({ carro, fecharModal, atualizarLista }) => {
  const InputModelo = useRef(null)
  const InputMarca = useRef(null)
  const InputCategoria = useRef(null)
  const InputAno = useRef(null)
  const InputCor = useRef(null)
  const InputValor = useRef(null)
  const InputMotor = useRef(null)
  const inputImagemRef = useRef(null)

  useEffect(() => {
    if (carro) {
      InputModelo.current.value = carro.modelo
      InputMarca.current.value = carro.marca
      InputCategoria.current.value = carro.categoria
      InputAno.current.value = carro.ano
      InputCor.current.value = carro.cor
      InputValor.current.value = carro.diaria
      InputMotor.current.value = carro.motor
    }
  }, [carro])

  const handleImagemChange = (event) => {
    const file = event.target.files[0]
    if (file && inputImagemRef.current) {
      const imageUrl = URL.createObjectURL(file)
      inputImagemRef.current.style.backgroundImage = `url(${imageUrl})`
    }
  }

  async function handleUpdate(e) {
    e.preventDefault()
    try {
      const dadosAtualizados = {
        marca: InputMarca.current.value,
        modelo: InputModelo.current.value,
        categoria: InputCategoria.current.value,
        ano: parseInt(InputAno.current.value),
        cor: InputCor.current.value,
        diaria: parseFloat(InputValor.current.value),
        motor: InputMotor.current.value,
        status: carro.status,
      };
      if (inputImagemRef.current.value !== '') {
        dadosAtualizados.img = `${inputImagemRef.current.value.slice(12)}`;
      }
      await api.put(`/carros/${carro.id}`, dadosAtualizados);
      alert("Atualizado com sucesso!")
      fecharModal()
      atualizarLista()
    } catch (error) {
      console.error(error)
      alert("Erro ao atualizar o veículo.")
    }
  }

  return (
    <form className='formCadastro' onSubmit={handleUpdate}>
      <div className='metadeEsquerdaVeiculo'>
        <div className='metadeEsquerdaVeiculo1'>

          <div className='divForm'>
            <label className='.label'>Modelo</label>
            <input className='input' type="text" ref={InputModelo} />
          </div>

          <div className='divForm'>
            <label className='.label'>Marca</label>
            <input className='input' type="text" ref={InputMarca} />
          </div>

          <div className='divForm'>
            <label className='.label'>Categoria</label>
            <input className='input' type="text" ref={InputCategoria} />
          </div>

          <div className='divForm'>
            <label className='.label'>Ano</label>
            <input className='input' type="text" ref={InputAno} />
          </div>

        </div>

        <div className='metadeEsquerdaVeiculo2'>
          <div className='divForm'>
            <label className='.label'>Cor</label>
            <input className='input' type="text" ref={InputCor} />
          </div>
          <div className='divForm'>
            <label className='.label'>Valor</label>
            <input className='input' type="text" ref={InputValor} />
          </div>
          <div className='divForm'>
            <label className='.label'>Motor</label>
            <input className='input' type="text" ref={InputMotor} />
          </div>
        </div>

      </div>
      <div className='metadeDireitaVeiculo'>
        <div className='divForm'>
          <label className='.label'>Imagem (apenas exibição)</label>
          <input className='inputImagem input'
            type="file"
            accept="image/*"
            ref={inputImagemRef}
            onChange={handleImagemChange}
            style={{
              backgroundImage: `url(imgVeiculos/${carro.img})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              cursor: 'pointer'
            }}
          />
        </div>
      </div>
      <button type="submit" className='btnCadastro'>Salvar</button>
    </form>
  )
}

export default FormCadastroReserva
