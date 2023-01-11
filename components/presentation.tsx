export default function Presentation() {
  return (
    <div className="flex flex_collum flex-row relative top-[100px] w-fit gap-60 overflow-hidden ">
      <section className="flex flex-col mt-[20%] ml-[10%] ">
        <h1 className="Title text-4xl font-thin translate-x-96 ">
          {" "}
          &nbsp; &nbsp;Développeur Fullstack{" "}
        </h1>{" "}
        <br />
        <h2 className="Presentation  text-xl">Bienvenue sur mon Portfolio </h2>
        <h2 className="Presentation text-xl ">
          Je m'appelle <span className="font-bold text-[#007acc]">Nassim</span>{" "}
          <span className="font-bold text-black"> Bouziane</span>, Développeur
          Fullstack passionés par l'informatique, À votre service
        </h2>
        <a className="dl_Button flex w-[50%] whitespace-preline justify-center bg-[#007acc] border-2 border-black rounded-full px-10 py-4 font-avenir text-16 text-white primary hover:text-black mt-16 hover:bg-[#e8c012]" href="CV.pdf" download="CVBouzianeNassim.pdf">
          {" "}
          Télécharger le CV
        </a>
      </section>
      <div className="flex_row mt-[5%] flex flex-row">
      <img
        src="/photo.png"
        alt="A Image of me"
        className=" rounded-lg h-fit "
      ></img>
      <img
        width="650"
        src="/retro_desktop.png"
        alt="Image of a retro computeur floating"
        className="flottant h-fit mt-2 xl "
      ></img>
      </div>
    </div>
  );
}
