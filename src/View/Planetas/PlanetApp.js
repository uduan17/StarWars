import React, { useEffect} from 'react';
import { usePlanet } from '../../Hooks/usePlanet';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Personajes/Person.css'



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

         <div className='cartas mb-4'>
         <Card style={{ width: '15rem'}}>
           <div className='bg-secondary text-light'>
           <Card.Body>
             <Card.Title></Card.Title>
             <Card.Text>
              <strong>Nombre:</strong> {planet.name} <br></br>
              <strong>Periodo orbital: </strong>{planet.orbital_period}
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