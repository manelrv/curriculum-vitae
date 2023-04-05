import NavBar from './components/NavBar'
import './fonts.css'
import Presentation from './components/Presentation'
import Header from './components/Header'
import ProfessionaExperience from './components/ProfessionaExperience'
import 'rc-tooltip/assets/bootstrap.css'

const App = (): JSX.Element => {
  return (
    <div className={'font-montserrat'}>
      <NavBar />
      <Header />
      <Presentation />
      <ProfessionaExperience />
    </div>
  )
}

export default App
