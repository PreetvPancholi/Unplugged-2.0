const SLOT_DATA = [
  { slot: 'Dawn Patrol',     jeeps: 2, passengers: 11 },
  { slot: 'Golden Hour',     jeeps: 3, passengers: 15 },
  { slot: 'Full Day Exp.',   jeeps: 1, passengers:  6 },
]

export default function BookingSummaryPanel() {
  return (
    <div className="bg-safari-darker rounded-xl border border-white/5 p-4 flex flex-col gap-3">
      <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase mb-1">
        Today's Bookings
      </h2>

      {/* Stat grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Total Bookings', value: '14' },
          { label: 'Total Passengers', value: '32' },
          { label: 'Slots Remaining', value: '4' },
        ].map((s) => (
          <div key={s.label} className="bg-safari-dark rounded-lg border border-white/5 p-3 text-center">
            <p className="text-xl font-bold font-serif text-safari-amber">{s.value}</p>
            <p className="text-safari-cream/40 text-xs mt-0.5 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Slot table */}
      <div className="bg-safari-dark rounded-lg border border-white/5 overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-3 py-2 text-safari-cream/40 font-medium">Time Slot</th>
              <th className="text-center px-2 py-2 text-safari-cream/40 font-medium">Jeeps</th>
              <th className="text-center px-2 py-2 text-safari-cream/40 font-medium">Guests</th>
            </tr>
          </thead>
          <tbody>
            {SLOT_DATA.map((row, i) => (
              <tr key={i} className="border-b border-white/3 last:border-0">
                <td className="px-3 py-2 text-safari-cream/70">{row.slot}</td>
                <td className="px-2 py-2 text-center text-safari-cream/80 font-medium">{row.jeeps}</td>
                <td className="px-2 py-2 text-center text-safari-amber font-semibold">{row.passengers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-safari-cream/25 text-xs leading-relaxed">
        Data pulled from booking system. Live sync coming via WebSocket.
      </p>
    </div>
  )
}
