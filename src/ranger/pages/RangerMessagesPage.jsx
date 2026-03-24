import RangerShell from '../components/RangerShell'
import ContactMessageFeed from '../components/ContactMessageFeed'

export default function RangerMessagesPage({ onLogout }) {
  return (
    <RangerShell onLogout={onLogout}>
      <div className="h-full p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <ContactMessageFeed />
        </div>
      </div>
    </RangerShell>
  )
}
