import React, { useEffect} from 'react';
import { usePeople } from '../../Hooks/usePeople';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import vader from '../../components/Imagen/vader.jpg'
import './Person.css'
import { Link } from 'react-router-dom';



export const PersonApp = () => {

  const { getAllPerson, page, person, siguiente, anterior} =  usePeople();

  
  useEffect(()=>{
    getAllPerson();
  }, [page])
  


  return (
    <div>
    <div className='text-center bg-light'><h1>All person</h1></div> 
    <div className='content d-flex'>

      {person.map((people) => (

      <div className='card mb-4'>
         <Card style={{width: '18rem'}}>
           <div className='bg-dark text-light'>
           <Card.Img variant="top" src={vader}/>
           <Card.Body>
             <Card.Text>
              <strong>Nombre:</strong> {people.name} <br></br>
              <strong>Altura:</strong> {people.height} <br></br>
              <strong>Peso:</strong> {people.mass} <br></br>
              <strong>color de pelo:</strong> {people.hair_color} <br></br>
              <strong>Color de piel:</strong> {people.skin_color} <br></br>
              <strong>Color de ojos:</strong> {people.eye_color} <br></br>
              <strong>Año de nacimiento:</strong> {people.birth_year} <br></br>
              <strong>Genero:</strong> {people.gender}
             </Card.Text>
             <Link className='nav-link text-light' to="/detailsperson" href=""><Button variant="light">Ver mas...</Button></Link>
           </Card.Body>
           </div>
         </Card>
         </div>

      ))} 
 
    </div>
  <div className='d-flex mb-4  justify-content-center ' >
            <Button className="page-link bg-warning text-dark p-3" onClick={anterior}>Anterior</Button>
              <h1 className="page-link p-3">{page}</h1>
            <Button className="page-link bg-warning text-dark p-3"  onClick={siguiente}>Siguiente</Button>
            </div>
    </div>
    
  )
}