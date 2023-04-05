import NavBar from './components/NavBar'
import './fonts.css'
import Presentation from './components/Presentation'
import Header from './components/Header'
import ProfessionaExperience from './components/ProfessionaExperience'
import 'rc-tooltip/assets/bootstrap.css'
import { useRef } from 'react'

const App = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const presentationRef = useRef<HTMLDivElement | null>(null)
  const professionalExperienceRef = useRef<HTMLDivElement | null>(null)

  const menuItems = [
    {
      name: 'Inicio',
      link: '#header',
      show: true,
      onClick: () =>
        headerRef?.current?.scrollIntoView({
          behavior: 'smooth'
        })
    },
    {
      name: 'Presentación',
      link: '#presentation',
      show: true,
      onClick: () =>
        presentationRef?.current?.scrollIntoView({
          behavior: 'smooth'
        })
    },
    {
      name: 'Experiencia profesional',
      link: '#experience',
      show: true,
      onClick: () =>
        professionalExperienceRef?.current?.scrollIntoView({
          behavior: 'smooth'
        })
    },
    {
      name: 'Stack',
      link: '#stack',
      show: false,
      onClick: () => null
    },
    {
      name: 'Formación',
      link: '#formation',
      show: false,
      onClick: () => null
    }
  ]

  return (
    <div className={'font-montserrat'}>
      <NavBar menuItems={menuItems} />
      <section ref={headerRef} />
      <Header />
      <section ref={presentationRef} />
      <Presentation />
      <section ref={professionalExperienceRef} />
      <ProfessionaExperience />
    </div>
  )
}

export default App
