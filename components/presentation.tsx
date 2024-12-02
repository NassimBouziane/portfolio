export default function Presentation() {
  return (
    <div className="flex flex_collum flex-row relative top-[100px] w-fit gap-8 overflow-hidden ">
      <section className="flex flex-col ml-[10%] w-[50%]">
        <h1 className="Title text-lg md:text-6xl font-thin translate-x-96 ">
          {" "}
          &nbsp; &nbsp;Développeur Fullstack{" "}
        </h1>{" "}
        <br />
        <h2 className="Presentation text-sm md:text-2xl">
          Bienvenue sur mon Portfolio{" "}
        </h2> <br/>
        <h2 className="Presentation text-sm  md:text-2xl ">
  Je m'appelle <span className="font-bold text-[#007acc]">Nassim</span>{" "}
  <span className="font-bold text-black">Bouziane</span>, étudiant en alternance en préparation d'un diplôme de Master Architecte de Systèmes d'Information. Passionné par l'informatique, je partage mes projets et mon parcours d'études.
  <br/><span className="text-[#c28e1f] font-bold">Les feedbacks</span> sont toujours appréciés pour m'aider à m'améliorer. Merci de visiter mon portfolio.
</h2>

<h3 className="text-sm md:text-2xl mt-4">
  Professionnel de l'ingénierie avec un <span className="font-bold text-[#007acc]">Bachelor Concepteur Développeur d'Applications</span> obtenu à <a href="https://etna.io" target="_blank" rel="noopener noreferrer">l'ETNA</a>, spécialisé en développement web.
</h3>

<h3 className="text-sm md:text-2xl">
  Mes stacks favorite : <span className="font-bold text-[#c28e1f]">ReactJS, Django, Symfony, Micro-services, Docker</span>
</h3>
        <a
          className="dl_Button flex w-[50%]  text-sm md:text-base whitespace-preline justify-center bg-[#007acc] border-2 border-black rounded-full px-20 py-6 md:px-10 md:py-4 font-avenir  text-white primary hover:text-black mt-16 hover:bg-[#e8c012]"
          target="_blank "
          href="CV.pdf"
        >
          {" "}
          Télécharger le CV
        </a>
      </section>
      <div className="flex_row  flex ">
        <img
          height="400"
          width="400"
          src="photov2.png"
          alt="An image of Nassim Bouziane"
          className="rounded-[10%] h-fit "
        ></img> 
      </div>  
    </div>
  );
}
