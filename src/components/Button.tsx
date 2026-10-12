import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-800 text-cream-50 shadow-sm shadow-brand-900/20 hover:bg-brand-900 hover:shadow-md hover:-translate-y-0.5',
  secondary:
    'bg-cream-50 text-brand-800 border border-brand-800/30 hover:border-brand-800 hover:-translate-y-0.5',
  ghost: 'text-brand-800 hover:text-brand-600',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type AsLink = CommonProps & { to: string; href?: never } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href'
  >
type AsAnchor = CommonProps & { href: string; to?: never } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href'
  >
type AsButton = CommonProps & {
  to?: never
  href?: never
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = AsLink | AsAnchor | AsButton

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', ...rest } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if ('to' in props && props.to) {
    const { to, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }
    return (
      <Link to={to} className={classes} {...anchorRest}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
