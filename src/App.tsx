import manelrv from './assets/images/manelrv.jpg'
import { SocialIcon } from 'react-social-icons'
import Paragraphs from './components/Paragraphs'
import NavBar from './components/NavBar'
import './fonts.css'
import Presentation from './components/Presentation'
import Header from './components/Header'
import ProfessionaExperience from './components/ProfessionaExperience'

const App = (): JSX.Element => {
  return (
    <div className={'font-inter'}>
      <NavBar />
      <Header />
      <Presentation />
      <ProfessionaExperience />
    </div>
  )
}

export default App
