import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../components/Slider/Slider';
import Cartas from '../components/Cards/Cartas';
import Texto from '../components/Texto/Parrafo';
import React from 'react'
import './style.css'
import femenina from '../components/Imagen/femenina.jpg';
import yoda from '../components/Imagen/yoda.jpg';
import darth from '../components/Imagen/darth.jpg';



const Home = () => {
  return (
    <div>
      

        <div className='container'>
        <Slider/>
        </div>

       <br></br>

       <div className='container'>
       <Texto/>
       </div>

       <br></br>

        <div className='content flex-wrap'>
        <Cartas
        image={femenina}
        text = "Rey Skywalker, una mujer humana sensible a la Fuerza, fue una Jedi que luchó por la Resistencia contra la Primera Orden durante la Era de la Nueva República."
        title = "Rey Skywalker"
        Buttons = "Ver mas..."
        />

        <Cartas
        image={yoda} 
        text = "Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020."
        title = "yoda"
        Buttons = "Ver mas..."
        />

        <Cartas
        image={darth}
        text = "Anakin Skywalker, más tarde Darth Vader, es el personaje central de la famosa saga de Star Wars del director George Lucas. Personaje de ficción-Star Wars."
        title = "Darth Vader"
        Buttons = "Ver mas..."
        />
        </div>
      
    </div>
  )
}

export default Home