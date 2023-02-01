import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';


export default function Restreveiw({opp}) 



{
    const [open, setOpen] = useState(false);

  return (
  opp.map(item=>(
    <Card  style={{ width: '18rem' , float:'right' }} className='border mt-4 ms-2'>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
      <Card.Text>
        Rating : {item.rating}
      </Card.Text>
     
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='dark'
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {item.comments}
        </div>
      </Collapse>
    </Card.Body>
  </Card>
  ))
  )
}
