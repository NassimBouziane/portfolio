/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollToDiv(id: string) {
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo(0, elem.offsetTop - 50);

      setIsMenuOpen(!isMenuOpen);
    }
  }

  return (
    <header className="bg-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6 ml-0" aria-label="Global">
        <div className="flex lg:flex-1 justify-start ">
          <button className="-m-1.5 p-1.5">
            <span className="sr-only">Nassim Bouziane</span>
            <img className="h-12 w-auto transform transition-transform duration-300 hover:scale-150" src="Logo.png" alt="Logo of Nassim Bouziane inspired by the typescript logo" />
          </button>
        </div>
        <div className="flex lg:hidden justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button className="text-sm/6 font-semibold text-gray-900 transform transition-transform duration-300 hover:scale-150" onClick={() => scrollToDiv('apropos')}>A propos</button>
          <button className="text-sm/6 font-semibold text-gray-900 transform transition-transform duration-300 hover:scale-150" onClick={() => scrollToDiv('competences')}>Compétences</button>
          <button className="text-sm/6 font-semibold text-gray-900 transform transition-transform duration-300 hover:scale-150" onClick={() => scrollToDiv('projets')}>Projets</button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Mon portfolio</span>
                <img className="h-8 w-auto" src="Logo.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <button className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => scrollToDiv('apropos')}>A propos</button>
                      <button className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => scrollToDiv('competences')}>Compétences</button>
                      <button className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"onClick={() => scrollToDiv('projets')}>Projets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
