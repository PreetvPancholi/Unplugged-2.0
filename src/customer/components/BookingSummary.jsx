const PRICES = {
  'Dawn Patrol (6:00 AM – 9:00 AM)': 1499,
  'Golden Hour (4:00 PM – 7:00 PM)': 1799,
  'Full Day Expedition (7:00 AM – 5:00 PM)': 4999,
}

export default function BookingSummary({ formData }) {
  const { timeSlot, date, guests, jeepType } = formData
  const pricePerPerson = PRICES[timeSlot] || null
  const totalPrice = pricePerPerson && guests ? pricePerPerson * parseInt(guests) : null

  const formatDate = (dateStr) => {
    if (!dateStr) return null
    const d = new Date(dateStr + 'T00:00:00')
    return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  }

  const slotShortName = timeSlot ? timeSlot.split('(')[0].trim() : null

  return (
    <div className="sticky top-24 flex flex-col gap-4">
      {/* Summary Card */}
      <div className="card-dark border border-safari-amber/20 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 bg-safari-amber/10 px-6 py-4 border-b border-safari-amber/20">
          <span>🗺️</span>
          <h3 className="font-serif text-lg font-bold text-safari-cream">Your Safari Summary</h3>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <SummaryRow label="Safari Type" value={slotShortName} placeholder="Select a time slot" />
          <SummaryRow label="Date" value={formatDate(date)} placeholder="Choose a date" />
          <SummaryRow label="Guests" value={guests ? `${guests} guest${parseInt(guests) > 1 ? 's' : ''}` : null} placeholder="Enter number of guests" />
          <SummaryRow label="Jeep" value={jeepType} placeholder="Select jeep type" />

          <div className="border-t border-white/5 pt-4 mt-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-safari-cream/60 text-sm">Price per person</span>
              <span className="text-safari-cream text-sm font-medium">
                {pricePerPerson ? `₹${pricePerPerson.toLocaleString('en-IN')}` : '—'}
              </span>
            </div>

            <div className="flex justify-between items-center bg-safari-amber/10 rounded-xl px-4 py-3 border border-safari-amber/20">
              <span className="text-safari-cream font-semibold">Total Estimated</span>
              <span className="text-safari-amber text-xl font-bold font-serif">
                {totalPrice ? `₹${totalPrice.toLocaleString('en-IN')}` : '—'}
              </span>
            </div>
          </div>

          <p className="text-safari-cream/40 text-xs leading-relaxed">
            Prices include park entry, guide, and smart routing via our sensor network.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="card-dark rounded-2xl p-5 border border-safari-green/20">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-safari-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-sm">🧠</span>
          </div>
          <div>
            <h4 className="text-safari-cream font-semibold text-sm mb-1.5">What makes this different?</h4>
            <p className="text-safari-cream/50 text-xs leading-relaxed">
              Your safari is powered by live wildlife sensor data. Routes are adjusted in real time based on animal movement — not fixed schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SummaryRow({ label, value, placeholder }) {
  return (
    <div className="flex justify-between items-center gap-4">
      <span className="text-safari-cream/50 text-sm flex-shrink-0">{label}</span>
      <span className={`text-sm text-right ${value ? 'text-safari-cream font-medium' : 'text-safari-cream/20 italic'}`}>
        {value || placeholder}
      </span>
    </div>
  )
}
