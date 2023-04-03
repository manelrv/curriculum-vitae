import manelrv from './assets/images/manelrv.jpg'
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <div>
      <div className='w-full bg-[#404040] text-white'>
        <div className='max-w-[1280px] m-auto flex flex-col-reverse sm:flex-row flex-wrap p-10 gap-8 sm:gap-0 items-center justify-between'>
          <div className='sm:w-2/3 flex flex-col gap-2'>
            <p className='text-6xl text-bold'>Manel Romero i Vicente</p>
            <p className='text-4xl text-bold'>Frontend developer.</p>
            <p className='text-2xl text-bold items-center'>
              ✉️ manelrv(at)gmail(dot)com
            </p>
            <div className='flex gap-4 pt-8'>
              <SocialIcon url='https://www.linkedin.com/in/manelrv/' />
              <SocialIcon url='https://www.instagram.com/manelrv/' />
              <SocialIcon url='https://twitter.com/manelrv' />
            </div>
          </div>
          <div className='sm:w-1/3 self-end flex justify-end'>
            <img
              src={manelrv}
              alt='manelv__photo__id'
              className='border-8 rounded-full'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <nav className='bg-gray-400 text-white max-w-[1280px] m-auto flex justify-between py-4 px-10 text-xl'>
        <p>Presentación</p>
        <p>Experiencia profesional</p>
        <p>Stack</p>
        <p>Formación</p>
      </nav>
      <div className='w-full bg-white text-black'>
        <div className='max-w-[1280px] m-auto flex flex-wrap p-10 shadow-xl mb-10 '>
          <p className='text-4xl'>Presentación</p>
          <p className='text-2xl pt-6'>
            ¡Hola! 👋 Soy Manel, un apasionado de la tecnología 🤖💻 y el diseño
            de experiencias de usuario 🎨🌐. Mi objetivo profesional es seguir
            creciendo en el campo del desarrollo web, con un enfoque especial en
            la gestión de datos y comunicaciones, y en la creación de
            experiencias de usuario altamente efectivas y fáciles de usar 🚀👨‍💻.
          </p>
          <p className='text-2xl pt-6'>
            A lo largo de mi carrera, he adquirido una amplia experiencia en el
            desarrollo de soluciones tecnológicas innovadoras y eficientes, que
            han permitido mejorar la eficiencia y la productividad de las
            organizaciones en las que he trabajado. Me apasiona seguir
            aprendiendo y explorando nuevas tecnologías, para estar siempre al
            tanto de las últimas tendencias y ofrecer las mejores soluciones a
            mis clientes 📚🤓.
          </p>
          <p className='text-2xl pt-6'>
            En mi currículum vitae encontrarás más información sobre mi
            experiencia laboral, habilidades técnicas y logros profesionales. Si
            estás buscando a alguien con un alto nivel de compromiso,
            habilidades técnicas excepcionales y una pasión por la tecnología y
            el diseño, ¡no dudes en contactarme! 📧📞👨‍💼 ¡Gracias por visitar mi
            página web! 🙏😊
          </p>
        </div>
      </div>
    </div>
    // <div
    //     className="bg-[#404040] w-full text-white justify-between flex flex-col items-center justify-center">

    // </div>
  )
}

export default App
