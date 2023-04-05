import Paragraphs from '../Paragraphs'
import { SocialIcon } from 'react-social-icons'
import manelrv from '../../assets/images/manelrv.jpg'
import { socialURLs } from './constants/constants'
import Separator from '../Separator'

const Header = (): JSX.Element => {
  return (
    <div className='w-full bg-zinc-100 text-black pt-10 '>
      <div className='max-w-[1280px] m-auto flex flex-col-reverse sm:flex-row flex-wrap p-10 sm:p-20 gap-8 sm:gap-0 items-center justify-between'>
        <div className='sm:w-2/3 flex flex-col gap-2 items-center sm:items-start'>
          <Paragraphs
            size={'6xl'}
            weight={'semibold'}
            className='text-primary text-center sm:text-left'
          >
            Manel Romero i Vicente
          </Paragraphs>
          <Paragraphs size={'2xl'} className={'pt-6'}>
            Frontend developer.
          </Paragraphs>
          <Paragraphs className='text-2xl text-bold items-center'>
            ✉️ manelrv(at)gmail(dot)com
          </Paragraphs>
          <div className='flex flex-wrap gap-4 pt-8'>
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
        <div className=' self-end flex justify-end  bg-gradient-to-r from-primary to-secondary bg-opacity-20 rounded-full'>
          <img
            src={manelrv}
            alt='manelv__photo__id'
            className='p-2 rounded-full'
            width={300}
            height={300}
            draggable={false}
          />
        </div>
      </div>
      <Separator />
    </div>
  )
}

export default Header
