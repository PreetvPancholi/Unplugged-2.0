const JEEPS = [
  { id: 'J-01', status: 'Active',    zone: 'Zone A', passengers: 6, max: 6, lastPing: '8s ago'  },
  { id: 'J-02', status: 'Active',    zone: 'Zone C', passengers: 4, max: 6, lastPing: '12s ago' },
  { id: 'J-03', status: 'Idle',      zone: 'Zone B', passengers: 0, max: 6, lastPing: '45s ago' },
  { id: 'J-04', status: 'Active',    zone: 'Zone D', passengers: 5, max: 6, lastPing: '6s ago'  },
  { id: 'J-05', status: 'Alert',     zone: 'Zone A', passengers: 3, max: 6, lastPing: '20s ago' },
  { id: 'J-06', status: 'Active',    zone: 'Zone E', passengers: 6, max: 6, lastPing: '3s ago'  },
]

const statusDot = {
  Active: 'bg-green-400',
  Idle: 'bg-amber-400',
  Alert: 'bg-red-400',
}

function getLoadStyle(percent) {
  if (percent >= 100) return { bar: 'bg-red-500', text: 'text-red-400' }
  if (percent > 80) return { bar: 'bg-orange-400', text: 'text-orange-300' }
  if (percent >= 50) return { bar: 'bg-amber-400', text: 'text-amber-300' }
  return { bar: 'bg-green-400', text: 'text-green-300' }
}

export default function JeepPanel() {
  return (
    <div className="h-full min-h-0 bg-safari-darker rounded-xl border border-white/5 p-3 flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase">Active Jeeps</h2>
        <span className="text-safari-cream/30 text-xs">{JEEPS.filter(j => j.status === 'Active').length} / {JEEPS.length} active</span>
      </div>

      <div className="flex flex-col gap-1.5 overflow-y-auto scrollbar-thin pr-1 min-h-0">
        {JEEPS.map((jeep) => (
          <div
            key={jeep.id}
            className="bg-safari-dark rounded-lg border border-white/5 p-2.5 hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${statusDot[jeep.status]}`} />
                <span className="font-mono font-bold text-safari-cream text-sm">{jeep.id}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wide text-safari-cream/45">{jeep.status}</span>
            </div>

            <p className="text-[11px] text-safari-cream/45 mb-2">
              {jeep.zone} · {jeep.lastPing}
            </p>

            <div>
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="text-safari-cream/40">Guests</span>
                <span className={getLoadStyle((jeep.passengers / jeep.max) * 100).text}>
                  {jeep.passengers}/{jeep.max}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                <div
                  className={`h-full rounded-full ${getLoadStyle((jeep.passengers / jeep.max) * 100).bar}`}
                  style={{ width: `${Math.min((jeep.passengers / jeep.max) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
