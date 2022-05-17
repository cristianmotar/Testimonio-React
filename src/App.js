import logo from './logo.svg';
import Testimonio from './components/Testimonio.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio />
      </div>  
    </div>
  );
}

export default App;
