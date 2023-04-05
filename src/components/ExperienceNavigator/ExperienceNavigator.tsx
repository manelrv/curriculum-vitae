import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import Tooltip from 'rc-tooltip'
import Paragraphs from '../Paragraphs'
import { type Dispatch } from 'react'

const ExperienceNavigator = (props: {
  prevTimeWorking?: string
  nextTimeWorking?: string
  setCurrentItem: Dispatch<number>
  currentItem: number
  pageWidth: number
  company: string
  timeWorking: string
  arrayLength: number
}): JSX.Element => {
  const {
    prevTimeWorking,
    nextTimeWorking,
    setCurrentItem,
    currentItem,
    pageWidth,
    company,
    timeWorking,
    arrayLength
  } = props
  return (
    <div className={'flex flex-wrap gap-4 pt-8 justify-between items-center'}>
      <Tooltip
        overlay={prevTimeWorking ?? 'inicio'}
        placement={pageWidth >= 500 ? 'left' : 'top'}
      >
        <div
          className={`${
            currentItem - 1 >= 0
              ? 'cursor-pointer hover:(animate-pulse border-green-500)'
              : 'opacity-50 cursor-not-allowed'
          }  border-1 border-transparent flex items-center justify-center p-4 rounded-md hidden sm:inline-block`}
          onClick={() => {
            setCurrentItem(currentItem - 1 >= 0 ? currentItem - 1 : 0)
          }}
        >
          <ArrowBackIos color={'success'} style={{ fontSize: 40 }} />
        </div>
      </Tooltip>

      <div
        className={`p-4 m-2 gap-4 flex flex-col sm:flex-row select-none items-center justify-center m-auto`}
      >
        <Paragraphs size={'2xl'} className={'sm:text-4xl text-center'}>
          {company}:
        </Paragraphs>
        <Paragraphs size={'2xl'} className={'sm:text-4xl'}>
          {timeWorking}
        </Paragraphs>
      </div>
      <Tooltip
        overlay={nextTimeWorking ?? 'final'}
        placement={pageWidth >= 500 ? 'right' : 'top'}
        destroyTooltipOnHide={true}
        trigger={['hover']}
        transitionName={'rc-tooltip-zoom'}
      >
        <div
          className={`${
            currentItem + 1 < arrayLength
              ? 'cursor-pointer hover:(animate-pulse border-green-500)'
              : 'opacity-50 cursor-not-allowed'
          }  border-1 border-transparent flex items-center justify-center p-4 rounded-md hidden sm:inline-block`}
          onClick={() => {
            setCurrentItem(
              currentItem + 1 >= arrayLength ? currentItem : currentItem + 1
            )
          }}
        >
          <ArrowForwardIos color={'success'} style={{ fontSize: 40 }} />
        </div>
      </Tooltip>
    </div>
  )
}

export default ExperienceNavigator
