import { Link } from 'react-router-dom'

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const PawIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-safari-amber">
    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    <circle cx="5" cy="9" r="2"/>
    <circle cx="19" cy="9" r="2"/>
    <circle cx="8" cy="4" r="1.5"/>
    <circle cx="16" cy="4" r="1.5"/>
    <path d="M17.5 14c-1.5-1-3-1.5-5.5-1.5S8 13 6.5 14C5 15 4 17 4 18.5 4 20.5 5.5 22 7.5 22c1 0 2-.5 2.5-1h4c.5.5 1.5 1 2.5 1 2 0 3.5-1.5 3.5-3.5 0-1.5-1-3.5-2.5-4.5z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-safari-darker border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-3">
              <PawIcon />
              <span className="font-serif text-xl font-bold text-safari-cream">
                Safari<span className="text-safari-amber">IQ</span>
              </span>
            </div>
            <p className="text-safari-cream/50 text-sm italic">
              Intelligent safaris. Undisturbed wildlife.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 text-safari-cream/50 hover:text-safari-amber hover:border-safari-amber/30 transition-all duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 text-safari-cream/50 hover:text-safari-amber hover:border-safari-amber/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-safari-cream/80 text-sm font-semibold mb-4 tracking-wider uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Book Safari', to: '/book' },
                { label: 'Contact', to: '/contact' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-safari-cream/50 text-sm hover:text-safari-amber transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="text-safari-cream/80 text-sm font-semibold mb-4 tracking-wider uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-safari-cream/50 text-sm">
              <span>📧 contact@predictivesafari.in</span>
              <span>📞 +91 98765 43210</span>
              <span>📍 NH-7, Madhya Pradesh</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center">
          <p className="text-safari-cream/30 text-xs">
            © 2026 Predictive Safari Intelligence System. Built for{' '}
            <span className="text-safari-amber/60">UNPLUGGED Hackathon, DJSCE</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
