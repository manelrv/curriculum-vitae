import blanquernaLogo from '../../../assets/images/logos/blanquernacollege.png'
import labelgrupLogo from '../../../assets/images/logos/labelgrup.png'
import in280Logo from '../../../assets/images/logos/in280.png'
import tecninformLogo from '../../../assets/images/logos/tecninform.gif'

export const professionalExperienceItems: Array<{
  company: string
  timeWorking: string
  role: string
  body: string[]
  logo: string
  technologies: string[]
}> = [
  {
    company: 'LabelGrup',
    timeWorking: '2021 - Actualidad',
    role: 'Desarrollador Frontend',
    body: [
      '👨‍💻🖥️ Actualmente trabajo como Frontend Developer en Labelgrup desde 2021, donde me encargo del desarrollo de la parte frontal de aplicaciones web utilizando ReactJS y NextJS.',
      'Además, también me encargo de la gestión de datos y comunicaciones entre el frontend y el backend, utilizando api rest.',
      'Las aplicaciones que he desarrollado están enfocadas a la gestión farmaceutica, y se utilizan en farmacias y laboratorios de todo el ámbito nacional.'
    ],
    logo: labelgrupLogo,
    technologies: [
      'ReactJS',
      'NextJS',
      'Vite',
      'Api Rest',
      'Javascript',
      'TypeScript',
      'TailwindCSS',
      'Storybook',
      'Git',
      'Docker',
      'Jenkins',
      'CI/CD',
      'AWS',
      'CSS',
      'HTML',
      'SQL'
    ]
  },
  {
    company: 'Blanquerna',
    timeWorking: '2015-2021',
    role: 'Webmaster y Desarrollador Frontend',
    body: [
      '🌐 Previamente, trabajé en Fundació Blanquerna desde 2015 hasta 2021 como Webmaster y Desarrollador de aplicaciones web (backend-frontend), donde gestioné el sitio web corporativo y desarrollé aplicaciones internas utilizando tecnologías como PHP, NodeJS, React, NextJS, Sequelize y MSSQL.',
      "También creé API's para la comunicación con proveedores, gestioné servidores LAMP y PLESK, y puse en producción contenedores Docker."
    ],
    logo: blanquernaLogo,
    technologies: [
      'ReactJS',
      'NodeJS',
      'Api Rest',
      'PHP',
      'Wordpress',
      'Drupal',
      'Jira',
      'Google Analytics',
      'Google Tag Manager',
      'Docker',
      'MsSQL',
      'MySQL',
      'Git',
      'CSS',
      'HTML',
      'Javascript',
      'Linux'
    ]
  },
  {
    company: 'Blanquerna',
    timeWorking: '2003-2015',
    role: 'Técnico informático',
    body: [
      '💻 Antes de eso, trabajé en la misma organización, Fundació Blanquerna, en la Facultat de Psicologia i Ciències de l’Educació i de l’Esport, desde 2003 hasta 2015 como Técnico informático.',
      'Mi trabajo incluyó la instalación y mantenimiento de software y hardware, la atención a usuarios y la gestión y explotación de servidores Windows, Linux y OSX.'
    ],
    logo: blanquernaLogo,
    technologies: [
      'Windows Server',
      'MacOS Server',
      'Linux',
      'Networking',
      'Active Directory',
      'DNS',
      'DHCP',
      'SQL',
      'PHP',
      'SysAdmin',
      'Google Apps',
      'MS Office'
    ]
  },
  {
    company: 'IN280',
    timeWorking: '2014-2018',
    role: 'Webmaster y IT System Manager',
    body: [
      '🔧 En In280, trabajé como Webmaster y IT System Manager desde 2014 hasta 2018, donde me encargué de la instalación, mantenimiento y explotación de servidores Windows, Linux y DSM.',
      "Además, realicé el diseño y configuración de redes wifi y desarrollé sitios web utilizando CMS como Wordpress y Joomla, adaptando y personalizando plantillas, gestionando API's y realizando mantenimiento y copias de seguridad remotas."
    ],
    logo: in280Logo,
    technologies: [
      'Wordpress',
      'Linux',
      'Windows Server',
      'SQL',
      'Synology DSM'
    ]
  },
  {
    company: 'Tecninform S.L.',
    timeWorking: '2001-2003',
    role: 'IT System Manager',
    body: [
      '👨‍💼 En Tecninform S.L., trabajé como IT System Manager desde 2001 hasta 2003, donde me encargué de la instalación y mantenimiento del parque de ordenadores y servidores de la cartera de clientes.',
      'También brindé atención remota y presencial a los usuarios, diseñé e implementé redes, y gestioné y configuré bases de datos SQL.'
    ],
    logo: tecninformLogo,
    technologies: [
      'SQL',
      'Unix',
      'Windows Server',
      'Windows 95/98/NT/2000/XP',
      'Linux',
      'Networking',
      'Printers'
    ]
  }
]
