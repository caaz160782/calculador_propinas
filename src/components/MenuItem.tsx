import { Dispatch } from "react"
import { OrderActions } from "../reducers/orders-reducer"
import type {MenuItem} from "../types"

type MenuItemProps ={
    item    : MenuItem,
    dispatch:Dispatch<OrderActions>
}

const MenuItem = ({item,dispatch}:MenuItemProps) => {
    return (
    <button
    className=' border-2 border-x-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between'
    onClick={()=>dispatch({type:'add-Order',payload:{item:item}})}
    >
     <p>{item.name} </p>  
     <p className='font-black'>${item.price} </p>  
      
    </button>
  )
}

export default MenuItem
