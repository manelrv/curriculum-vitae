import Paragraphs from '../Paragraphs'
import { presentationItems } from './contants/constants'
import manelrvLogo from '../../assets/images/manelrvLogo.png'
const Presentation = (): JSX.Element => {
  return (
    <div className='w-full bg-gradient-to-r from-gray-900 to-gray-700 text-gray-300'>
      <div className='max-w-[1280px] m-auto flex flex-col flex-wrap p-10 sm:p-20  text-gray-300'>
        <img
          src={manelrvLogo}
          alt={'manelrv__logo'}
          className={'m-auto pb-10'}
        />
        <Paragraphs size={'3xl'} weight={'bold'}>
          Presentación
        </Paragraphs>
        {presentationItems.map((item, index) => (
          <Paragraphs
            key={`presentationItem-${index}`}
            size={'base'}
            className='pt-6 sm:text-xl'
          >
            {item}
          </Paragraphs>
        ))}
      </div>
    </div>
  )
}

export default Presentation
