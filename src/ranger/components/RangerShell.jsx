import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import DisturbanceIndexBadge from './DisturbanceIndexBadge'

function useLiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

function formatClock(date) {
  const day = date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  const time = date
    .toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
    .toUpperCase()

  return `${day}  |  ${time}`
}

const navItems = [
  { to: '/ranger/dashboard', label: 'Control Center' },
  { to: '/ranger/bookings', label: "Today's Bookings" },
  { to: '/ranger/messages', label: 'Guest Messages' },
]

const fleetStatus = ['active', 'active', 'idle', 'active', 'alert', 'active']
const fleetDotStyle = {
  active: 'bg-green-400',
  idle: 'bg-amber-400',
  alert: 'bg-red-400',
}

export default function RangerShell({ onLogout, children }) {
  const navigate = useNavigate()
  const clock = useLiveClock()

  const handleLogout = () => {
    onLogout()
    navigate('/ranger')
  }

  return (
    <div className="h-screen overflow-hidden bg-safari-dark flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-safari-darker border-b border-white/5 px-3 py-1.5 flex items-center gap-2 flex-shrink-0">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-base">🐾</span>
          <div>
            <span className="text-safari-cream font-bold text-xs">SafariIQ</span>
            <span className="text-safari-cream/40 text-xs"> — Ranger Control</span>
          </div>
        </div>

        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-thin px-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[11px] sm:text-xs px-2.5 py-0.5 rounded-md border transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-safari-amber/15 text-safari-amber border-safari-amber/40'
                      : 'bg-safari-dark border-white/10 text-safari-cream/60 hover:text-safari-cream hover:border-white/30'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <DisturbanceIndexBadge />

          <span className="hidden xl:inline font-mono text-safari-amber/80 text-xs tracking-wide px-1">
            {formatClock(clock)}
          </span>

          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-md px-2 py-0.5">
            <div className="flex items-center gap-1">
              {fleetStatus.map((status, index) => (
                <span key={`${status}-${index}`} className={`w-1.5 h-1.5 rounded-full ${fleetDotStyle[status]}`} />
              ))}
            </div>
            <span className="text-green-400 text-[11px] font-semibold whitespace-nowrap">System Online</span>
          </div>

          <button
            onClick={handleLogout}
            className="border border-white/15 text-safari-cream/60 hover:text-safari-cream hover:border-white/30 
              text-[11px] px-2.5 py-0.5 rounded-md transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 min-h-0 overflow-hidden">{children}</main>
    </div>
  )
}
