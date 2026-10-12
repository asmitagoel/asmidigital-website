import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import Button from './Button'
import { siteConfig } from '../data/siteConfig'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-brand-900/10 bg-cream-50/90 backdrop-blur-sm'
          : 'border-transparent bg-cream-50/0'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt={siteConfig.name} className="h-11 w-11 object-contain" />
          <span className="font-display text-2xl tracking-wide text-brand-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-brand-800' : 'text-brand-900/60 hover:text-brand-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" className="!px-5 !py-2.5">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-brand-900 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-6 bg-brand-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-brand-900 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-900/10 bg-cream-50 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-brand-50 text-brand-800' : 'text-brand-900/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-2 justify-center" onClick={() => setOpen(false)}>
              Start a project
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
