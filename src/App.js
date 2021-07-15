import {useState}  from 'react'
import './App.css';
import Contenido from './components/Contenido';

function App() {
  const [opcion,setOpcion]=useState(0)

  return (
    <div className="App">
      <h3>NOTICIAS</h3>
      <div id="pestanas">
        <ul id="lista">
            <li id="pestana1"><span href='' onClick={()=>setOpcion('0')}>1. Resultados</span></li>
            <li id="pestana2"><span href='' onClick={()=>setOpcion('1')}>2. Artículos</span></li>
            <li id="pestana3"><span href='' onClick={()=>setOpcion('2')}>3. Búsqueda</span></li>
            <li id="pestana3"><span href='' onClick={()=>setOpcion('3')}>4. Titulares</span></li>
        </ul>
      </div>

      <div id="contenidopestanas">
        {<Contenido value={opcion} />}
      </div>

    </div>
  );
}

export default App;