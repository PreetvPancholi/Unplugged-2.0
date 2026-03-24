import { useState } from 'react'
import BookingSummary from '../components/BookingSummary'

const TIME_SLOTS = [
  'Dawn Patrol (6:00 AM – 9:00 AM)',
  'Golden Hour (4:00 PM – 7:00 PM)',
  'Full Day Expedition (7:00 AM – 5:00 PM)',
]

const today = new Date().toISOString().split('T')[0]

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  date: '',
  timeSlot: '',
  guests: '',
  jeepType: 'Open Jeep',
  specialRequests: '',
}

export default function Booking() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-safari-dark pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Reservations</span>
          <h1 className="section-title">Reserve Your Safari</h1>
          <p className="text-safari-cream/55 text-lg">
            Fill in your details and your smart safari will be confirmed instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Form ──────────────────────────────────────── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <SuccessCard email={form.email} onReset={handleReset} />
            ) : (
              <form onSubmit={handleSubmit} className="card-dark space-y-6">
                <h2 className="font-serif text-2xl font-bold text-safari-cream mb-6 pb-4 border-b border-white/5">
                  Your Details
                </h2>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Arjun Sharma"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label-text">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label-text">Safari Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="input-field"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="label-text">Time Slot *</label>
                  <select
                    name="timeSlot"
                    value={form.timeSlot}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="" disabled>Select a time slot</option>
                    {TIME_SLOTS.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="label-text">Number of Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    min={1}
                    max={6}
                    placeholder="1 – 6 guests"
                    required
                    className="input-field"
                  />
                </div>

                {/* Jeep Type */}
                <div>
                  <label className="label-text">Jeep Type *</label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    {['Open Jeep', 'Covered Jeep'].map(type => (
                      <label
                        key={type}
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200
                          ${form.jeepType === type
                            ? 'border-safari-amber/60 bg-safari-amber/10 text-safari-cream'
                            : 'border-white/10 bg-white/3 text-safari-cream/60 hover:border-white/20'
                          }`}
                      >
                        <input
                          type="radio"
                          name="jeepType"
                          value={type}
                          checked={form.jeepType === type}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors duration-200
                          ${form.jeepType === type ? 'border-safari-amber bg-safari-amber' : 'border-white/30'}`}
                        />
                        <div>
                          <p className="text-sm font-medium">{type}</p>
                          {type === 'Open Jeep' && <p className="text-xs text-safari-cream/40">Recommended</p>}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="label-text">Special Requests <span className="text-safari-cream/30">(Optional)</span></label>
                  <textarea
                    name="specialRequests"
                    value={form.specialRequests}
                    onChange={handleChange}
                    placeholder="Dietary needs, physical limitations, photography equipment, etc."
                    rows={3}
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
                  Confirm Booking →
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Summary ──────────────────────────────────── */}
          <div className="lg:col-span-2">
            <BookingSummary formData={form} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SuccessCard({ email, onReset }) {
  return (
    <div className="card-dark border border-safari-green/30 text-center py-14 px-8">
      <div className="w-20 h-20 rounded-full bg-safari-green/20 border-2 border-safari-green/50 
        flex items-center justify-center text-5xl mx-auto mb-6">
        🎉
      </div>
      <h2 className="font-serif text-3xl font-bold text-safari-cream mb-3">Booking Confirmed!</h2>
      <p className="text-safari-cream/60 text-base leading-relaxed mb-2">
        A confirmation will be sent to
      </p>
      <p className="text-safari-amber font-medium mb-6 break-all">{email}</p>
      <p className="text-safari-cream/50 text-sm mb-8">
        Your adventure awaits. Prepare to experience the wild, intelligently.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onReset}
          className="btn-outline text-sm px-6 py-2.5"
        >
          Book Another Safari
        </button>
      </div>
    </div>
  )
}
