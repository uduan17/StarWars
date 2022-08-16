import React from 'react'
import  './cartas.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({text,title,Buttons,image}) {
  return (
 <div className='card'>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={image} />
      <div className='bg-success text-light'>
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button  className='justify-content-center' variant="dark">{Buttons}</Button>
      </Card.Body>
      </div>
    </Card>
 </div>
  );
}

export default BasicExample;