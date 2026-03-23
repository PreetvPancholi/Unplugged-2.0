import { useState } from 'react'
import FAQAccordion from '../components/FAQAccordion'

const SUBJECTS = [
  'General Inquiry',
  'Booking Help',
  'Group Bookings (7+ guests)',
  'Media / Press',
  'Feedback',
]

const faqItems = [
  {
    question: 'How does the smart routing work?',
    answer: 'Our IoT sensor nodes detect wildlife across 6 zones. The central system predicts animal movement and guides jeeps to optimal viewing areas — all in real time.',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer: 'Yes, cancellations or changes are accepted up to 48 hours before your safari date. Contact us at the email above.',
  },
  {
    question: 'Is the safari safe?',
    answer: 'Absolutely. Our rangers are experienced professionals and the system monitors zone activity to prevent dangerous close encounters.',
  },
  {
    question: 'How many jeeps operate at once?',
    answer: 'We operate 6 smart-tracked jeeps, with dynamic allocation to ensure no zone is overcrowded.',
  },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-safari-dark pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Contact</span>
          <h1 className="section-title">Get in Touch</h1>
          <p className="text-safari-cream/55 text-lg">
            Questions, feedback, or planning a group safari? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Contact Form ───────────────────────────── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-dark border border-safari-green/30 text-center py-14 px-8">
                <div className="w-20 h-20 rounded-full bg-safari-green/20 border-2 border-safari-green/50
                  flex items-center justify-center text-5xl mx-auto mb-6">
                  ✅
                </div>
                <h2 className="font-serif text-3xl font-bold text-safari-cream mb-3">Message Received!</h2>
                <p className="text-safari-cream/60 text-base mb-8">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setForm(initialForm); setSubmitted(false) }}
                  className="btn-outline text-sm px-6 py-2.5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark space-y-6">
                <h2 className="font-serif text-2xl font-bold text-safari-cream pb-4 border-b border-white/5">
                  Send a Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label-text">Email *</label>
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

                <div>
                  <label className="label-text">Subject *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="" disabled>Select a subject</option>
                    {SUBJECTS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-text">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-base">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Park Info ─────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Visit Info Card */}
            <div className="card-dark">
              <h3 className="font-serif text-xl font-bold text-safari-cream mb-6 pb-4 border-b border-white/5">
                Visit Us
              </h3>
              <div className="flex flex-col gap-5">
                <InfoRow icon="📍" label="Address">
                  Jungle Biosphere Reserve Entry Gate 1,<br />
                  NH-7, Madhya Pradesh, India – 481 001
                </InfoRow>
                <InfoRow icon="📞" label="Phone">
                  +91 98765 43210
                </InfoRow>
                <InfoRow icon="📧" label="Email">
                  contact@predictivesafari.in
                </InfoRow>
                <InfoRow icon="🕐" label="Hours">
                  <span className="block">Safari: 6:00 AM – 7:00 PM (daily)</span>
                  <span className="block text-safari-cream/40 text-xs mt-0.5">Office: 9:00 AM – 5:00 PM (Mon–Sat)</span>
                </InfoRow>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card-dark overflow-hidden">
              <div className="w-full h-48 bg-safari-dark rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 relative">
                {/* Grid lines for map feel */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-2 animate-bounce">📍</div>
                  <p className="text-safari-cream/50 text-sm font-medium">Interactive map coming soon</p>
                  <p className="text-safari-cream/30 text-xs mt-1">NH-7, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card-dark">
              <h3 className="font-serif text-xl font-bold text-safari-cream mb-5">
                Frequently Asked
              </h3>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-safari-amber/10 border border-safari-amber/20 
        flex items-center justify-center text-base flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-safari-cream/40 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
        <p className="text-safari-cream/80 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
