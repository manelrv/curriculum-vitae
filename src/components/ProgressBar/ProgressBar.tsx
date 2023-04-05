import { professionalExperienceItems } from '../ProfessionaExperience/constants/constants'
import { type Dispatch } from 'react'

const ProgressBar = ({
  currentItem,
  setCurrentItem
}: {
  currentItem: number
  setCurrentItem: Dispatch<number>
}): JSX.Element => {
  return (
    <div
      className={'w-full relative h-2 bg-green-600 rounded bg-opacity-20 mt-3'}
    >
      <div
        className={`h-2 w-[${
          100 - (currentItem * 100) / (professionalExperienceItems.length - 1)
        }%] bg-gradient-to-r from-green-500 to-green-700 rounded absolute right-0  transition-all duration-500 ease-in-out'`}
      ></div>
      <div
        className={'w-full  absolute left-0 bottom-[-8px] flex justify-between'}
      >
        {professionalExperienceItems.map((item, index) => (
          <div
            key={`professionalExperienceBall-${index}`}
            className={`h-6 w-6 bg-green-600 rounded-full cursor-pointer z-10 border-2 ${
              currentItem === index ? 'border-green-200' : 'border-gray-200'
            }`}
            onClick={() => {
              setCurrentItem(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
