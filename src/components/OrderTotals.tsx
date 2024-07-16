import { useMemo,Dispatch } from "react"
import { OrderActions } from "../reducers/orders-reducer"
import {OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps ={
    order :OrderItem[],    
    tip:number,
    dispatch:Dispatch<OrderActions>    
}

const OrderTotals = ({order,tip,dispatch}:OrderTotalsProps)=> {

    const  subTotalAmount = useMemo(()=> order.reduce((total,item)=> total + (item.quantity *item.price),0),[order])    
  
    const tipAmount= useMemo(()=>subTotalAmount * tip,[tip,order])

    const totalPagar= useMemo(()=>subTotalAmount + tipAmount,[tip,order])

    return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl' >TOTALES & PROPINA </h2>
            <p> Subtotal a pagar: <span className=' font-bold'>{formatCurrency(subTotalAmount)} </span></p>

            <p> Propina: <span className=' font-bold'>{formatCurrency(tipAmount)}  </span></p>

            <p> Total a pagar: <span className=' font-bold'> {formatCurrency(totalPagar)} </span></p>
        </div>
        <button className=" w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
          disabled={totalPagar===0}
          onClick={()=>dispatch({type:'clean-Order'})}
        >
         Guardar orden
        </button>
    </>
  )
}

export default OrderTotals