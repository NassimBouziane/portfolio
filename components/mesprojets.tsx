"use client"
import Project_card from "./project_card"
import { useState } from 'react'
export default function Mesprojets(){
  let [isShow,setIsShow] = useState(false)
  function show_more(){
    setIsShow(!isShow);
    const hideDiv = document.querySelectorAll('div');

    console.log(hideDiv);
    if(isShow){
      hideDiv.forEach(element => {
        element?.classList.replace('test','flex_Project_card')
        
      });
    }
    else{
      hideDiv.forEach(element => {
        element?.classList.replace('flex_Project_card','test')
        
      });

    }

    
  }
  


    return( <div className="">
         <h1
        className="text-6xl text-bold ml-[4.7%] mb-[5%]"
        
      >
        {" "}
        Mes Projets{" "}
      </h1>{" "}
      <div className="ml-[5%] mr-[5%]  grid grid-cols-1 md:grid-cols-2 gap-6 projects">
<Project_card list={['https://lab5com.fr/sites/lab5com.fr/files/svgs/etna.svg?itok=b64df0b9','https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg','https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg','https://www.vectorlogo.zone/logos/axios/axios-icon.svg','https://vectorwiki.com/images/8OeKq__mysql.svg']} name="Mon premier website : Greento" src="greento.png" descripton="Mon projet d'école s'appelait Greento, c'était un site web de commerce électronique qui se concentrait sur la vente de produits écologiques tels que des gourdes, des pailles et des couverts réutilisables. J'ai utilisé les compétences en React pour développer l'interface utilisateur et j'ai intégré une API pour récupérer les données de produits. C'était un projet passionnant qui m'a permis de découvrir les différentes possibilités offertes par les API et de voir comment elles peuvent être utilisées pour améliorer les applications web. Ce projet m'a appris à comprendre et à utiliser efficacement le framework React.js"/>
<Project_card list={['https://lab5com.fr/sites/lab5com.fr/files/svgs/etna.svg?itok=b64df0b9','https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg','https://vectorwiki.com/images/ScXaS__prisma.svg','https://vectorwiki.com/images/qBpbX__tailwind-css.svg',"https://vectorwiki.com/images/yESCB__mariadb.svg"]} name="Mon premier Code camp : Inclu'chat" src="inclu_chat.png" descripton="Notre projet pour Inclusion Conseil consistait à créer une solution de calendrier et de chat en temps réel pour améliorer la communication et la coordination interne de l'entreprise. Nous avons utilisé le framework Next.js 13 pour développer l'application web, ainsi que les bibliothèques sockets.io pour le chat en temps réel et Full Calendar JS pour le calendrier. La solution comprenait également une page d'administration pour permettre la gestion des utilisateurs et des événements."/>

<Project_card list={['https://lab5com.fr/sites/lab5com.fr/files/svgs/etna.svg?itok=b64df0b9','https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg','https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg "]} name="Mon premier portfolio" src="portfolio_php.png" descripton="Mon premier projet en PHP était un portfolio pour présenter mes travaux d'école. Bien que c'était mon premier projet en utilisant ce langage, j'ai appris énormément de choses. Malheureusement, le design n'était pas aussi bon que je l'aurais voulu, mais j'ai utilisé une API pour afficher les projets de manière efficace et interactive."/>
<Project_card list={['https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg']} name="Mon premier jeu : Snake" src="snake_python.png" descripton="Mon premier projet en Python était un jeu Snake. C'était grâce à ce projet que j'ai découvert ce merveilleux langage de programmation. J'ai appris beaucoup de choses sur la logique de jeux, et j'ai également pu utiliser mes compétences en programmation pour créer un jeu amusant et fonctionnel. Bien que c'était mon premier projet en utilisant Python, j'ai été étonné de la puissance de ce langage et de sa facilité d'utilisation. "/>

<Project_card list={['https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg']} name="Football Result" src="football_result.png" descripton="Mon projet en Python était une application de résultat sportif. Il permettait de voir les résultats des matchs de 6 ligues différentes jusqu'en 2014. J'ai utilisé les compétences en Python pour développer la logique de l'application et pour intégrer une API avec une clé pour récupérer les données de matchs. C'était un projet passionnant qui m'a permis de découvrir les différentes possibilités offertes par les API et de voir comment elles peuvent être utilisées pour améliorer les applications."/>
<Project_card list={['https://vectorwiki.com/images/PDA16__flutter.svg']} name="Mon premier projet RPG Mobile" src="flutter_game.png" descripton="Mon premier projet en utilisant Flutter était un jeu de carte où un joueur pouvait se déplacer librement dans un environnement virtuel créé avec Tiled. Il était encore très basique et vide pour l'instant. mais il a été un excellent point de départ pour apprendre les fonctionnalités de Flutter et les implémenter dans des projets plus avancés. Il m'a également été très utile pour apprendre et comprendre la programmation orientée objet ainsi que le langage de programmation Dart" />
</div>
{!isShow && <button onClick={show_more}>
  <div className="w-[100%] h-[10%] absolute bottom-[0.1%]" ><p className="text-center text-3xl PressStart">Cliquez pour en voir plus </p> <br/><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[100%] h-[20%] TitleInfinite text-center text-6xl ">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
  </div>
</button>|| <button onClick={show_more}>
  <div className="w-[100%] h-[0%] absolute bottom-[0.1%]"> <p className="text-center text-3xl PressStart"> Cliquez pour en voir moins </p> <br/>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[100%] h-[4.5rem] TitleInfinite text-center text-6xl">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>

</div>
</button>}


      <h1 className="mb-[1000px]"></h1>
    </div>
    )
}