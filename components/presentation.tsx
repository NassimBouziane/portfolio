export default function Presentation() {
  return (
    <div className="flex flex-row relative top-[100px] left-[10%] w-fit">
      <section className="flex flex-col ">
        <h1 className="Title text-2xl font-thin translate-x-96 ">
          {" "}
          &nbsp; &nbsp;Développeur Fullstack{" "}
        </h1>{" "}
        <br />
        <h2 className="Presentation ">Bienvenue sur mon Portfolio </h2>
        <h2 className="Presentation ">
          Je m'appelle <span className="font-bold text-[#007acc]">Nassim</span>{" "}
          <span className="font-bold text-black"> Bouziane</span>, Développeur
          Fullstack passionés par l'informatique, À votre service
        </h2>
        <a href="CV.pdf" download="CV.pdf">
          {" "}
          Télécharger le CV
        </a>
      </section>
    </div>
  );
}
