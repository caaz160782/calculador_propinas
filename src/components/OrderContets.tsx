import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps ={
    order :OrderItem[]    
}

const OrderContets = ({order}:OrderContentsProps) => {
  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>
        <div className= 'space-y-3 mt-5'>
            {
             order.length === 0 ?
                <p className='text-center'>La orden esta vacia</p>
            :
              (
                order.map(item =>(
                    <div key={item.id}>
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity}
                        </p>
                    </div>
                )
              ))   
            }
        </div>
    </div>
  )
}

export default OrderContets
