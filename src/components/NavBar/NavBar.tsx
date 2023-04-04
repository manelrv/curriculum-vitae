import { useEffect, useState } from 'react'
import Paragraphs from '../Paragraphs'
// @ts-expect-error
import { slide as Menu } from 'react-burger-menu'

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

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '46px'
  },
  bmBurgerBars: {
    background: '#256b18'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '34px',
    width: '34px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

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
    // <nav
    //   className={`fixed top-0 ${
    //     scrollPosition > 20 ? 'bg-opacity-80' : 'bg-opacity-100'
    //   }  text-white w-full m-auto flex justify-start  py-4 px-10 text-xl gap-12`}
    // >
    //   {menuItems.map((item, index) => (
    //     <Paragraphs
    //       key={item.link}
    //       size={'xl'}
    //       className={
    //         'text-green-500 hover:(animate-pulse border-blue-300) border-1 p-2 border-transparent cursor-pointer'
    //       }
    //     >
    //       {item.name}
    //     </Paragraphs>
    //   ))}
    //
    // </nav>
    <Menu styles={styles}>
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
    </Menu>
  )
}

export default NavBar
