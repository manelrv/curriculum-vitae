import Paragraphs from '../Paragraphs'

const ExperiencePanel = (props: {
  role: string
  logo: string
  company: string
  body: string[]
}): JSX.Element => {
  const { role, logo, company, body } = props
  return (
    <div className={'flex gap-8 flex-col'}>
      <div
        className={
          'flex flex-wrap justify-center sm:justify-between items-center gap-4 text-center sm:tex-left'
        }
      >
        <Paragraphs
          size={'2xl'}
          weight={'bold'}
          className={
            'sm:text-4xl transition-all duration-500 ease-in-out border-b-2 border-green-500'
          }
        >
          {role}
        </Paragraphs>

        <img src={logo} alt={`${company}__logo`} className={'h-32 p-8'} />
      </div>

      <div className={'gap-4 flex flex-col'}>
        {body.map((item, index) => (
          <Paragraphs
            key={`professionalExperienceItem-${index}`}
            size={'sm'}
            weight={'normal'}
            className={'sm:text-xl transition-all duration-500 ease-in-out'}
          >
            {item}
          </Paragraphs>
        ))}
      </div>
    </div>
  )
}

export default ExperiencePanel
