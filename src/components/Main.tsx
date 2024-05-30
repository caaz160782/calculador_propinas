import { menuItems } from "../data/db"
import useOrder from "../hooks/useOrder"
import MenuItem from "./MenuItem"
import OrderContets from "./OrderContets"


const Main = () => {
    const { addItem ,order}= useOrder()
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
          <OrderContets order={order}/>
        </div>
      
    </main>
  )
}

export default Main
