import React, { useEffect} from 'react';
import { usePeople } from '../../Hooks/usePeople';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Person.css'


export const PersonApp = () => {
  const {getAllPerson, dataPeople} =  usePeople();

  useEffect(()=>{
    getAllPerson();
    console.log(dataPeople);
  }, [])


  return (
    <div>
    <div className='text-center bg-light'><h1>All person</h1></div> 
    <div className='content d-flex'>

      {dataPeople.map((people) => (

      <div className='card mb-4'>
         <Card style={{ width: '18rem'}}>
           <div className='bg-dark text-light'>
           <Card.Body>
             <Card.Text>
              <strong>Name:</strong> {people.name} <br></br>
              <strong>Altura:</strong> {people.height}
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