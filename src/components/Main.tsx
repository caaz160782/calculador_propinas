import { menuItems } from "../data/db"
import useOrder from "../hooks/useOrder"
import MenuItem from "./MenuItem"
import OrderContets from "./OrderContets"
import TipsPercentageForm from "./TipsPercentageForm"
import OrderTotals from "./OrderTotals"

const Main = () => {
    const { addItem ,order,removeItem,tip, setTip,placeOrder}= useOrder()
  return (
    <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2 ' >
        <div className=' p-5 '>
          <h2 className=' text-4xl font-black'>Menú</h2>
          <div className='space-y-3 mt-10'>
                {menuItems.map(item => (
                    <MenuItem 
                    key={item.id}
                    item={item}
                    addItem={addItem}
                    />
                ))}
            </div>
        </div>
        <div className= ' border border-dashed border-slate-300 p-50 rounded-lg space-y-10'>
          {order.length > 0 ? (
           <>
          <OrderContets 
           order={order}
           removeItem={removeItem}
           />
           <TipsPercentageForm
            setTip={setTip}
            tip={tip}
           />
           <OrderTotals
             order={order}
             tip={tip}
             placeOrder={placeOrder}
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
