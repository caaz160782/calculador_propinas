import { useState } from "react";
import { OrderItem ,MenuItem} from '../types';


const useOrder=()=>{
    const [order,setOrder] = useState<OrderItem[]>([])

    const addItem = (item:MenuItem) => {
        const itemExist =order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updateOrder =order.map(orderItem => orderItem.id === item.id ? 
             {...orderItem, quantity: orderItem.quantity +1}
             :orderItem
            )
            setOrder(updateOrder)
        }else{
         const newItem = {...item, quantity:1}
         setOrder([...order,newItem ])
        }
    }
    
    return {
        addItem,
        order
    }
}

export default useOrder