import Paragraphs from '../Paragraphs'
// @ts-expect-error it has no types
import { slide as Menu } from 'react-burger-menu'
import { useEffect, useState } from 'react'

const NavBar = ({ menuItems }: { menuItems: any[] }): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '50px',
      height: '40px',
      left: Boolean(windowWidth < 500) ? '80%' : '5%',
      top: '46px'
    },
    bmBurgerBars: {
      borderRadius: '1px',
      background:
        'linear-gradient(45deg, rgba(40,153,96,1) 0%, rgba(39,253,253,1) 100%)'
    },
    bmBurgerBarsHover: {
      background:
        'linear-gradient(45deg, rgba(39,253,253,1) 0%, rgba(40,153,96,1) 100%)'
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
      background: '#289960',
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
      background: 'rgba(39,253,253,0.08)'
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Menu
      styles={styles}
      isOpen={isMenuOpen}
      onOpen={() => {
        setIsMenuOpen(true)
      }}
      onClose={() => {
        setIsMenuOpen(false)
      }}
      right={Boolean(windowWidth < 500)}
    >
      {menuItems?.map((item) => (
        <div
          key={item.link}
          onClick={() => {
            setIsMenuOpen(false)
            item?.onClick()
          }}
        >
          <Paragraphs
            size={'xl'}
            className={`text-secondary opacity-80 hover:opacity-100  p-2 border-transparent cursor-pointer ${
              Boolean(item.show) ? '' : 'hidden'
            }`}
          >
            {item.name}
          </Paragraphs>
        </div>
      ))}
    </Menu>
  )
}

export default NavBar
