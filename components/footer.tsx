/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" className="w-full">
        <path
          fill="#273036"
          fillOpacity="0.9"
          d="M0,192L0,288L84.7,288L84.7,288L169.4,288L169.4,320L254.1,320L254.1,192L338.8,192L338.8,224L423.5,224L423.5,96L508.2,96L508.2,192L592.9,192L592.9,192L677.6,192L677.6,160L762.4,160L762.4,192L847.1,192L847.1,32L931.8,32L931.8,32L1016.5,32L1016.5,160L1101.2,160L1101.2,96L1185.9,96L1185.9,256L1270.6,256L1270.6,0L1355.3,0L1355.3,192L1440,192L1440,320L1355.3,320L1355.3,320L1270.6,320L1270.6,320L1185.9,320L1185.9,320L1101.2,320L1101.2,320L1016.5,320L1016.5,320L931.8,320L931.8,320L847.1,320L847.1,320L762.4,320L762.4,320L677.6,320L677.6,320L592.9,320L592.9,320L508.2,320L508.2,320L423.5,320L423.5,320L338.8,320L338.8,320L254.1,320L254.1,320L169.4,320L169.4,320L84.7,320L84.7,320L0,320L0,320Z"
        ></path>
      </svg>

      <div className="w-full py-10 md:py-20 bg-[#394148] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="PressStart text-3xl">Nassim Bouziane</p>
          </div>

          <div className="flex flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <p className="text-2xl text-red-300">Ce site a été créé avec</p>
            <div className="flex space-x-4">
              <img className="h-[60px] w-[60px]" src="https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg" alt="Next.js" />
              <img className="h-[60px] w-[60px]" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-2xl PressStart">Contact :</p>
            <a href="mailto:bouzianenassim17102002@gmail.com" className="text-xl md:text-2xl block mt-2">
              bouzianenassim17102002@gmail.com
            </a>
            <a href="https://github.com/NassimBouziane" className="block mt-4">
              <img className="xl:w-[8%]" src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
