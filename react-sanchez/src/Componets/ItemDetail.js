import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

   const[cantidad , setCantidad] = useState();
   const {AddToCart} = useContext(CartContext);

  const onAdd = (cantidad) =>{
     setCantidad(cantidad , producto ) ;
     AddToCart(cantidad , producto);
  }



  return (
     <div className='col-md-4 p-1' key={producto.id}>
        <h2>Detalle del producto</h2>
        <div className='card w-100 mt-5'>
            <div className='card-header'>{`${producto.nombre}`}</div>
            <div className='card-body'>{`${producto.stock}`}</div>
            
            <div className='row'>
               <div className='col'>
                    {
                     cantidad ?
                     <Link to="/Cart" >
                     <button className='btn btn-outline-primary'>Ir al Cart</button>
                     </Link>
                     :
                     <ItemCount initial={1} stock={10} onAdd={onAdd} />  
                 }                 

               </div>
               </div>
            </div>
        
     </div>
                       
  )
}

export default ItemDetail