import Paragraphs from '../Paragraphs'
import { presentationItems } from './contants/constants'
const Presentation = (): JSX.Element => {
  return (
    <div className='w-full bg-gray-900 text-gray-300'>
      <div className='max-w-[1280px] m-auto flex flex-wrap p-10 shadow-xl text-gray-300'>
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
