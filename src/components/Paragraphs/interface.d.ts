export interface IParagraphs {
  size?:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  children?: React.ReactNode
  style?: Array<object>
  decoration?: 'underline' | 'none'
  onPress?: ({ href }: { href: string | null | undefined }) => void
  href?: string | null
  numberOfLines?: number
  className?: string
}
