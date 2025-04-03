import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {
    const [arr, setarr] = useState([]);

    const [searchValue, setsearchValue] = useState('');
 
    function addItems (obj){
      obj.quantity=1
        let copyArr = [...arr]
        copyArr.push(obj)
        setarr(copyArr)

    }
    

  return (
    <CartContext.Provider value={{arr,addItems , searchValue ,setsearchValue}}>
        {props.children}
      </CartContext.Provider>
  )
}

export default CartState
