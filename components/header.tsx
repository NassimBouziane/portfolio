"use client";
import React, { LegacyRef, useRef } from "react";
export default function Header() {
  const divRef: any = useRef<HTMLDivElement>();
  const ref = useRef();
  function scrollto(top: any,e:any) {
    //window.scrollTo({ top: top, left: 0, behavior: "smooth"});
    if(e._reactName == "onClick"){
    var elem = document.getElementById(e.toString());
    //elem ? window.scrollTo(0, elem.offsetTop) : null;
      elem ? elem.scrollIntoView({ block:"start", behavior:"smooth", inline:"end"}) : null;

    }
    
  }

  return (

    <div className="grid grid-cols-2 shadow-lg max-h-screen bg-white">
      <img
        className="w-[50px] h-[50px] ml-[1%] mt-[1%] mb-[1%] m-auto "
        src="Logo.png"
        alt="Logo of Nassim Bouziane inspired by the typescript logo"
      ></img> 
      <div className=" flex justify-evenly items-center">
      <button className="hover:hover:text-xl  "  onClick={(e) => scrollto(10000,"competences")}>  À propos  </button> &nbsp;
      <button className="hover:hover:text-xl"> Compétences</button> &nbsp;
      <button className="hover:hover:text-xl"> Projets</button>
      
      </div>
    </div>


  );
}
