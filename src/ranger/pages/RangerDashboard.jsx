import JeepPanel from '../components/JeepPanel'
import ZoneMap from '../components/ZoneMap'
import RoutingCommandLog from '../components/RoutingCommandLog'
import WildlifeEventFeed from '../components/WildlifeEventFeed'
import AnimalTracker from '../components/AnimalTracker'
import RangerShell from '../components/RangerShell'

export default function RangerDashboard({ onLogout }) {
  return (
    <RangerShell onLogout={onLogout}>
      <div
        className="ranger-grid h-full p-3 sm:p-4 gap-3 overflow-hidden"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(360px, 37%) minmax(0, 1fr)',
          gridTemplateRows: '1fr',
          minHeight: 0,
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div
          className="min-h-0 grid gap-3"
          style={{ gridTemplateRows: 'minmax(0, 0.85fr) minmax(0, 1fr) minmax(0, 1fr)' }}
        >
          <div className="min-h-0">
            <JeepPanel />
          </div>
          <div className="min-h-0">
            <AnimalTracker />
          </div>
          <div className="min-h-0">
            <WildlifeEventFeed />
          </div>
        </div>

        {/* ── RIGHT WORKSPACE ── */}
        <div
          className="min-h-0 grid gap-3"
          style={{ gridTemplateRows: 'minmax(0, 1fr) minmax(0, 0.6fr)' }}
        >
          <div className="min-h-0">
            <ZoneMap />
          </div>
          <div className="min-h-0">
            <RoutingCommandLog />
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE FIT RULES (keep dashboard in viewport) ── */}
      <style>{`
        @media (max-width: 1366px) {
          .ranger-grid {
            padding: 0.65rem !important;
            gap: 0.65rem !important;
            grid-template-columns: minmax(300px, 38%) minmax(0, 1fr) !important;
          }
        }

        @media (max-width: 1024px) {
          .ranger-grid {
            padding: 0.5rem !important;
            gap: 0.5rem !important;
            grid-template-columns: minmax(260px, 40%) minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </RangerShell>
  )
}
