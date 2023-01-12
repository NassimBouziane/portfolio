import Project_card from "./project_card"
export default function Mesprojets(){


    return( <div className="">
         <h1
        className="text-6xl text-bold ml-[4.7%] mb-[5%]"
        
      >
        {" "}
        Mes Projets{" "}
      </h1>{" "}
      <div className="ml-[5%] mr-[5%]   grid grid-cols-2 gap-6">
<Project_card src="Screenshot_10.png" />
<Project_card src="Screenshot_9.png" />
<Project_card src="Screenshot_7.png" />
</div>


      <h1 className="mb-[1000px]"></h1>
    </div>
    )
}