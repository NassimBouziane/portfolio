
export default function Project_card(props:any){
const list = props.list;

    return( 
    <div className="flex flex-col mb-[4%]">
       <img src={props.src}  alt="image of project presented" className="w-[100%] h-[fit] "></img>
       <div className="mb-[10%] border  border-amber-500 bg-red"> <p className="text-center text-2xl">{props.name}</p> <br/>
       <p> {props.descripton}</p>
       <div className=" ml-5 mb-5 mt-5 flex">
  
        {list ? list.map((element:string) => {
            return(<div><img src={element} className="w-12 h-12 ml-3"></img></div>)
            
        }): null}

       </div>
       </div>
        
        

    </div>
   
    )
}