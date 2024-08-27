import { tipOptions } from "../data/db"

type TipsPercentageFormProps={
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip:number
}

const TipsPercentageForm = ({setTip,tip}:TipsPercentageFormProps) => {
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
                    onChange={ e=> setTip(+e.target.value)}
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
