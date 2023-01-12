export default function Project_card(props:any){


    return( <div className="bg-red-700 flex mb-[4%]">
        <img src={props.src}  alt="image of project presented" className="w-[850px] h-[450px]"></img>
        

    </div>)
}