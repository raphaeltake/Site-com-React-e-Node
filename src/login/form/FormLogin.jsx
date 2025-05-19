import { useRef, useState } from "react"
import React from 'react'
import api from '../../../services/api'

const handleLogin = (event) => {
  event.preventDefault();
  setLogado(true);
};




const Form = ({ logado, setLogado }) => {
const inputEmail = useRef()
const inputSenha = useRef()

async function BtnClick(){
  if(inputEmail.current.value != "" & inputSenha.current.value != ""){
    await Entrar()
  } else {
    alert("Preencha todos os campos!")
  }
}
async function Entrar() {
  
  const registrado = await api.post('/login', {
    email: inputEmail.current.value,
    senha: inputSenha.current.value
  })
  if(registrado.data == "Sucesso"){  
      window.location.href = '/home'
      useState(setLogado(true)) 
  } else {
    alert('Usuário e/ou Senha não Conferem')
  }
}
  return (
    <form className='formLogin' action="" method="get">
      <div className='divForm'>
        <label className='lable' htmlFor="Email">Email</label>
        <input className='input' type="text" id="Email" ref={inputEmail} />
      </div>
      <div className='divForm'>
        <label className='lable' htmlFor="Senha">Senha</label>
        <input className='input' type="password" id="Senha" ref={inputSenha} />
      </div>
      <button className='btnLogin' onClick={BtnClick}>
        <a className='btnLogin' style={{display: 'block'}}>Entrar</a>
      </button>
    </form>
  )
}

export default Form



