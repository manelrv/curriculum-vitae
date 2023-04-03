import { useEffect, useState } from 'react'
import Paragraphs from '../Paragraphs'
const menuItems = [
  {
    name: 'Presentación',
    link: '#presentation'
  },
  {
    name: 'Experiencia profesional',
    link: '#experience'
  },
  {
    name: 'Stack',
    link: '#stack'
  },
  {
    name: 'Formación',
    link: '#formation'
  }
]

const NavBar = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={`fixed top-0 bg-black ${
        scrollPosition > 20 ? 'bg-opacity-80' : 'bg-opacity-100'
      }  text-white w-full m-auto flex justify-start  py-4 px-10 text-xl gap-12`}
    >
      {menuItems.map((item, index) => (
        <Paragraphs
          key={item.link}
          size={'xl'}
          className={
            'text-green-500 hover:(animate-pulse border-blue-300) border-1 p-2 border-transparent cursor-pointer'
          }
        >
          {item.name}
        </Paragraphs>
      ))}
    </nav>
  )
}

export default NavBar
