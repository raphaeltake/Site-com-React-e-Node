import React from 'react';
import Header from './header/Header';
import HeaderLogado from './header/HeaderLogado'
import Home from './home/Home';
import Footer from './footer/Footer';
import Reservar from './reserva/Reservar';
import ReservarLogado from './reserva/ReservarLogado';
import Login from './login/login';
import Cadastro from './cadastro/Cadastro';
import CadastroVeiculo from './cadastro/cadastroVeiculo/CadastroVeiculo';
import './css/index.css';

const { pathname } = window.location


const App = () => {

  const [logado, setLogado] = React.useState(() => {
    const valorSalvo = localStorage.getItem('logado');
    return valorSalvo === 'true';
  });

  React.useEffect(() => {
    localStorage.setItem('logado', logado);
  }, [logado]);

  const propsComuns = { logado, setLogado };

  let Componente
  let Cabecalho

  if (pathname == '/cadastro') {
    Componente = Cadastro
  } else if (pathname == '/reservar') {
    Componente = Reservar
  } else if (pathname == '/reservarlogado') {
    Componente = ReservarLogado
  } else if (pathname == '/login') {
    Componente = Login
  }  else if (pathname == '/cadastroveiculo') {
    Componente = CadastroVeiculo
  } else {
    Componente = Home
  }

  if (logado) {
    Cabecalho = HeaderLogado
  } else {
    Cabecalho = Header
  }
  return (
    <>
      <Cabecalho {...propsComuns} />
      <Componente {...propsComuns} />
      <Footer />
    </>
  )
};

export default App;