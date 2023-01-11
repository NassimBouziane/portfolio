import { useInView } from "react-intersection-observer";
import { Tab } from '@headlessui/react'
import { useEffect, useRef } from "react";


export default function APropos() {
  const [ref, inView] = useInView({ threshold: 0.0001 })
  useEffect(() => {
    {inView ? document.getElementById('test')?.focus() : undefined};
  },[inView])

  return (
    <div id="Apropos" className="relative top-[250px]"  ref={ref}>
      {" "}
      <h1  className= {inView ? "Presentation text-6xl text-bold ml-[5%]": undefined}> À propos </h1>{" "}

      <Tab.Group>
      <Tab.List className="mt-[5%] ml-[5%] flex flex-row gap-20">
        <Tab id="test" className="PressStart text-xl  text-gray-500 focus:text-black focus:outline-none">Mon histoire</Tab>
        <Tab  className="PressStart text-xl text-gray-500 focus:text-black focus:outline-none">Expérience</Tab>
        <Tab className="PressStart text-xl text-gray-500 focus:text-black focus:outline-none">Education</Tab>
      </Tab.List>
      <Tab.Panels className="ml-10 mt-10 w-[50%]">
        <Tab.Panel>Depuis mon plus jeune âge, j'ai toujours été intrigué par le monde qui m'entoure et j'ai une soif inextinguible d'apprendre de nouvelles choses. Cette curiosité m'a poussé à explorer différents domaines, mais c'est finalement dans <strong className="PressStart text-xs"> le développement informatique</strong> que j'ai trouvé ma passion.  <br/> <br/>

Tout a commencé avec ma fascination pour  <strong className="PressStart text-xs">les jeux vidéo</strong>. Je passais des heures à découvrir les différents aspects de ces univers virtuels, et c'est alors que j'ai compris que ce qui m'intéressait le plus était la façon dont ils étaient créés. C'est à ce moment-là que j'ai décidé de me lancer dans l'apprentissage de la programmation. <br/> <br/>

Depuis, j'ai travaillé dur pour améliorer mes compétences en développement, en apprenant à travers des cours en ligne, des projets personnels et en travaillant sur des projets professionnels. J'ai également eu l'occasion de travailler en équipe, ce qui m'a permis de développer mes compétences de communication et de collaboration. <br/> <br/>

Aujourd'hui, je suis fier de ce que j'ai accompli jusqu'à présent, et je suis impatient de <strong>poursuivre</strong> mon parcours dans le développement informatique. J'espère que cette section de mon portfolio vous donnera un aperçu de mon parcours et de <strong>ma passion pour l'apprentissage et la découverte.</strong></Tab.Panel>


        <Tab.Panel>
        Formation continue à l'ETNA, où j'ai été plongé dans un environnement de projet de développement web intense. J'ai participé à de nombreux projets en équipe qui se sont étalés sur des périodes "rush" de 1 à 3 semaines, chacun avec des défis uniques et des objectifs précis. <br/><br/>
Ces projets m'ont permis d'acquérir des compétences pratiques qui sont directement transférables sur le marché du travail, telles que la gestion de projets, la communication en équipe et la résolution de problèmes sous pression.
Cette expérience a également renforcé ma soif de créer et de réaliser des projets personnels, j'ai donc commencé à développer des projets personnels dans mon temps libre, et je partage sur mon <a target="_blank" href="https://github.com/NassimBouziane" className="underline underline-offset-4"> Github </a>. <img src="CLICKHERE.png" width="60" className="inline-block PresentationInfinite"></img>
        </Tab.Panel>
        <Tab.Panel>1 an de fac d'informatique mathématiques à l'université d'Evry, où j'ai principalement travaillé avec les technologies <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong>. Ce cursus m'a permis de comprendre les fondamentaux du développement web, et j'ai été capable de créer des sites web simples en utilisant ces technologies. <br/> <br/>
Actuellement, j'ai changé mon parcours de formation pour continuer à l'<strong>ETNA</strong> où je suis en formation continue pour améliorer mes compétences en développement web. J'ai pu découvrir des technologies plus modernes comme le framework React et Next.js, ainsi que le langage de programmation TypeScript, qui m'ont permis de construire des applications web plus complexe et performante.

En complément de ces formations, j'ai participé à des projets personnels pour améliorer mes compétences, notamment en utilisant les technologies mentionnées précédemment, ce qui m'a permis de me perfectionner dans la création de projet web complexe et performant.</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
      <h1 className="mb-[1000px]"></h1>
      
    </div>
  );
}

// 1000px pour le propos <h1 className="mb-[1000px]"></h1>
