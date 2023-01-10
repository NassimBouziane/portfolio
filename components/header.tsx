"use client";
import React, { LegacyRef, useRef } from "react";
export default function Header() {
  const divRef: any = useRef<HTMLDivElement>();
  function scrollto(top: any) {
    window.scrollTo({ top: top, left: 0, behavior: "smooth" });
  }

  return (
    <div className="grid grid-cols-2 shadow-lg">
      <img
        className="w-[50px] h-[50px] ml-[1%] mt-[1%] mb-[1%] m-auto "
        src="Logo.png"
        alt="Logo of Nassim Bouziane inspired by the javascript logo"
      ></img> 
      <div className=" flex justify-evenly items-center">
      <button className="hover:-rotate-12 hover:text-2xl " > À propos</button>
      <button className="hover:-rotate-12 hover:text-2xl"> Compétences</button>
      <button className="hover:-rotate-12 hover:text-2xl"> Projets</button>
      </div>
    </div>
  );
}
