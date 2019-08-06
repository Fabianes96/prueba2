import React, { useState, useEffect }from 'react'
import axios from 'axios';


const Card=(props)=>{


  const initialState = {
    itemId: '',
    itemName: props.name,
    itemDescription: '',
    itemSeller: '',
    itemImg:'',    
  }

const [item, setItem] = useState(initialState); 



useEffect(()=>{
  axios.get(`https://api.mercadolibre.com/sites/MLU/search?q=${item.itemName}`).then(
    res=>{

      const fetchedState={
        itemName: res.data.paging.limit,
        itemId: '',    
        itemDescription: 'Prueba',
        itemSeller: 'Prueba2',
        itemImg:'3'
      }
      setItem(fetchedState)
    })  
},[item.itemName]);

function recorrido(){
  axios.get(`https://api.mercadolibre.com/sites/MLU/search?q=${item.itemName}`).then(
    res=>{
      let rec=res.data
      const todos= rec.map((todo,i)=>{
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-title text-center">
                <h3>{todo.site_id}</h3>          
              </div>
              <div className="card-body">
                 hola
              </div>
              <div className="card-footer">                
              </div>
            </div>
          </div>
        )
      })
    })  
}



return(    
    <div className="container">
     <div className="row mt-4">
        <div className="col-md-4">
          <div className="card-header">
            <h3>Titulo</h3>
          </div>
          <div clasname="card-body">
            <h3>Oe</h3>
            <h1 className="name">Nombre:{item.itemName}</h1>
            <h3 className="text">id: {item.itemId}</h3>
            <h3 className="text">Description: {item.itemDescription} </h3>
            <h3 className="text">seller: {item.itemSeller} </h3>
            
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Card;


