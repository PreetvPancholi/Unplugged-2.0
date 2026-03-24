const SPECIES = [
  { name: 'Tiger', count: 3, rarity: 'High' },
  { name: 'Leopard', count: 2, rarity: 'High' },
  { name: 'Elephant', count: 5, rarity: 'Medium' },
  { name: 'Spotted Deer', count: 12, rarity: 'Low' },
  { name: 'Wild Boar', count: 7, rarity: 'Low' },
  { name: 'Peacock', count: 9, rarity: 'Low' },
  { name: 'Sloth Bear', count: 1, rarity: 'High' },
  { name: 'Indian Gaur', count: 4, rarity: 'Medium' },
]

const totalEvents = SPECIES.reduce((s, sp) => s + sp.count, 0)
const rarityBorder = {
  High: 'border-l-red-500',
  Medium: 'border-l-amber-400',
  Low: 'border-l-blue-500',
}

export default function AnimalTracker() {
  return (
    <div className="h-full min-h-0 bg-safari-darker rounded-xl border border-white/5 p-3 flex flex-col gap-2.5">
      <div className="mb-1">
        <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase">Tracked Species</h2>
        <p className="text-safari-cream/30 text-xs mt-0.5">Total detections this session</p>
      </div>

      <div className="flex flex-col gap-1.5 overflow-y-auto scrollbar-thin pr-1 min-h-0">
        {SPECIES.map((sp) => (
          <div
            key={sp.name}
            className={`bg-safari-dark rounded-lg border border-white/5 border-l-[3px] ${rarityBorder[sp.rarity]} px-3 py-2 flex items-center justify-between gap-2`}
          >
            <div className="min-w-0">
              <p className="text-safari-cream/80 text-xs font-medium truncate">{sp.name}</p>
            </div>
            <span className="text-safari-amber font-bold font-serif text-base flex-shrink-0">{sp.count}</span>
          </div>
        ))}
      </div>

      <div className="bg-safari-dark rounded-lg border border-white/5 px-3 py-2 flex items-center justify-between">
        <span className="text-safari-cream/40 text-xs">Total Events</span>
        <span className="text-safari-amber font-bold">{totalEvents}</span>
        <span className="w-px h-4 bg-white/10 mx-2" />
        <span className="text-safari-cream/40 text-xs">Unique Species</span>
        <span className="text-safari-amber font-bold">{SPECIES.length}</span>
      </div>
    </div>
  )
}
