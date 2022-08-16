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
    <div className='text-center'><h1>All person</h1></div> 
    <div className='content d-flex flex-wrap justify-content-space-evenly' >
      {dataPeople.map((people) => (
         <div className='card d-flex'>
         <Card style={{ width: '18rem'}}>
           {/* <Card.Img variant="top" src={image} /> */}
           <div className='bg-success text-light'>
           <Card.Body>
           <center>
             <Card.Title></Card.Title>
             <Card.Text>
              <strong>Name:</strong>{people.name} <br></br>
              <strong>Altura:</strong>{people.height}
             </Card.Text>
             
             <Button variant="dark">Ver mas...</Button>
             </center>
           </Card.Body>
           </div>
         </Card>
      </div>
      ))}
    </div>
    </div>
  )
}