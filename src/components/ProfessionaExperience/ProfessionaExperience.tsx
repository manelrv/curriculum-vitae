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
    <div className='w-full bg-gradient-to-l from-slate-100 to-white text-gray-900'>
      <div className='max-w-[1280px] m-auto flex flex-col flex-wrap p-10 sm:p-20'>
        <Paragraphs size={'4xl'} weight={'bold'} className={'sm:text-7xl'}>
          Experiencia profesional
        </Paragraphs>
        <Paragraphs
          size={'sm'}
          className={'sm:text-xl transition-all duration-500 ease-in-out pt-8'}
        >
          Cuento con amplia experiencia en el desarrollo web y la gestión de
          servidores y redes, así como en la atención a usuarios y la
          configuración y explotación de bases de datos.
        </Paragraphs>
        <Paragraphs
          size={'sm'}
          className={'sm:text-xl transition-all duration-500 ease-in-out pt-8'}
        >
          Estas son algunas de las empresas en las que he trabajado:
        </Paragraphs>
        <nav
          className={'flex flex-wrap gap-4 pt-8 justify-between items-center'}
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
              }  border-1 border-transparent flex items-center justify-center p-4 rounded-md hidden sm:inline-block`}
              onClick={() => {
                setCurrentItem((current) =>
                  current - 1 >= 0 ? current - 1 : 0
                )
              }}
            >
              <ArrowBackIos color={'success'} style={{ fontSize: 40 }} />
            </div>
          </Tooltip>

          <div
            className={`p-4 m-2 gap-4 flex flex-col sm:flex-row select-none items-center justify-center m-auto`}
          >
            <Paragraphs size={'2xl'} className={'sm:text-4xl text-center'}>
              {professionalExperienceItems[currentItem].company}:
            </Paragraphs>
            <Paragraphs size={'2xl'} className={'sm:text-4xl'}>
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
              }  border-1 border-transparent flex items-center justify-center p-4 rounded-md hidden sm:inline-block`}
              onClick={() => {
                setCurrentItem((current) =>
                  current + 1 >= professionalExperienceItems.length
                    ? current
                    : current + 1
                )
              }}
            >
              <ArrowForwardIos color={'success'} style={{ fontSize: 40 }} />
            </div>
          </Tooltip>
        </nav>
        <ProgressBar
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        <div
          className={
            'mt-4 min-h-[620px] p-4 flex flex-col gap-8 justify-between transition-all duration-500 ease-in-out bg-gray-100 shadow-xl flex flex-col gap-8 p-8 rounded-xl'
          }
        >
          <div className={'flex gap-8 flex-col'}>
            <div
              className={
                'flex flex-wrap justify-center sm:justify-between items-center gap-4 text-center sm:tex-left'
              }
            >
              <Paragraphs
                size={'2xl'}
                weight={'bold'}
                className={
                  'sm:text-4xl transition-all duration-500 ease-in-out border-b-2 border-green-500'
                }
              >
                {professionalExperienceItems[currentItem].role}
              </Paragraphs>

              <img
                src={professionalExperienceItems[currentItem]?.logo}
                alt={`${professionalExperienceItems[currentItem]?.company}__logo`}
                className={'h-32 p-8'}
              />
            </div>

            <div className={'gap-4 flex flex-col'}>
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
                    ' text-black px-2 py-0.5 rounded-xl shadow shadow-gray-900 bg-zinc-100 hover:bg-white text-zinc-500 select-none transition-all duration-500 ease-in-out hover:transform hover:scale-150 cursor-pointer'
                  }
                >
                  <Paragraphs size={'xs'}>{item}</Paragraphs>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionaExperience
