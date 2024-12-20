export default function Competence() {
  const cubes = [
    {
      title: 'Python',
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="#ffffff">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]">

</path>
            </g>
        </g>
    </g>
</svg>
      ),
      skills: ['Django', 'Flask', 'HugAPI'],
    },
    {
      title: (<span>
      <span className="text-[#c28e1f]">JavaScript</span>{' '}
      /{' '}
      <span className="text-[#007acc]">TypeScript</span>
    </span>
      ),
      bgColor: 'bg-[#c28e1f]',
      textColor: '',
      svg: (
        <svg
              className="SVGInline-devicon JavascriptPlain-devicon undefined-devicon w-10 h-10 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
             <path fill="#ffffff" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
      ),
      skills: ['ReactJS', 'NextJS', 'Angular', 'Nuxt.JS', 'React Native'],
    },
    {
      title: 'PHP',
      bgColor: 'bg-[#6181B6]',
      textColor: 'text-[#6181b6]',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-10 h-10"
          fill="#ffffff"
        >
          <path d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 0 1-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path>
        </svg>
      ),
      skills: ['Symfony', 'Laravel', 'Doctrine'],
    },
    {
      title: 'Autres',
      textColor: 'text-gray-600',
      bgColor: 'bg-[#019bc6]',
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="#ffffff" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      ),
      skills: ['Git, Docker, AWS', 'Redux', 'GraphQL', 'REST APIs', 'SQL (MYSQL, PostgreSQL) ', 'NoSQL (MongoDB)'],
    },
  ];

  return (
    <div id="competences" className="mt-10">
      <h1 className="Presentation text-5xl text-bold ml-[4.7%] mb-8">Compétences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[5%]">
        {cubes.map((cube, index) => (
          <div
            key={index}
            className={'rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300'}
          >
            <div className="flex flex-col items-center gap-2 mb-3">
              {typeof cube.svg === 'string' ? (
                <img src={cube.svg} alt={`${cube.title} logo`} className="w-10 h-10 object-contain" />
              ) : (
                <div className={`p-8 rounded-full ${cube.bgColor || 'bg-gray-100'}`}>
                  {cube.svg}
                </div>
              )}
              <h2 className={`text-center text-lg font-bold ${cube.textColor}`}>
                {cube.title}
              </h2>
            </div>
            <ul className="text-gray-800 text-sm">
            {cube.skills.map((skill, idx) => (
              <li key={idx} className="mb-1 text-center">
                {skill}
              </li>
            ))}
          </ul>
          </div>
        ))}
      </div>
      <h1 className="mb-5"></h1>
    </div>
  );
}
