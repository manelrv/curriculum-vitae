import Paragraphs from '../Paragraphs'
import { SocialIcon } from 'react-social-icons'
import manelrv from '../../assets/images/manelrv.jpg'
import { socialURLs } from './constants/constants'

const Header = (): JSX.Element => {
  return (
    <div className='w-full bg-[#404040] text-white pt-10 mt-10'>
      <div className='max-w-[1280px] m-auto flex flex-col-reverse sm:flex-row flex-wrap p-10 gap-8 sm:gap-0 items-center justify-between'>
        <div className='sm:w-2/3 flex flex-col gap-2'>
          <Paragraphs size={'6xl'} className='font-gugi text-green-500'>
            Manel Romero i Vicente
          </Paragraphs>
          <Paragraphs size={'2xl'} className={'font-inter'}>
            Frontend developer.
          </Paragraphs>
          <p
            className='text-2xl text-bold items-center'
            style={{ fontFamily: 'Montserat, sans-serif' }}
          >
            ✉️ manelrv(at)gmail(dot)com
          </p>
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
