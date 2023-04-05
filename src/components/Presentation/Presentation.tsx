import Paragraphs from '../Paragraphs'
import { presentationItems } from './contants/constants'
import manelrvLogo from '../../assets/images/manelrvLogo.png'
const Presentation = (): JSX.Element => {
  return (
    <div className='w-full bg-gradient-to-r from-slate-100 to-white text-gray-900 border-b-2 border-zinc-400'>
      <div className='max-w-[1280px] m-auto flex flex-col flex-wrap p-10 sm:p-20'>
        <img
          src={manelrvLogo}
          alt={'manelrv__logo'}
          className={'m-auto w-32 sm:w-50 pb-10'}
        />
        <Paragraphs size={'4xl'} weight={'bold'} className={'sm:text-7xl'}>
          Presentación
        </Paragraphs>
        {presentationItems.map((item, index) => (
          <div
            key={`presentationItem-${index}`}
            className={`flex gap-10 flex-col items-center justify-between ${
              item.imgPosition === 'left'
                ? 'sm:flex-row-reverse'
                : 'sm:flex-row'
            }`}
          >
            <Paragraphs size={'base'} className='pt-6 sm:text-xl'>
              {item.body}
            </Paragraphs>
            <img src={item.image} alt={item.alt} className={'h-20'} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Presentation
