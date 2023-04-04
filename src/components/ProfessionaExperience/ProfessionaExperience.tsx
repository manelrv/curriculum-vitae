import { useEffect, useState } from 'react'
import Paragraphs from '../Paragraphs'
import { professionalExperienceItems } from './constants/constants'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import Tooltip from 'rc-tooltip'
import ProgressBar from '../ProgressBar'

const ProfessionaExperience = (): JSX.Element => {
  const [currentItem, setCurrentItem] = useState(0)
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWidthChange = (): void => {
      setPageWidth(window.innerWidth)
    }

    // Agregar un escucha de evento para el cambio de tamaño de ventana
    window.addEventListener('resize', handleWidthChange)

    // Remover el escucha de evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleWidthChange)
    }
  }, [])

  return (
    <div className='w-full bg-gradient-to-l from-zinc-600 to-zinc-800 text-gray-300'>
      <div className='max-w-[1280px] m-auto flex flex-col flex-wrap p-10 sm:p-20 text-gray-300'>
        <Paragraphs size={'3xl'} weight={'bold'}>
          Experiencia profesional
        </Paragraphs>
        <nav
          className={'flex flex-wrap gap-4 pt-8 justify-center items-center'}
        >
          <Tooltip
            overlay={
              professionalExperienceItems[currentItem - 1]?.timeWorking ??
              'inicio'
            }
            placement={pageWidth >= 500 ? 'left' : 'top'}
          >
            <div
              className={`${
                currentItem - 1 >= 0
                  ? 'cursor-pointer hover:(animate-pulse border-green-500)'
                  : 'opacity-50 cursor-not-allowed'
              }  border-1 border-transparent flex items-center justify-center p-4 rounded-md`}
              onClick={() => {
                setCurrentItem((current) =>
                  current - 1 >= 0 ? current - 1 : 0
                )
              }}
            >
              <ArrowBackIos color={'success'} />
            </div>
          </Tooltip>

          <div
            className={`bg-gray-400 p-2 m-2 gap-1 rounded-md text-white flex flex-col items-center w-32 sm:w-56 border-1 border-transparent select-none`}
          >
            <Paragraphs
              size={'xs'}
              className={
                'sm:text-sm transition-all duration-500 ease-in-out text-center'
              }
            >
              {professionalExperienceItems[currentItem].company}
            </Paragraphs>
            <Paragraphs
              size={'xs'}
              className={'sm:text-sm transition-all duration-500 ease-in-out'}
            >
              {professionalExperienceItems[currentItem].timeWorking}
            </Paragraphs>
          </div>
          <Tooltip
            overlay={
              professionalExperienceItems[currentItem + 1]?.timeWorking ??
              'final'
            }
            placement={pageWidth >= 500 ? 'right' : 'top'}
            destroyTooltipOnHide={true}
            trigger={['hover']}
            transitionName={'rc-tooltip-zoom'}
          >
            <div
              className={`${
                currentItem + 1 < professionalExperienceItems.length
                  ? 'cursor-pointer hover:(animate-pulse border-green-500)'
                  : 'opacity-50 cursor-not-allowed'
              }  border-1 border-transparent flex items-center justify-center p-4 rounded-md`}
              onClick={() => {
                setCurrentItem((current) =>
                  current + 1 >= professionalExperienceItems.length
                    ? current
                    : current + 1
                )
              }}
            >
              <ArrowForwardIos color={'success'} />
            </div>
          </Tooltip>
        </nav>
        <ProgressBar currentItem={currentItem} />

        <div
          className={
            'mt-4 min-h-[620px] p-4 flex flex-col gap-8 justify-between transition-all duration-500 ease-in-out bg-gray-800 flex flex-col gap-8 p-8 rounded-xl'
          }
        >
          <div className={'flex gap-8 flex-col'}>
            <div
              className={
                'flex flex-wrap justify-center sm:justify-between items-center gap-4 text-center sm:tex-left'
              }
            >
              <Paragraphs
                size={'sm'}
                weight={'bold'}
                className={
                  'sm:text-2xl transition-all duration-500 ease-in-out border-b-2 border-green-500'
                }
              >
                {professionalExperienceItems[currentItem].role}
              </Paragraphs>

              <img
                src={professionalExperienceItems[currentItem]?.logo}
                alt={`${professionalExperienceItems[currentItem]?.company}__logo`}
                className={'h-32 bg-slate-200 rounded-xl p-8'}
              />
            </div>

            <div
              className={
                'bg-gray-500 rounded-xl shadow-lg shadow-gray-500 p-8 gap-4 flex flex-col'
              }
            >
              {professionalExperienceItems[currentItem].body.map(
                (item, index) => (
                  <Paragraphs
                    key={`professionalExperienceItem-${index}`}
                    size={'sm'}
                    weight={'normal'}
                    className={
                      'sm:text-xl transition-all duration-500 ease-in-out'
                    }
                  >
                    {item}
                  </Paragraphs>
                )
              )}
            </div>
          </div>
          <div
            className={'flex flex-wrap gap-8 justify-between lg:justify-start'}
          >
            {professionalExperienceItems[currentItem].technologies.map(
              (item, index) => (
                <div
                  key={`technology__${item}`}
                  className={
                    'bg-slate-200 text-black px-2 py-0.5 rounded-xl shadow-lg shadow-gray-900'
                  }
                >
                  <Paragraphs size={'xs'}>{item}</Paragraphs>
                </div>
              )
            )}
          </div>
        </div>
        <Paragraphs
          size={'sm'}
          className={'sm:text-xl transition-all duration-500 ease-in-out pt-8'}
        >
          📊 En resumen, cuento con amplia experiencia en el desarrollo web y la
          gestión de servidores y redes, así como en la atención a usuarios y la
          configuración y explotación de bases de datos.
        </Paragraphs>
      </div>
    </div>
  )
}

export default ProfessionaExperience
