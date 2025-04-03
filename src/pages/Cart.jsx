import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'

const Cart = (props) => {
    let ctx = useContext(CartContext)
    let sum = 0
    ctx.arr.forEach((item)=>{
        sum = sum + item.price
        console.log(sum);
        
    })

    console.log(ctx.arr.quantity);
    
const [count, setcount] = useState(1);

    function handleIncrement(){
        // console.log(obj);
        // console.log(i)
        setcount(count+1)
       
      


  }
    console.log(ctx.arr.quantity);

    
  return (
    <div>
        <table className=' mt-[80px] w-[80%] border-2 border-black m-auto text-center'>
            <thead className=' border-2 border-black m-auto'>
                <tr class>
                    <th>Sno</th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>

            </thead>
            <tbody>
                {
                    ctx.arr.map((ele,i)=>{
                        return <tr>
                            <td>{i+1}</td>
                            <td> < img className='w-[200px] m-auto' src={ele.thumbnail} alt="" /></td>
                            <td>{ele.title}</td>
                            <td>${ele.price}</td>
                            <td>
                                <button onClick={()=>handleIncrement(ele,i)} className='bg-green-700 p-1 rounded-md '>+</button>
                                {count}
                                <button className='bg-green-700 p-1 rounded-md '>-</button>
                            </td>
                            <td> <button className='bg-red-700 p-1 rounded-md '> delete</button></td>
                          
                        </tr>
                    })
                }

            </tbody>
        </table>
        <h1  className=' mt-[80   px] w-[80%] border-2 border-black m-auto text-center' >Total = ${sum.toFixed(2)}</h1>
       
      
    </div>
  )
}

export default Cart
