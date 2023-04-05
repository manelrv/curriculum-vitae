import { useEffect, useState } from 'react'
import Paragraphs from '../Paragraphs'
import { professionalExperienceItems } from './constants/constants'
import ProgressBar from '../ProgressBar'
import Separator from '../Separator'
import TechnologiesCloud from '../TechnologiesCloud'
import ExperiencePanel from '../ExperiencePanel'
import ExperienceNavigator from '../ExperienceNavigator'

const ProfessionaExperience = (): JSX.Element => {
  const [currentItem, setCurrentItem] = useState(0)
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWidthChange = (): void => {
      setPageWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWidthChange)
    return () => {
      window.removeEventListener('resize', handleWidthChange)
    }
  }, [])

  return (
    <div className='w-full bg-gradient-to-l from-slate-100 to-white text-gray-900'>
      <div className='max-w-[1280px] m-auto flex flex-col flex-wrap p-10 sm:p-20'>
        <Paragraphs size={'4xl'} weight={'bold'} className={'sm:text-7xl'}>
          Experiencia profesional
        </Paragraphs>
        <Paragraphs
          size={'sm'}
          className={'sm:text-xl transition-all duration-500 ease-in-out pt-8'}
        >
          Cuento con amplia experiencia👷‍ en el desarrollo web🕸️ y la gestión
          de servidores y redes, así como en la atención a usuarios✍️ y la
          configuración y explotación de bases de datos. Estas son algunas de
          las empresas🧭 en las que he trabajado:
        </Paragraphs>
        <ExperienceNavigator
          {...professionalExperienceItems[currentItem]}
          setCurrentItem={setCurrentItem}
          currentItem={currentItem}
          pageWidth={pageWidth}
          arrayLength={professionalExperienceItems?.length}
        />
        <ProgressBar
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        <div
          className={
            'mt-4 min-h-[620px] p-4 flex flex-col gap-8 justify-between transition-all duration-500 ease-in-out bg-gray-100 shadow-xl flex flex-col gap-8 p-8 rounded-xl'
          }
        >
          <ExperiencePanel {...professionalExperienceItems[currentItem]} />
          <TechnologiesCloud
            technologies={professionalExperienceItems[currentItem].technologies}
          />
        </div>
      </div>
      <Separator />
    </div>
  )
}

export default ProfessionaExperience
