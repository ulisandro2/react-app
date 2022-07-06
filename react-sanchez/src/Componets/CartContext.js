import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
         
  const [cartList , setCartList] = useState([])
  const [count , setCount] = useState(1)

  
  const AddToCart = (cantidad , producto) =>{
            
         
            if(IsInCart(producto.id)){
               alert('el producto ya esta en el carrito');
            }else{
                setCartList([...cartList, {producto,cantidad}]);
                alert('se agrego el producto correctamente')
            }
  }

  const IsInCart = (id) =>{
    return cartList&&cartList.some((i)=> i.producto.id === id)
  }

  const EmptyCart = () =>{
    setCartList([])
  }

    return(
        <CartContext.Provider value={{AddToCart ,cartList,EmptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider