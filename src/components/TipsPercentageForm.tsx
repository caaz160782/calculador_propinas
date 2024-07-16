import { Dispatch } from "react"
import { OrderActions } from "../reducers/orders-reducer"
import { tipOptions } from "../data/db"

type TipsPercentageFormProps={
   dispatch:Dispatch<OrderActions>,
    tip:number
}

const TipsPercentageForm = ({dispatch,tip}:TipsPercentageFormProps) => {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina:</h3>
      <form>
        {
         tipOptions.map(tipOpt => (
            <div key={tipOpt.id} className="flex gap-2">
                <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
                <input
                    id={tipOpt.id}
                    type="radio"
                    name="tip"
                    value={tipOpt.value}
                    //onChange={ e=> setTip(+e.target.value)}
                    onChange={ e=> dispatch({type:'add-tip',payload:{value:+e.target.value} }) }
                    checked={tipOpt.value === tip}
                />
            </div>
          ))
        }
      </form>
    </div>
  )
}

export default TipsPercentageForm
