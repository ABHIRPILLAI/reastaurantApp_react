import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


//list row vise and card content coloum vise

//react bootstrap in that cards
function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <Col sm={12} md={6} lg={4} xl={3}>

    <Link to={`viewrest/${restaurant.id}`} style={{
        textDecoration:'none'
    }}>
     <Card className='mt-4'>
    <Card.Img className='p-2' variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {restaurant.neighborhood}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

    </Link>
    </Col>
   
  )
}

export default Restcard