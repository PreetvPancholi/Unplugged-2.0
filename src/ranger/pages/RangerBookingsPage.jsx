import RangerShell from '../components/RangerShell'
import BookingSummaryPanel from '../components/BookingSummaryPanel'

export default function RangerBookingsPage({ onLogout }) {
  return (
    <RangerShell onLogout={onLogout}>
      <div className="h-full p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <BookingSummaryPanel />
        </div>
      </div>
    </RangerShell>
  )
}
