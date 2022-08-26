import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { userParams } from 'react-router-dom'


const DetailsPerson = () => {


  return (
    
   <div >
     <div className='p-5'>
      <Link to="/personajes" href="" >
        <Button className='bg-success border shadow '>Back</Button>
        </Link>
        </div>
      <div >
        <h1 className='text-center bg-white'>Person Name </h1>
      </div>
    </div>
  )
}

export default DetailsPerson