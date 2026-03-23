import { Link } from 'react-router-dom'

export default function PackageCard({ pkg, highlighted = false }) {
  return (
    <div className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 
      ${highlighted 
        ? 'bg-gradient-to-b from-safari-green/20 to-safari-darker border-2 border-safari-amber/50 shadow-xl shadow-safari-amber/10' 
        : 'card-dark border border-white/5 hover:border-safari-amber/20'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <span className="bg-safari-amber text-safari-dark text-xs font-bold px-4 py-1 tracking-widest uppercase rounded-b-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className={`p-7 flex flex-col flex-1 ${highlighted ? 'pt-10' : ''}`}>
        <div className="mb-5">
          <h3 className="font-serif text-2xl font-bold text-safari-cream mb-1">{pkg.name}</h3>
          <p className="text-safari-cream/50 text-sm">{pkg.time}</p>
        </div>

        <div className="flex flex-col gap-2.5 mb-6 flex-1">
          <div className="flex items-center gap-2 text-sm text-safari-cream/70">
            <span className="text-safari-amber">👥</span>
            <span>Max {pkg.guests} guests</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-safari-cream/70">
            <span className="text-safari-amber">🚙</span>
            <span>{pkg.jeep}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-safari-cream/70">
            <span className="text-safari-amber">🦁</span>
            <span>Best for: {pkg.bestFor}</span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 flex items-end justify-between">
          <div>
            <p className="text-safari-cream/40 text-xs mb-0.5">per person</p>
            <p className="text-3xl font-bold font-serif text-safari-amber">{pkg.price}</p>
          </div>
          <Link
            to="/book"
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5
              ${highlighted
                ? 'bg-safari-amber text-safari-dark hover:bg-safari-amber-light shadow-md shadow-amber-700/30'
                : 'border border-safari-amber/40 text-safari-amber hover:bg-safari-amber/10'
              }`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
