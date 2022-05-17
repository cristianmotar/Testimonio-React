import logo from './logo.svg';
import Testimonio from './components/Testimonio.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre= 'Cristian Mota'
          pais= 'México'
          imagen= 'cris'
          cargo= 'Web Developer'
          empresa= 'Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
         <Testimonio 
          nombre= 'Enrique Centeno'
          pais= 'México'
          imagen= 'enrique'
          cargo= 'Creative Jr.'
          empresa= 'Cartel'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
          <Testimonio 
          nombre= 'Alejandro Avila'
          pais= 'México'
          imagen= 'alex'
          cargo= 'Location Manager'
          empresa= 'Loft 450'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
      </div>  
    </div>
  );
}

export default App;
