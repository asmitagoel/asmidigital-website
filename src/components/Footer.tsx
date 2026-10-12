import { Link } from 'react-router-dom'
import Container from './Container'
import { siteConfig } from '../data/siteConfig'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-brand-900/10 bg-brand-950 text-cream-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={siteConfig.name}
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="font-display text-2xl text-cream-50">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream-50">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/70">
              <li><Link className="hover:text-cream-50" to="/services">Services</Link></li>
              <li><Link className="hover:text-cream-50" to="/portfolio">Portfolio</Link></li>
              <li><Link className="hover:text-cream-50" to="/about">About us</Link></li>
              <li><Link className="hover:text-cream-50" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream-50">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/70">
              <li>
                <a className="hover:text-cream-50" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="hover:text-cream-50" href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-cream-100/50">{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream-50">Follow</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/70">
              {siteConfig.social.instagram && (
                <li>
                  <a
                    className="hover:text-cream-50"
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    className="hover:text-cream-50"
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p>Made with care for ecommerce brands.</p>
        </div>
      </Container>
    </footer>
  )
}
