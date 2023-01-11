import { useEffect } from "react"

export default function ProgressBar(props:any){
    


    return( <div className="flex gap-3 items-center ml-28">
        <p className=" text-2xl mt w-[15%]"> {props.name} </p>
        <img src={props.progress+".png"} alt="Progress bar" width="500" className="h-[10px] "></img>
        <p className=" text-xl"> {props.progress} %</p>

    </div>)
}