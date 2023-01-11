export default function Presentation() {
  return (
    <div className="flex flex_collum flex-row relative top-[100px] w-fit gap-8 overflow-hidden ">
      <section className="flex flex-col ml-[10%] mt-[4%]">
        <h1 className="Title text-lg md:text-6xl font-thin translate-x-96 ">
          {" "}
          &nbsp; &nbsp;Développeur Fullstack{" "}
        </h1>{" "}
        <br />
        <h2 className="Presentation text-sm md:text-2xl">Bienvenue sur mon Portfolio </h2>
        <h2 className="Presentation text-sm  md:text-2xl ">
          Je m'appelle <span className="font-bold text-[#007acc]">Nassim</span>{" "}
          <span className="font-bold text-black"> Bouziane</span>, Développeur
          Fullstack passionés par l'informatique, À votre service
        </h2>
        <a className="dl_Button flex w-[50%]  text-sm md:text-base whitespace-preline justify-center bg-[#007acc] border-2 border-black rounded-full px-10 py-4 font-avenir  text-white primary hover:text-black mt-16 hover:bg-[#e8c012]" target ="_blank " href="CV.pdf">
          {" "}
          Télécharger le CV
        </a>
        <img
        width="650"
        src="/retro_desktop.png"
        alt="Image of a retro computeur floating"
        className="flottant h-fit mt-2 xl "
      ></img>
      </section>
      <div className="flex_row  flex ">
      <img
      height="400"
      width="400"
        src="/photov2.png"
        alt="A Image of me"
        className=" rounded-lg h-fit "
      ></img>

      </div>
    </div>
  );
}
