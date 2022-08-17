import React, { useEffect} from 'react';
import { usePlanet } from '../../Hooks/usePlanet';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Personajes/Person.css'
import lothal from '../../components/Imagen/Lothal.jpg'



export const PlanetApp = () => {
  const {getAllPlanet, dataPlanet} =  usePlanet();

  useEffect(()=>{
    getAllPlanet();
    console.log(dataPlanet);
  }, [])

  return (
    <div>
    <div className='text-center bg-light'><h1>All Planets</h1></div> 
    <div className='content d-flex flex-wrap'>

      {dataPlanet.map((planet) => (

         <div className='card mb-4'>
         <Card style={{ width: '15rem'}}>
           <div className='bg-secondary text-light'>
           <Card.Img variant="top" src={lothal}/>
           <Card.Body>
             <Card.Title></Card.Title>
             <Card.Text>
              <strong>Nombre:</strong> {planet.name} <br></br>
              <strong>Periodo de orbital: </strong>{planet.orbital_period}<br></br>
              <strong>Periodo de rotacion: </strong>{planet.rotation_period}<br></br>
              <strong>Clima: </strong>{planet.climate}<br></br>
              <strong>Diámetro: </strong>{planet.diameter}<br></br>
              <strong>Gravedad: </strong>{planet.gravity}<br></br>
              <strong>Terreno: </strong>{planet.terrain}<br></br>
              <strong>Superficie del agua: </strong>{planet.surface_water}<br></br>
              <strong>Poblacion: </strong>{planet.population}
             </Card.Text>
             <Button variant="light">Ver mas...</Button>
           </Card.Body>
           </div>
         </Card>
      </div>

      ))}

    </div>
    </div>
  )
}