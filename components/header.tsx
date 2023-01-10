"use client";
import React, { LegacyRef, useRef } from "react";
export default function Header() {
  const divRef: any = useRef<HTMLDivElement>();
  function scrollto(top: any) {
    window.scrollTo({ top: top, left: 0, behavior: "smooth" });
  }

  return (

    <div className="grid grid-cols-2 shadow-lg max-h-screen">
      <img
        className="w-[50px] h-[50px] ml-[1%] mt-[1%] mb-[1%] m-auto "
        src="Logo.png"
        alt="Logo of Nassim Bouziane inspired by the typescript logo"
      ></img> 
      <div className=" flex justify-evenly items-center">
      <button className="hover:hover:text-xl "  onClick={(e) => scrollto(900)}> À propos</button>
      <button className="hover:hover:text-xl"> Compétences</button>
      <button className="hover:hover:text-xl"> Projets</button>
      </div>
    </div>


  );
}