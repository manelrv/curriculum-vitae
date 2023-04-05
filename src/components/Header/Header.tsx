import Paragraphs from '../Paragraphs'
import { SocialIcon } from 'react-social-icons'
import manelrv from '../../assets/images/manelrv.jpg'
import { socialURLs } from './constants/constants'

const Header = (): JSX.Element => {
  return (
    <div className='w-full bg-zinc-200 text-black pt-10 border-b-2 border-zinc-400 '>
      <div className='max-w-[1280px] m-auto flex flex-col-reverse sm:flex-row flex-wrap p-10 sm:p-20 gap-8 sm:gap-0 items-center justify-between'>
        <div className='sm:w-2/3 flex flex-col gap-2'>
          <Paragraphs
            size={'6xl'}
            weight={'semibold'}
            className='text-green-600'
          >
            Manel Romero i Vicente
          </Paragraphs>
          <Paragraphs size={'2xl'} className={'pt-6'}>
            Frontend developer.
          </Paragraphs>
          <Paragraphs className='text-2xl text-bold items-center'>
            ✉️ manelrv(at)gmail(dot)com
          </Paragraphs>
          <div className='flex gap-4 pt-8'>
            {socialURLs.map((socialURL, index) => (
              <SocialIcon
                key={`socialURL-${index}`}
                url={socialURL.url}
                label={socialURL.label}
                target={'_blank'}
                className={
                  'hover:(animate-pulse border-green-500) border-2 rounded-full p-2 border-transparent'
                }
              />
            ))}
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
  )
}

export default Header
