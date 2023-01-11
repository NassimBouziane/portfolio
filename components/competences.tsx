import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Tab } from "@headlessui/react";
import ProgressBar from "./progressbar";

export default function Competences() {
      
  //const [ref, inView] = useInView({ threshold: 0.7 });
  useEffect(() => {
    // {
    //   inView ? document.getElementById("Apropos")?.focus() : undefined;
    // }
  }, []);

    return(
        <div>
        <h1
        className="text-6xl text-bold ml-[4.7%]"
      >
        {" "}
        Compétences{" "}
      </h1>{" "}
      <Tab.Group >
        <Tab.List className="mt-[5%] ml-[5%] flex flex-row gap-40" >
          <Tab
          
            id="test"
            className="PressStart text-xl  text-green-500 focus:text-black focus:outline-none"
          >
            Frameworks
          </Tab>
          <Tab className="PressStart text-xl text-red-500 focus:text-black focus:outline-none">
            Languages 
          </Tab>
          <Tab className="PressStart text-xl text-blue-500 focus:text-black focus:outline-none">
            Autres
          </Tab>
        </Tab.List>
        <div className="flex">
        <Tab.Panels className="ml-10 mt-10 w-[50%]" >
          <Tab.Panel>
          <ProgressBar name="Tailwind" progress="100"/>
           <ProgressBar name="React.JS" progress="80"/>
           <ProgressBar name="Next.JS" progress="60"/>
           <ProgressBar name="Flutter" progress="40"/>
          </Tab.Panel>

          <Tab.Panel>
          <ProgressBar name="Typescript" progress="100"/>
          <ProgressBar name="Python" progress="80"/>
          <ProgressBar name="HTML/CSS" progress="80"/>
          <ProgressBar name="PHP" progress="60"/>
          </Tab.Panel>
          <Tab.Panel>
          
          <ProgressBar name="MySQL" progress="80"/>
          <ProgressBar name="Prisma" progress="80"/>
          <ProgressBar name="Git" progress="80"/>
          <ProgressBar name="Bash" progress="60"/>

          </Tab.Panel>
        </Tab.Panels>
      </div>
      </Tab.Group>
        
      <h1 className="mb-[600px]"></h1>
        </div>
    )
}