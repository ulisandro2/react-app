import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Componets/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [producto , setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
     
     const {id} =useParams()

       useEffect(() =>{
        const db = getFirestore()
        const queryItem = doc(db, 'items', id)
        getDoc(queryItem) 
        .then(resp => setProductos ( { id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))
        .finally(setLoading(false));
       },[])
       
  
    return (<>
    {loading ? <h1>Cargando</h1> :<ItemDetail producto={producto} />}</>
      )
    
  
}

export default ItemDetailContainer
