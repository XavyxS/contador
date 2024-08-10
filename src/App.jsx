import './App.css';
import freeCodeCampLogo from './images/fcc_primary_large.png'
import Boton from './componentes/boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const valorInicial = 0;
  const [numClics, setNumClics] = useState(valorInicial);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }


  const reiniciarContador = () => {
    setNumClics(valorInicial);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
