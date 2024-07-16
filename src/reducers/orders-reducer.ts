import { OrderItem ,MenuItem} from '../types';

export type OrderActions=
{type:'add-Order',payload:{item:MenuItem}} |
{type:'remove-Order',payload:{id:MenuItem['id']}} |
{type:'clean-Order'} |
{type:'add-tip', payload:{value:number}} 

export type OrderState={
    order: OrderItem[]
    tip:number
}

export const initialState : OrderState={
    order:[],
    tip:0
}

export const orderReducer =(
    state: OrderState= initialState,
    action:OrderActions
)=>{
    if(action.type === 'add-Order'){
        const itemExist =state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updateOrder :OrderItem[]=[]
        if(itemExist){
             updateOrder =state.order.map(orderItem => orderItem.id === action.payload.item.id ? 
             {...orderItem, quantity: orderItem.quantity +1}
             :orderItem
            )            
        }else{
         const newItem :OrderItem= {...action.payload.item, quantity:1}
         updateOrder =[...state.order,newItem ]
        }
       
       return {
         ...state,
         order:updateOrder
        
       }
    }

    if(action.type === 'remove-Order'){
        const updateOrder= state.order.filter(item => item.id !== action.payload.id)
        return{
            ...state,
            order:updateOrder
        }
    }

    if(action.type === 'clean-Order'){
        return{
            ...state,
            tip:0,
            order:[]
        }
    }


    if(action.type === 'add-tip'){
        const tip=action.payload.value
        return{
            ...state,
            tip
        }
    }
    return state
}