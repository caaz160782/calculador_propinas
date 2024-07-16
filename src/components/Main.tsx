import { useReducer } from "react"
import { initialState, orderReducer } from "../reducers/orders-reducer"
import { menuItems } from "../data/db"
import MenuItem from "./MenuItem"
import OrderContets from "./OrderContets"
import TipsPercentageForm from "./TipsPercentageForm"
import OrderTotals from "./OrderTotals"


const Main = () => {
  const [state,dispatch]=useReducer(orderReducer,initialState)
  return (
    <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2 ' >
        <div className=' p-5 '>
          <h2 className=' text-4xl font-black'>Menú</h2>
          <div className='space-y-3 mt-10'>
                {menuItems.map(item => (
                    <MenuItem 
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                    />
                ))}
            </div>
        </div>
        <div className= ' border border-dashed border-slate-300 p-50 rounded-lg space-y-10'>
          {state.order.length > 0 ? (
           <>
          <OrderContets 
           order={state.order}
           dispatch={dispatch}
           />
           <TipsPercentageForm
             dispatch={dispatch}
            tip={state.tip}
           />
           <OrderTotals
             order={state.order}
             tip={state.tip}
             dispatch={dispatch}
           />
           </> 
          ): 
          <div> No existen ordenes aun</div>
          }
        </div>
      
    </main>
  )
}

export default Main
