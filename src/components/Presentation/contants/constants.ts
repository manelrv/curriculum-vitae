import reactLogo from '../../../assets/images/logos/react.png'
import html5Logo from '../../../assets/images/logos/html5.png'
import jsLogo from '../../../assets/images/logos/js.png'

export const presentationItems: Array<{
  body: string
  image: string
  alt: string
  imgPosition: 'left' | 'right'
}> = [
  {
    body: '¡Hola! 👋 Soy Manel, un apasionado de la tecnología 🤖💻 y el diseño de experiencias de usuario 🎨🌐. Mi objetivo profesional es seguir creciendo en el campo del desarrollo web, con un enfoque especial en la gestión de datos y comunicaciones, y en la creación de experiencias de usuario altamente efectivas y fáciles de usar 🚀👨‍💻.',
    image: reactLogo,
    alt: 'ReactJS Logo',
    imgPosition: 'right'
  },
  {
    body: 'A lo largo de mi carrera, he adquirido una amplia experiencia en el desarrollo de soluciones tecnológicas innovadoras y eficientes, que han permitido mejorar la eficiencia y la productividad de las organizaciones en las que he trabajado. Me apasiona seguir aprendiendo y explorando nuevas tecnologías, para estar siempre al tanto de las últimas tendencias y ofrecer las mejores soluciones a mis clientes 📚🤓.',
    image: jsLogo,
    alt: 'JavaScript Logo',
    imgPosition: 'left'
  },
  {
    body: 'En este currículum encontrarás más información sobre mi experiencia laboral, habilidades técnicas y logros profesionales. Si estás buscando a alguien con un alto nivel de compromiso, habilidades técnicas excepcionales y una pasión por la tecnología y el diseño, ¡no dudes en contactarme! 📧👨‍💼 ¡Gracias por visitar mi página web! 🙏😊',
    image: html5Logo,
    alt: 'HTML5 Logo',
    imgPosition: 'right'
  }
]
