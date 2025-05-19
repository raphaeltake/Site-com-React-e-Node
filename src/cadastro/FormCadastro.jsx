import { useRef } from "react"
import React from 'react'
import api from '../../services/api'

const FormCadastro = () => {
  const inputEmail = useRef()
  const inputSenha = useRef()
  const inputCPF = useRef()
  const inputEndereco = useRef()
  const inputNumero = useRef()
  const inputComplemento = useRef()

  async function Cadastro() {
    if (inputEmail.current.value != "" & inputSenha.current.value != "" & inputCPF.current.value != "" &
      inputEndereco.current.value != "" & inputNumero.current.value != "" & inputComplemento.current.value != "") {
      await createUsers()
    } else {
      alert("Preencha todos os campos!")
    }
  }

  async function createUsers() {
    const resp = await api.post('/users', {
      email: `${inputEmail.current.value}`,
      senha: `${inputSenha.current.value}`,
      cpf: `${inputCPF.current.value}`,
      ender: `${inputEndereco.current.value}`,
      num: `${inputNumero.current.value}`,
      comp: `${inputComplemento.current.value}`
    })
    if (resp.data == "Sucesso") {
      alert('Registro realizado!')
    } else if (resp.data == "Falha") {
      alert('Email ou CPF já cadastrado')
    }
  }

  return (
    <form className='formCadastro' action="" method="get">

      <div className='metadeEsquerda'>
        <div className='divForm'>
          <label className='lable' htmlFor="Email">Email</label>
          <input className='input' type="text" id="Email" ref={inputEmail} />
        </div>
        <div className='divForm'>
          <label className='lable' htmlFor="Senha">Senha</label>
          <input className='input' type="password" id="Senha" ref={inputSenha} />
        </div>
        <div className='divForm'>
          <label className='lable' htmlFor="CPF">CPF</label>
          <input className='input' type="text" id="CPF" ref={inputCPF} />
        </div>
      </div>
      <div className='metadeDireita'>
        <div className='divForm'>
          <label className='lable' htmlFor="Endereco">Endereço</label>
          <input className='input' type="text" id="Endereco" ref={inputEndereco} />
        </div>
        <div className='divForm'>
          <label className='lable' htmlFor="Numero">Número</label>
          <input className='input' type="text" id="Numero" ref={inputNumero} />
        </div>
        <div className='divForm'>
          <label className='lable' htmlFor="Complemento">Complemento</label>
          <input className='input' type="text" id="Complemento" ref={inputComplemento} />
        </div>
      </div>
      <button className='btnCadastro' onClick={Cadastro} >Cadastrar</button>
    </form>
  )
}

export default FormCadastro