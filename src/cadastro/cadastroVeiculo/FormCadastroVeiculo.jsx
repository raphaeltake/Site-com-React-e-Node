import React, { useRef } from 'react';
import api from '/services/api'

const FormCadastroReserva = ({}) => {
  const InputModelo = useRef(null);
  const InputMarca = useRef(null);
  const InputCategoria = useRef(null);
  const InputAno = useRef(null);
  const InputCor = useRef(null);
  const InputValor = useRef(null);
  const InputMotor = useRef(null);
  const inputImagemRef = useRef(null);

  const handleImagemChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (inputImagemRef.current) {
        inputImagemRef.current.style.backgroundImage = `url(${imageUrl})`;
        inputImagemRef.current.style.backgroundSize = 'contain';
        inputImagemRef.current.style.backgroundRepeat = 'no-repeat';
        inputImagemRef.current.style.backgroundPosition = 'center';
      }
    }
  };

  async function Cadastro(){
    if(InputMarca.current.value != "" & InputCategoria.current.value != "" & InputAno.current.value != "" & 
    InputCor.current.value != "" & InputValor.current.value != "" & InputMotor.current.value != "" &
    inputImagemRef.current.value != "")   {
      await createCar()
    } else {
      alert("Preencha todos os campos!")
    }
  }


  async function createCar(){
    await api.post('/carros', {
    marca: InputMarca.current.value,
    modelo: InputModelo.current.value,
    categoria: InputCategoria.current.value,
    ano: parseInt(InputAno.current.value),
    cor: InputCor.current.value,
    diaria: parseFloat(InputValor.current.value),
    motor: InputMotor.current.value,
    img: `${inputImagemRef.current.value.slice(12,inputImagemRef.current.value.length)}`,
    status: "disponível"
    })
    alert("Registro Realizado com Sucesso!")
    
}



  return (
    <form className='formCadastro' action="" method="get">
      <div className='metadeEsquerdaVeiculo'>
        <div className='metadeEsquerdaVeiculo1'>
          <div className='divForm'>
            <label className='lable' htmlFor="Modelo">Modelo</label>
            <input className='input' type="text" id="Modelo" ref={InputModelo}/>
          </div>
          <div className='divForm'>
            <label className='lable' htmlFor="Marca">Marca</label>
            <input className='input' type="text" id="Marca" ref={InputMarca}/>
          </div>
          <div className='divForm'>
            <label className='lable' htmlFor="Categoria">Categoria</label>
            <input className='input' type="text" id="Categoria" ref={InputCategoria}/>
          </div>
          <div className='divForm'>
            <label className='lable' htmlFor="Ano">Ano</label>
            <input className='input' type="text" id="Ano" ref={InputAno}/>
          </div>
        </div>
        <div className='metadeEsquerdaVeiculo2'>
          <div className='divForm'>
            <label className='lable' htmlFor="Cor">Cor</label>
            <input className='input' type="text" id="Cor" ref={InputCor}/>
          </div>
          <div className='divForm'>
            <label className='lable' htmlFor="Valor">Valor</label>
            <input className='input' type="text" id="Valor" ref={InputValor}/>
          </div>
          <div className='divForm'>
            <label className='lable' htmlFor="Motor">Motor</label>
            <input className='input' type="text" id="Motor" ref={InputMotor}/>
          </div>
        </div>
      </div>
      <div className='metadeDireitaVeiculo'>
        <div className='divForm'>
          <label className='lable' htmlFor="Imagem">Imagem do veículo</label>
          <input
            className='inputImagem input'
            type="file"
            id="Imagem"
            accept="image/*"
            ref={inputImagemRef}
            onChange={handleImagemChange}
            style={{
              backgroundImage: 'url(../../imgVeiculos/)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      <button className='btnCadastro' onClick={Cadastro}>Cadastrar</button>
    </form>
  );
};

export default FormCadastroReserva;