import { professionalExperienceItems } from '../ProfessionaExperience/constants/constants'

const ProgressBar = ({ currentItem }: { currentItem: number }): JSX.Element => {
  return (
    <div
      className={'w-full relative h-2 bg-green-200 rounded bg-opacity-20 mt-3'}
    >
      <div
        className={`h-2 w-[${
          100 - (currentItem * 100) / (professionalExperienceItems.length - 1)
        }%] bg-gradient-to-r from-green-500 to-green-700 rounded absolute right-0`}
      ></div>
      <div
        className={'w-full  absolute left-0 bottom-[-8px] flex justify-between'}
      >
        {professionalExperienceItems.map((item, index) => (
          <div
            key={`professionalExperienceBall-${index}`}
            className={`h-6 w-6 bg-green-600 rounded-full z-10 border-2 ${
              currentItem === index ? 'border-green-200' : 'border-gray-800'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
