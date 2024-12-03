/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

export default function Header() {
  function scrollToDiv(id: string) {
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo(0, elem.offsetTop - 50);
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
          onClick={() => scrollToDiv('apropos')}
        >
          {' '}
          À propos{' '}
        </button>{' '}
        &nbsp;
        <button className="hover:hover:text-xl" onClick={() => scrollToDiv('competences')}> Compétences</button> &nbsp;
        <button className="hover:hover:text-xl"onClick={() => scrollToDiv('projets')}> Projets</button>
      </div>
    </div>
  );
}
