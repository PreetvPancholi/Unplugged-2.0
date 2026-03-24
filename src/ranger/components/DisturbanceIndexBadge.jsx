// DI = Animal Activity (total detections) / Active Vehicle Count
const ANIMAL_ACTIVITY = 43
const VEHICLE_COUNT = 4
export const DI = parseFloat((ANIMAL_ACTIVITY / VEHICLE_COUNT).toFixed(2))

function getDIStyle(di) {
  if (di > 8) return { color: 'text-green-400', bg: 'bg-green-500/15 border-green-500/30', label: 'Low Stress', dot: 'bg-green-400' }
  if (di >= 4) return { color: 'text-yellow-400', bg: 'bg-yellow-500/15 border-yellow-500/30', label: 'Moderate', dot: 'bg-yellow-400' }
  return             { color: 'text-red-400', bg: 'bg-red-500/15 border-red-500/30', label: 'High Stress', dot: 'bg-red-400' }
}

export default function DisturbanceIndexBadge() {
  const style = getDIStyle(DI)
  const isHighDI = DI > 15

  return (
    <div className={`relative flex items-center gap-2 px-2.5 py-1 rounded-md border ${style.bg}`}>
      {isHighDI && <span className="absolute -inset-1 rounded-lg border border-red-400/60 di-ring-pulse" />}

      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${style.dot} ${isHighDI ? 'animate-pulse' : ''}`} />
        <span className={`text-xs font-bold font-mono ${style.color}`}>DI: {DI}</span>
      </div>

      <span className={`text-[10px] font-medium ${style.color} opacity-85 whitespace-nowrap`}>{style.label}</span>

      <style>{`
        @keyframes diRingPulse {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .di-ring-pulse {
          animation: diRingPulse 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
