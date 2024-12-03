import { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Education() {
  const sectionRef = useRef(null);

  return (
    <div className="" ref={sectionRef} id="education">
      <h1 className={'Presentation text-5xl text-bold ml-[5%] mb-[5%] opacity-100 translate-y-0'}>
        Éducation
      </h1>
      <VerticalTimeline>
        {/* Master Architecte logiciel */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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
          date={<span style={{ color: '#333' }}>Jan 2025 - Oct 2026</span>}
                    icon={<span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}><svg className="jss74" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg></span>}

          iconOnClick={() => window.open('https://www.etna.io/')}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Master Architecte logiciel, développeur d’application
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600">
            ETNA Ivry-sur-Seine
          </h4>
          <p className="text-sm mt-2 text-gray-700">
            Formation avancée en architecture logicielle, conception de systèmes complexes, et développement d’applications.
          </p>
        </VerticalTimelineElement>

        {/* Bachelor Concepteur développeur d'applications */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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
          date={<span style={{ color: '#333' }}>Sep 2022 - Jan 2025</span>}
                    icon={<span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}><svg className="jss74" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg></span>}

          iconOnClick={() => window.open('https://www.etna.io/')}
        >

          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Bachelor Concepteur développeur d'applications
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600">
            ETNA Ivry-sur-Seine
          </h4>
          <p className="text-sm mt-2 text-gray-700">
            Développement d’applications, conception de systèmes informatiques et approches agiles.
          </p>
        </VerticalTimelineElement>

        {/* Licence informatique */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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
          date={<span style={{ color: '#333' }}>Sep 2020 - Jun 2022</span>}
                    icon={<span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}><svg className="jss74" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg></span>}

          iconOnClick={() => window.open('https://www.universite-paris-saclay.fr/')}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Licence informatique
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600">
            Université d'Evry
          </h4>
          <p className="text-sm mt-2 text-gray-700">
            Spécialisation en algorithmie, développement web (HTML5, CSS3), et programmation (C, Processing).
          </p>
        </VerticalTimelineElement>

        {/* Baccalauréat scientifique */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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
          date={<span style={{ color: '#333' }}>2019 - 2020</span>}
                    icon={<span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}><svg className="jss74" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg></span>}

          iconOnClick={() => window.open('https://www.ac-aix-marseille.fr')}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            Baccalauréat scientifique
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md font-medium text-gray-600">
            Lycée international Alexandre Dumas, Aix-Marseille
          </h4>
          <p className="text-sm mt-2 text-gray-700">
            Mention assez bien, avec un focus sur les mathématiques, la physique et les sciences de l'ingénieur.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h1 className="mb-5"></h1>
    </div>
  );
}
