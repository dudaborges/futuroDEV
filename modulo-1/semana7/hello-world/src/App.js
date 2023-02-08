import { useState } from 'react';
import './App.css';
import CicloDeVida from './components/CicloDeVida';
import Class from './components/Class';
import Counter from './components/Counter';
import OcultarElmento from './components/OcultarElemento';

function App() {
  const [carro, setCarro] = useState(true)
  const [CicloDeVida, setCicloDeVida] = useState(true)

  const ocultarCarro = () => {
      setCarro(!carro)
  }

  const ocultarCicloDeVida = () => {
    setCicloDeVida(!CicloDeVida)
  }
  return (
    <>
    {CicloDeVida ? <Class /> : ''}
    <button onClick={() => ocultarCicloDeVida()}>Ocultar</button>
    <Counter />
    {carro ? <Class /> : ''}
    <button onClick={() => ocultarCarro()}>Ocultar Carro</button>
    <OcultarElmento />
    </>
  )
}

export default App;
