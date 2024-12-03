'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function PersonnalProject() {
  const [isShow, setIsShow] = useState(false);
  function showMore() {
    setIsShow(!isShow);
    const hideDiv = document.querySelectorAll('div');

    if (isShow) {
      hideDiv.forEach((element) => {
        element?.classList.replace('test', 'flex_Project_card');
      });
    } else {
      hideDiv.forEach((element) => {
        element?.classList.replace('flex_Project_card', 'test');
      });
    }
  }

  return (
    <div className="" id="projets">
      <h1 className="text-6xl text-bold ml-[4.7%] mb-[5%]"> Mes Projets </h1>{' '}
      <div className="ml-[5%] mr-[5%]  grid grid-cols-1 md:grid-cols-2 gap-6 projects">
      <ProjectCard
  list={[
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    'https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg',
  ]}
  name="MyYoutube"
  src="myyoutube.png"
  descripton="Application web en Angular pour la gestion de la diffusion de vidéos. Microservice d'encodage vidéo en Go avec FFMPEG pour l'encodage en tâche de fond. Microservice de mailing avec Spring Boot et JavaMail pour l'envoi automatisé d'emails. Microservice de recherche basé sur ElasticSearch pour gérer les requêtes de vidéos. Application mobile en React Native reprenant les fonctionnalités du site. API RESTful avec Spring Boot pour l'intégration et la communication entre les microservices."
/>
        <ProjectCard
          list={[
            'https://lab5com.fr/sites/lab5com.fr/files/svgs/etna.svg?itok=b64df0b9',
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
            'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
            'https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg',
            'https://www.vectorlogo.zone/logos/axios/axios-icon.svg',
            'https://vectorwiki.com/images/8OeKq__mysql.svg',
          ]}
          name="Mon premier website : Greento"
          src="greento.png"
          descripton="Mon projet d'école s'appelait Greento, c'était un site web de commerce électronique qui se concentrait sur la vente de produits écologiques tels que des gourdes, des pailles et des couverts réutilisables. J'ai utilisé les compétences en React pour développer l'interface utilisateur et j'ai intégré une API pour récupérer les données de produits. C'était un projet passionnant qui m'a permis de découvrir les différentes possibilités offertes par les API et de voir comment elles peuvent être utilisées pour améliorer les applications web. Ce projet m'a appris à comprendre et à utiliser efficacement le framework React.js"
        />
        <ProjectCard
          list={[
            'https://www.svgrepo.com/show/101606/trophy.svg',
            'https://lab5com.fr/sites/lab5com.fr/files/svgs/etna.svg?itok=b64df0b9',
            'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
            'https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg',
            'https://vectorwiki.com/images/ScXaS__prisma.svg',
            'https://vectorwiki.com/images/qBpbX__tailwind-css.svg',
            'https://vectorwiki.com/images/yESCB__mariadb.svg',
          ]}
          name="Mon premier Code camp : Inclu'chat"
          src="inclu_chat.png"
          descripton="Notre projet pour Inclusion Conseil consistait à créer une solution de calendrier et de chat en temps réel pour améliorer la communication et la coordination interne de l'entreprise. Nous avons utilisé le framework Next.js 13 pour développer l'application web, ainsi que les bibliothèques sockets.io pour le chat en temps réel et Full Calendar JS pour le calendrier. La solution comprenait également une page d'administration pour permettre la gestion des utilisateurs et des événements."
        />
             <ProjectCard
          list={[
            'https://www.svgrepo.com/show/101606/trophy.svg',
            'https://lab5com.fr/sites/lab5com.fr/files/svgs/etna.svg?itok=b64df0b9',
            'https://vectorwiki.com/images/F79rZ__react-native.svg',
            'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
            'https://vectorwiki.com/images/ScXaS__prisma.svg',
            'https://vectorwiki.com/images/qBpbX__tailwind-css.svg',
            'https://vectorwiki.com/images/yESCB__mariadb.svg',

          ]}
          name="Code camp Mobile : Etnamargement"
          src="Etnamargement.png"
          descripton="Etnamargement est une application d'émargement innovante développée avec React Native, une technologie de développement d'applications mobiles multi-plateformes, et une API Express associée à Prisma, une base de données moderne et performante. Cette application permet à l'école ETNA de gérer efficacement la présence de ses étudiants lors des cours et des examens en temps réel.

          Grâce à Etnamargement, les enseignants peuvent facilement prendre la présence des étudiants en scannant leur QR code individuel à l'aide de leur téléphone portable. Les données de présence sont ensuite stockées dans une base de données sécurisée, permettant une gestion facile et rapide des absences."
        />
        <ProjectCard
  list={[
    'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
  ]}
  name="API RESTful"
  src="apirestful.png"
  descripton="Développement d'une API sécurisée avec .NET Core 3.1, intégrant une authentification JWT et un système de rôles. Conception des modèles C# liés aux tables de la base de données et configuration des migrations avec Entity Framework Core."
/>
<ProjectCard
  list={[
    'https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8b/L%C3%96VE_app_icon_%280.10.1%29.svg',
  ]}
  name="Eco-Polia"
  src="ecopolia.png"
  descripton="Projet de fin d'étude du Bachelor en Lua et LÖVE. Jeu d'aventure sur l'écologie avec création d'un moteur de jeu personnalisé (gestion des collisions, personnage, UI, et cartes)."
/>
<ProjectCard
  list={[
    'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/60/Symfony2.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg',
  ]}
  name="Crowdin"
  src="crowdin.png"
  descripton="Développement d'un site d'entraide pour traductions de projets avec Symfony 7.0. Fonctionnalités : création de comptes, affichage des projets, envoi de traductions, import/export CSV, et notifications par email via Mailtrap."
/>

      </div>
      {(!isShow && (
        <button onClick={showMore}>
          <div className="w-[100%] h-[14%] absolute bottom-[0.1%]">
            <p className="text-center text-3xl PressStart">
              Cliquez pour en voir plus{' '}
            </p>{' '}
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[100%] h-[20%] TitleInfinite text-center text-6xl "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </button>
      ))
      }
    </div>
  );
}
