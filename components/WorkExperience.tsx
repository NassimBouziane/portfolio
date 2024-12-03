import { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function WorkExperience() {
  const sectionRef = useRef(null);

  return (
    <div className="relative top-[250px]" ref={sectionRef} id="apropos">
      <h1
        className={'Presentation text-5xl text-bold ml-[5%] mb-[5%] opacity-100 translate-y-0'}
      >
        Expérience professionnelle
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#ffffff',
            color: '#333',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            border: '1px solid #e0e0e0',
          }}
          contentArrowStyle={{
            borderRight: '7px solid  #ffffff',
          }}
          date="Mai 2023 - Jan 2024"
          icon={<img src="https://cdn.jaimelesstartups.fr/wp-content/uploads/2022/03/Logo%20de%20la%20startup%20OMAJ.png" alt="omaj's logo" className="rounded-full hover:scale-125 transition-all duration-300"/>}
          iconOnClick={() => window.open('https://omaj.fr/')}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Alternant Développeur Fullstack @OMAJ
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600">
            Django | React.JS | Python | PostgreSQL | AWS | Docker
          </h4>
          <p className="text-sm mt-2 text-gray-700">
            OMAJ est une plateforme de dépôt-vente en ligne spécialisée dans les vêtements de seconde main, qui utilise la technologie pour soutenir une mission durable.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h1 className="mb-[400px] mt-[300px]"></h1>
    </div>
  );
}
