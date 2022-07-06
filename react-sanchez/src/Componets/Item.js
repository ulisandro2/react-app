import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='col-md-4 p-1'
    key={producto.id}
   >
       <div className='card w-100 mt-5'>
           <div className='card-header'>
               {`${producto.nombre} - ${producto.descripcion}`}
           </div>
           <div className='card-body'>
               {producto.foto}
               {producto.stock}
           </div>
           <div className='card-footer'>
            <Link to={`/detalle/${producto.id}`}>
               <button className='btn btn-outline-primary btn-block'>
                   Detalle del producto
               </button>
               </Link>
           </div>
       </div>
   </div>
  )
}

export default Item
