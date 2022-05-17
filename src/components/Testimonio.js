import React from 'react';
import '../styles/Testimonio.css';

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio'
                src={require('../img/test-cris.jpg')}
                alt='Foto de Cris'/>

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Cristian Mota en México</p>
                <p className='cargo-testimonio'>Comunicólogo | Web Developer</p>
                <p className='texto-testimonio'>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p> 
            </div>    
        </div>
   
    );
}
export default Testimonio;