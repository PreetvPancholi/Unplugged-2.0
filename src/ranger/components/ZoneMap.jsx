import { useEffect, useMemo, useState } from 'react'
import { Circle, CircleMarker, MapContainer, Polyline, TileLayer, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MAP_CENTER = [26.0188, 76.5039]

const ZONES = [
  {
    id: 'A',
    name: 'Zone A',
    center: [26.0273, 76.4915],
    radius: 520,
    stroke: '#ef4444',
    fill: '#ef4444',
  },
  {
    id: 'B',
    name: 'Zone B',
    center: [26.0289, 76.5072],
    radius: 500,
    stroke: '#f59e0b',
    fill: '#f59e0b',
  },
  {
    id: 'C',
    name: 'Zone C',
    center: [26.0203, 76.5028],
    radius: 620,
    stroke: '#22c55e',
    fill: '#22c55e',
  },
  {
    id: 'D',
    name: 'Zone D',
    center: [26.0124, 76.4918],
    radius: 480,
    stroke: '#3b82f6',
    fill: '#3b82f6',
  },
  {
    id: 'E',
    name: 'Zone E',
    center: [26.0129, 76.5098],
    radius: 560,
    stroke: '#a855f7',
    fill: '#a855f7',
  },
]

const TRACKS = [
  {
    id: 'J-01',
    color: '#22c55e',
    speed: 0.014,
    status: 'Active',
    path: [
      [26.0216, 76.4892],
      [26.0247, 76.4939],
      [26.0281, 76.5001],
      [26.0307, 76.5078],
      [26.0264, 76.5134],
    ],
  },
  {
    id: 'J-02',
    color: '#f59e0b',
    speed: 0.011,
    status: 'Idle',
    path: [
      [26.0122, 76.4908],
      [26.0167, 76.4952],
      [26.0202, 76.5024],
      [26.0173, 76.5109],
      [26.0119, 76.5162],
    ],
  },
  {
    id: 'J-03',
    color: '#3b82f6',
    speed: 0.012,
    status: 'Active',
    path: [
      [26.0084, 76.4957],
      [26.0104, 76.5036],
      [26.0137, 76.5098],
      [26.0198, 76.5141],
      [26.0251, 76.5169],
    ],
  },
  {
    id: 'J-04',
    color: '#ef4444',
    speed: 0.015,
    status: 'Alert',
    path: [
      [26.0068, 76.4877],
      [26.0099, 76.4928],
      [26.0151, 76.4945],
      [26.0208, 76.4919],
      [26.0256, 76.4885],
    ],
  },
  {
    id: 'J-05',
    color: '#f97316',
    speed: 0.010,
    status: 'Alert',
    path: [
      [26.0292, 76.4953],
      [26.0269, 76.5011],
      [26.0234, 76.5072],
      [26.0207, 76.5129],
      [26.0179, 76.5174],
    ],
  },
  {
    id: 'J-06',
    color: '#22c55e',
    speed: 0.013,
    status: 'Active',
    path: [
      [26.0275, 76.5106],
      [26.0244, 76.5051],
      [26.0212, 76.4998],
      [26.0178, 76.4954],
      [26.0146, 76.4906],
    ],
  },
]

const STATUS_DOT = {
  Active: 'bg-green-400',
  Idle: 'bg-amber-400',
  Alert: 'bg-red-400',
}

function segmentDistance(a, b) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  return Math.sqrt(dx * dx + dy * dy)
}

function positionOnTrack(points, progress) {
  if (points.length < 2) return points[0]

  const segments = []
  let total = 0

  for (let i = 0; i < points.length - 1; i += 1) {
    const length = segmentDistance(points[i], points[i + 1])
    segments.push({ start: points[i], end: points[i + 1], length })
    total += length
  }

  const target = total * progress
  let traversed = 0

  for (const segment of segments) {
    if (traversed + segment.length >= target) {
      const local = (target - traversed) / segment.length
      return [
        segment.start[0] + (segment.end[0] - segment.start[0]) * local,
        segment.start[1] + (segment.end[1] - segment.start[1]) * local,
      ]
    }
    traversed += segment.length
  }

  return points[points.length - 1]
}

export default function ZoneMap() {
  const [progressByJeep, setProgressByJeep] = useState(() => {
    const seed = {}
    TRACKS.forEach((track, index) => {
      seed[track.id] = (index * 0.18 + 0.1) % 1
    })
    return seed
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressByJeep((prev) => {
        const next = { ...prev }
        TRACKS.forEach((track) => {
          next[track.id] = (prev[track.id] + track.speed) % 1
        })
        return next
      })
    }, 1200)

    return () => clearInterval(timer)
  }, [])

  const jeepPositions = useMemo(() => {
    const positions = {}
    TRACKS.forEach((track) => {
      positions[track.id] = positionOnTrack(track.path, progressByJeep[track.id] ?? 0)
    })
    return positions
  }, [progressByJeep])

  return (
    <div className="h-full min-h-0 bg-safari-darker rounded-xl border border-white/5 p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase">Live Zone Map</h2>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-medium">Live</span>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden flex-1 min-h-0 border border-white/5">
        <MapContainer
          center={MAP_CENTER}
          zoom={14}
          zoomControl={false}
          attributionControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            opacity={0.9}
          />

          {ZONES.map((zone) => (
            <Circle
              key={`zone-${zone.id}`}
              center={zone.center}
              radius={zone.radius}
              pathOptions={{
                color: zone.stroke,
                weight: 1.5,
                fillColor: zone.fill,
                fillOpacity: 0.1,
              }}
            >
              <Tooltip permanent direction="center" className="!bg-transparent !border-0 !shadow-none">
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    background: 'rgba(10,15,13,0.65)',
                    border: `1px solid ${zone.stroke}`,
                    borderRadius: '999px',
                    padding: '2px 7px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {zone.name}
                </span>
              </Tooltip>
            </Circle>
          ))}

          {TRACKS.map((track) => (
            <Polyline
              key={track.id}
              positions={track.path}
              pathOptions={{ color: track.color, weight: 4, opacity: 0.75, lineCap: 'round' }}
            />
          ))}

          {TRACKS.map((track) => (
            <CircleMarker
              key={`marker-${track.id}`}
              center={jeepPositions[track.id]}
              radius={9}
              pathOptions={{
                color: '#f5f0e8',
                weight: 2,
                fillColor: track.color,
                fillOpacity: 0.95,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                <div className="text-xs font-semibold">{track.id}</div>
                <div className="text-[10px] text-slate-200">{track.status}</div>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>

        <div className="absolute top-2 right-2 bg-safari-dark/85 backdrop-blur-sm rounded-lg border border-white/10 px-3 py-2 flex flex-col gap-1.5 z-[500]">
          <div className="mb-1">
            <p className="text-[10px] uppercase tracking-wide text-safari-cream/45">Zones</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {ZONES.map((zone) => (
                <span
                  key={`zone-chip-${zone.id}`}
                  className="text-[10px] px-1.5 py-0.5 rounded border"
                  style={{ borderColor: `${zone.stroke}99`, color: zone.stroke, background: 'rgba(10,15,13,0.4)' }}
                >
                  {zone.id}
                </span>
              ))}
            </div>
          </div>

          {TRACKS.map((track) => (
            <div key={`legend-${track.id}`} className="flex items-center gap-2 text-[10px]">
              <span className={`w-2 h-2 rounded-full ${STATUS_DOT[track.status]}`} />
              <span className="text-safari-cream/75 font-mono">{track.id}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-2 left-2 right-2 bg-safari-dark/75 backdrop-blur-sm border border-white/10 rounded-md px-3 py-1.5 z-[500]">
          <p className="text-safari-cream/60 text-[10px] text-center">
            Real OpenStreetMap layer with live jeep circles moving on patrol tracks.
          </p>
        </div>
      </div>
    </div>
  )
}
