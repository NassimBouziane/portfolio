"use client";
import React, { LegacyRef, useRef } from "react";
export default function Header() {
  const divRef: any = useRef<HTMLDivElement>();
  function scrollto(top: any) {
    window.scrollTo({ top: top, left: 0, behavior: "smooth" });
  }

  return (
    <div className="flex">
      <img
        className="w-[50px] h-[50px] ml-[1%] mt-[1%] m-auto"
        src="Logo.png"
        alt="Logo of Nassim Bouziane inspired by the javascript logo"
      ></img> 
      <div className="flex items-center gap-4">
      <button className="h-[10px] whitespace-nowrap"> A propos</button>
      <button className="h-[10px]"> Compétences</button>
      <button className="h-[10px] mx-4"> Projets</button>
      </div>
    </div>
  );
}
