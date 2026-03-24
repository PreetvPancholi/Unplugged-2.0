import { useState } from 'react'

const COMMANDS = [
  { id: 1, time: '06:38', jeep: 'J-03', message: 'Zone B overcrowded. Move to Zone D.', type: 'reroute' },
  { id: 2, time: '06:29', jeep: 'J-01', message: 'Tiger predicted in Zone C. Proceed via Track 3.', type: 'alert' },
  { id: 3, time: '06:21', jeep: 'J-05', message: 'Returning to base. Safari complete.', type: 'info' },
  { id: 4, time: '06:14', jeep: 'J-04', message: 'Zone A at capacity. Hold at checkpoint.', type: 'warning' },
  { id: 5, time: '06:07', jeep: 'J-02', message: 'Leopard confirmed in Zone C. Divert J-06.', type: 'alert' },
  { id: 6, time: '05:58', jeep: 'J-06', message: 'Zone F cleared. Vehicle reassigned to Zone C.', type: 'reroute' },
]

const typeStyle = {
  reroute: { border: 'border-l-[3px] border-l-orange-400', badge: 'bg-orange-500/10 text-orange-300' },
  alert: { border: 'border-l-[3px] border-l-red-500', badge: 'bg-red-500/10 text-red-400' },
  warning: { border: 'border-l-[3px] border-l-orange-400', badge: 'bg-orange-500/10 text-orange-300' },
  info: { border: 'border-l-[3px] border-l-slate-500', badge: 'bg-slate-500/15 text-slate-300' },
}

const typeLabel = { reroute: 'REROUTE', alert: 'ALERT', warning: 'WARN', info: 'INFO' }

export default function RoutingCommandLog() {
  const [acknowledgedIds, setAcknowledgedIds] = useState([])

  const acknowledge = (id) => {
    setAcknowledgedIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <div className="h-full min-h-0 bg-safari-darker rounded-xl border border-white/5 p-3 flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase">Routing Commands</h2>
        <span className="text-safari-cream/30 text-xs font-mono">{COMMANDS.length} entries</span>
      </div>

      <div className="flex flex-col gap-1.5 overflow-y-auto scrollbar-thin pr-1 min-h-0">
        {COMMANDS.map((cmd) => {
          const style = typeStyle[cmd.type]
          const isDone = acknowledgedIds.includes(cmd.id)

          return (
            <div
              key={cmd.id}
              className={`bg-safari-dark rounded-lg ${style.border} px-3 py-2.5 flex items-center gap-3 transition-opacity duration-200 ${
                isDone ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-safari-cream/90 text-xs font-semibold leading-relaxed mb-0.5">{cmd.message}</p>
                <p className="text-safari-cream/35 text-[10px] font-mono">{cmd.time} · {cmd.jeep}</p>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isDone ? 'bg-slate-500/20 text-slate-300' : style.badge
                  }`}
                >
                  {isDone ? 'DONE' : typeLabel[cmd.type]}
                </span>
                <button
                  onClick={() => acknowledge(cmd.id)}
                  disabled={isDone}
                  className={`text-[10px] px-2 py-0.5 rounded border transition-all duration-200 ${
                    isDone
                      ? 'border-slate-500/25 text-slate-400 cursor-default'
                      : 'border-safari-amber/35 text-safari-amber hover:bg-safari-amber/10'
                  }`}
                >
                  ✓ ACK
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
