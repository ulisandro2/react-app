import React from "react"
import Item from "./Item"

const ItemList = ({producto }) => {
    return (
        <div>
            {producto.map((producto)=> (
              <Item producto={producto}/>  
            )
                 
            )}
        </div>
    )
}

export default ItemList