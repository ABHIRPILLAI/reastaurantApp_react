import React from 'react'
import { useParams } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Resttop from './Resttop';
import Restreveiw from './Restreveiw';


function Viewrest() {
    const urlParams=useParams()
    console.log(urlParams.id);
    const[restaurant,setRestaurant]=useState([]) //value egane venm enu usestate ulil set aknm here we need an array

    //create a fucntion for api call

    const getRestaurant= async()=>//asyn fnc wait delay ondel wait akum
    {
        //async and await
        //fetch is a promise
       await  fetch('/restaurants.json').then//here url call
       ((data)=>
       
        data.json()
        .then((result)=>//here data inside we get
        
        setRestaurant(result.restaurants))
        // console.log(data);
    ) 

    }
    console.log(restaurant);
    //hook like usestate
    useEffect(()=>
    {
        getRestaurant()
    },[])

    const viewrest=restaurant.find(item=>item.id==urlParams.id)
    console.log(viewrest);
  return (
    <div>
       
         {
           viewrest?(
           <Row>
            <Col md={6}>
            <Image src={viewrest.photograph} className='col-lg-9 ms-5 mt-2' style={{
                height:'650px'
            }} fluid />
            </Col>
            <Col className='me-3' md={5}>
            <h1>{viewrest.name}</h1>
            <ListGroup>
            <ListGroup.Item  variant="dark">ID: {viewrest.id}</ListGroup.Item>
            <ListGroup.Item  variant="dark">Address : {viewrest.address}</ListGroup.Item>
            <ListGroup.Item variant="dark">Neighborhood : {viewrest.neighborhood}</ListGroup.Item>
            <ListGroup.Item variant="dark">Cusine-Type : {viewrest.cusine_type}</ListGroup.Item>
            {/* <ListGroup.Item variant="dark">Operating Hours</ListGroup.Item>
            <ListGroup.Item variant="dark">Reveiws</ListGroup.Item> */}

    </ListGroup>
  <>  <Resttop op={viewrest.operating_hours} /></>
  <> <Restreveiw opp={viewrest.reviews}/></>
            </Col>
        </Row>
) :'null'
           }
        
        
        


       

    </div>
  )
}

export default Viewrest