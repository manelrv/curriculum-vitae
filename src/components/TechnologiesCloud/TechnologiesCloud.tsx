import Paragraphs from '../Paragraphs'

const TechnologiesCloud = ({
  technologies
}: {
  technologies: string[]
}): JSX.Element => {
  return (
    <div className={'flex flex-wrap gap-8 justify-between lg:justify-start'}>
      {technologies.map((tehcnology) => (
        <div
          key={`technology__${tehcnology}`}
          className={
            ' text-black px-2 py-0.5 rounded-xl shadow shadow-gray-900 bg-zinc-100 hover:bg-white text-zinc-500 select-none transition-all duration-500 ease-in-out hover:transform hover:scale-150'
          }
        >
          <Paragraphs size={'xs'}>{tehcnology}</Paragraphs>
        </div>
      ))}
    </div>
  )
}

export default TechnologiesCloud
