import { useState } from 'react'
import Paragraphs from '../Paragraphs'
import { professionalExperienceItems } from './constants/constants'
const ProfessionaExperience = (): JSX.Element => {
  const [currentItem, setCurrentItem] = useState(0)
  return (
    <div className='w-full bg-black text-gray-300'>
      <div className='max-w-[1280px] m-auto flex flex-col flex-wrap p-10 shadow-xl text-gray-300'>
        <Paragraphs size={'3xl'} weight={'bold'}>
          Experiencia profesional
        </Paragraphs>
        <nav className={'flex flex-wrap gap-8 pt-8'}>
          {professionalExperienceItems.map((item, index) => (
            <button
              key={`${item.company}-${index}`}
              disabled={currentItem === index}
              className={`${
                currentItem === index
                  ? 'bg-gray-700'
                  : 'bg-gray-900 hover:(animate-pulse border-blue-300)'
              } p-2 m-2 rounded-md text-gray-300  border-1 border-transparent transition-all duration-500 ease-in-out`}
              onClick={() => {
                setCurrentItem(index)
              }}
            >
              <Paragraphs>{item.company}</Paragraphs>
            </button>
          ))}
        </nav>
        <div
          className={
            'mt-4 min-h-[580px] p-4 flex flex-col gap-8 justify-between transition-all duration-500 ease-in-out bg-gray-800 flex flex-col gap-8 p-8 rounded-xl'
          }
        >
          <div className={'flex gap-8 flex-col'}>
            <Paragraphs size={'xl'} weight={'bold'}>
              Período trabajado:
              <Paragraphs
                size={'xl'}
                weight={'normal'}
                className={
                  'inline-block ml-2 transition-all duration-500 ease-in-out'
                }
              >
                {professionalExperienceItems[currentItem].timeWorking}
              </Paragraphs>
            </Paragraphs>
            <Paragraphs size={'xl'} weight={'bold'}>
              Puesto:
              <Paragraphs
                size={'xl'}
                weight={'normal'}
                className={
                  'inline-block ml-2 transition-all duration-500 ease-in-out'
                }
              >
                {professionalExperienceItems[currentItem].role}
              </Paragraphs>
            </Paragraphs>
            <div
              className={
                'bg-gray-500 rounded-xl shadow-lg shadow-gray-500 p-8 gap-4 flex flex-col'
              }
            >
              {professionalExperienceItems[currentItem].body.map(
                (item, index) => (
                  <Paragraphs
                    key={`professionalExperienceItem-${index}`}
                    size={'xl'}
                    weight={'normal'}
                  >
                    {item}
                  </Paragraphs>
                )
              )}
            </div>
          </div>
          <Paragraphs size={'lg'}>
            📊 En resumen, cuento con amplia experiencia en el desarrollo web y
            la gestión de servidores y redes, así como en la atención a usuarios
            y la configuración y explotación de bases de datos.
          </Paragraphs>
        </div>
      </div>
    </div>
  )
}

export default ProfessionaExperience
