import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PawIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-safari-amber">
    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    <circle cx="5" cy="9" r="2"/>
    <circle cx="19" cy="9" r="2"/>
    <circle cx="8" cy="4" r="1.5"/>
    <circle cx="16" cy="4" r="1.5"/>
    <path d="M17.5 14c-1.5-1-3-1.5-5.5-1.5S8 13 6.5 14C5 15 4 17 4 18.5 4 20.5 5.5 22 7.5 22c1 0 2-.5 2.5-1h4c.5.5 1.5 1 2.5 1 2 0 3.5-1.5 3.5-3.5 0-1.5-1-3.5-2.5-4.5z"/>
  </svg>
)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleHowItWorks = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-safari-dark/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <PawIcon />
              <div className="absolute inset-0 rounded-full bg-safari-amber/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-0" />
            </div>
            <span className="font-serif text-xl font-bold text-safari-cream tracking-tight">
              Safari<span className="text-safari-amber">IQ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              link.to === '/#how-it-works' ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={handleHowItWorks}
                  className="text-safari-cream/70 hover:text-safari-cream text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-safari-amber' : 'text-safari-cream/70 hover:text-safari-cream'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
            <Link to="/book" className="btn-primary text-sm py-2.5 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-safari-cream/70 hover:text-safari-cream"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-white/5 flex flex-col gap-1">
            {navLinks.map(link => (
              link.to === '/#how-it-works' ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => { handleHowItWorks(e); setMenuOpen(false) }}
                  className="text-safari-cream/70 hover:text-safari-cream px-2 py-2.5 text-sm font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-2 py-2.5 text-sm font-medium rounded-lg ${
                      isActive ? 'text-safari-amber bg-safari-amber/10' : 'text-safari-cream/70 hover:text-safari-cream'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
            <Link to="/book" className="btn-primary text-sm mt-2 text-center">Book Now</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
