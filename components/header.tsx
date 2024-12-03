'use client';

import React, { LegacyRef, useRef } from 'react';

export default function Header() {
  const divRef: any = useRef<HTMLDivElement>();
  const ref = useRef();
  function scrollto(id: any, e:any) {
    // window.scrollTo({ top: top, left: 0, behavior: "smooth"});
    if (e._reactName == 'onClick') {
      const elem = document.getElementById(id);
      elem ? window.scrollTo(0, elem.offsetTop - 50) : null;
      // elem ? elem.scrollIntoView({ block:"end", behavior:"smooth", inline:"end"}) : null;
      // window.moveTo(0, window.innerHeight);
    }
  }

  return (
    <div className="grid_Header grid grid-cols-2 shadow-lg max-h-screen bg-white ">
      <img
        className="w-[50px] h-[50px] ml-[1%] mt-[1%] mb-[1%] m-auto "
        src="Logo.png"
        alt="Logo of Nassim Bouziane inspired by the typescript logo"
      ></img>
      <div className=" flex justify-evenly items-center">
        <button
          className="hover:hover:text-xl  "
          onClick={(e) => scrollto('apropos', e)}
        >
          {' '}
          À propos{' '}
        </button>{' '}
        &nbsp;
        <button className="hover:hover:text-xl" onClick={(e) => scrollto('competences', e)}> Compétences</button> &nbsp;
        <button className="hover:hover:text-xl"onClick={(e) => scrollto('projets', e)}> Projets</button>
      </div>
    </div>
  );
}
