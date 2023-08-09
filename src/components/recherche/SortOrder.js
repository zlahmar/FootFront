import { SORT_ORDER } from "../../data/Constants"

function SortOrder({sortOrder,handleRadioChange}){
    return (
        <div>
            <ul class="grid w-full gap-3 md:grid-cols-2 pt-4">
                <li>
                    <input type="radio" id={SORT_ORDER.DESC} name={SORT_ORDER.DESC +'_' + SORT_ORDER.ASC} value={SORT_ORDER.DESC} class="hidden peer" required checked={sortOrder === SORT_ORDER.DESC} onChange={() => handleRadioChange(SORT_ORDER.DESC)}/>
                    <label for={SORT_ORDER.DESC} class="inline-flex justify-center w-full p-2 text-white bg-eerieBlack border border-white rounded-lg cursor-pointer peer-checked:border-tiffanyBlue peer-checked:text-tiffanyBlue hover:text-gray-600 hover:bg-gray-100">                           
                        <div class="block">
                            <div class="w-full text-lg font-semibold "> {SORT_ORDER.DESC} </div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="radio" id={SORT_ORDER.ASC} name={SORT_ORDER.DESC +'_' + SORT_ORDER.ASC} value={SORT_ORDER.ASC} class="hidden peer" checked={sortOrder === SORT_ORDER.ASC} onChange={()=> handleRadioChange(SORT_ORDER.ASC)}/>
                    <label for={SORT_ORDER.ASC} class="inline-flex justify-center w-full p-2 text-white bg-eerieBlack border border-white rounded-lg cursor-pointer peer-checked:border-tiffanyBlue peer-checked:text-tiffanyBlue hover:text-gray-600 hover:bg-gray-100">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">{SORT_ORDER.ASC}</div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default SortOrder