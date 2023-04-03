import { useMemo } from 'react'
import { type IParagraphs } from './interface'

/**
 * Component for use paragraphs <p> in text from the app.
 * @author mromero
 */
function Paragraphs(props: IParagraphs): JSX.Element {
  const {
    size = 'base',
    weight = 'medium',
    transform = 'normal-case',
    children,
    decoration = 'none',
    href,
    className,
    onPress
  } = props

  const onPressText = (): void => {
    onPress?.({ href })
  }

  const fontSize = useMemo(() => `text-${size}`, [size])
  const fontWeight = useMemo(() => {
    return {
      fontFamily: 'font-' + weight
    }
  }, [weight])

  return (
    <p
      onClick={() => onPress !== null && onPressText}
      className={`${
        className ?? ''
      } ${fontSize} ${transform} decoration-${decoration} ${
        fontWeight.fontFamily
      } `}
    >
      {children}
    </p>
  )
}

export default Paragraphs
