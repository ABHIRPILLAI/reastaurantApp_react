import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
function Resturantlist() {
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

    //here in react use {} instead of ()
    //empty array continous ayit data ponath stop akan 
  return (
    <Row>
      {
        

         restaurant.map(item=>(
      <Restcard restaurant={item}/>//to displayrestuarant list as a card
      //destructuring
      // <h1>{item.name}</h1>

    ))
   // uses {} for js content implement
}
    </Row>

  )
}

export default Resturantlist