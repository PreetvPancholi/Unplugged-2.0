const EVENTS = [
  { time: '06:41', zone: 'Zone C', species: 'Tiger',     rarity: 10, confidence: '94%' },
  { time: '06:35', zone: 'Zone A', species: 'Leopard',   rarity: 9,  confidence: '88%' },
  { time: '06:28', zone: 'Zone E', species: 'Elephant',  rarity: 7,  confidence: '97%' },
  { time: '06:19', zone: 'Zone B', species: 'Deer',      rarity: 3,  confidence: '99%' },
  { time: '06:11', zone: 'Zone D', species: 'Wild Boar', rarity: 4,  confidence: '91%' },
  { time: '05:59', zone: 'Zone F', species: 'Peacock',   rarity: 2,  confidence: '95%' },
]

const zoneBadge = {
  'Zone A': 'bg-red-500/15 text-red-400 border-red-500/30',
  'Zone B': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'Zone C': 'bg-red-500/15 text-red-400 border-red-500/30',
  'Zone D': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Zone E': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'Zone F': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
}

function rarityInfo(rarity) {
  if (rarity >= 8) return { label: 'High',   cls: 'bg-red-500/15 text-red-400' }
  if (rarity >= 5) return { label: 'Medium', cls: 'bg-yellow-500/15 text-yellow-400' }
  return                  { label: 'Common', cls: 'bg-blue-500/15 text-blue-400' }
}

export default function WildlifeEventFeed() {
  return (
    <div className="h-full min-h-0 bg-safari-darker rounded-xl border border-white/5 p-3 flex flex-col gap-2">
      <div className="mb-1">
        <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase">Wildlife Population</h2>
        <p className="text-safari-cream/30 text-xs mt-0.5">Live sensor feed — LoRa network</p>
      </div>

      <div className="flex flex-col gap-1.5 overflow-y-auto scrollbar-thin pr-1 min-h-0">
        {EVENTS.map((ev, i) => {
          const r = rarityInfo(ev.rarity)
          return (
            <div key={i} className="bg-safari-dark rounded-lg px-3 py-2 flex items-center gap-2">
              <span className="text-safari-amber/70 font-mono text-xs flex-shrink-0 w-10">{ev.time}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${zoneBadge[ev.zone]}`}>
                {ev.zone.replace('Zone ', '')}
              </span>
              <span className="text-safari-cream font-semibold text-xs flex-1 truncate">{ev.species}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${r.cls}`}>{r.label}</span>
              <span className="text-safari-cream/35 text-xs flex-shrink-0">{ev.confidence}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
