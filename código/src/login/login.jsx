import React from 'react'
import Form from './form/FormLogin'

const login = ({ logado, setLogado }) => {
  return (
    <section className='outCardLogin'>
      <div className='cardLogin'>
        <h1>Login</h1>
        <Form logado={logado} setLogado={setLogado} />
      </div>
    </section>
  )
}

export default login