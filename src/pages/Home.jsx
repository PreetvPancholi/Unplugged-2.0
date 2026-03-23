import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PackageCard from '../components/PackageCard'
import TestimonialCard from '../components/TestimonialCard'
import StepTimeline from '../components/StepTimeline'

// ── Data ──────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: '🐅',
    title: 'Wildlife-First Routing',
    description: 'Our sensor network detects animal movement in real time so your jeep is always in the right place at the right time.',
  },
  {
    icon: '🚙',
    title: 'Zero Overcrowding',
    description: 'Dynamic zone allocation ensures no area is overwhelmed, keeping animals calm and your experience exclusive.',
  },
  {
    icon: '🌿',
    title: 'Conservation by Design',
    description: 'Every route is optimized to minimize ecological disturbance — technology that puts nature first.',
  },
]

const steps = [
  {
    icon: '👁️',
    title: 'Wildlife Sensors',
    description: 'IR motion sensors and ESP32-CAM nodes detect animal presence across the park, identifying species in real time.',
  },
  {
    icon: '🛰️',
    title: 'Jeep Tracking',
    description: 'Each safari vehicle carries a GPS + LoRa node, broadcasting live location to our central system.',
  },
  {
    icon: '🧠',
    title: 'Predictive Intelligence',
    description: 'Our server calculates animal movement vectors and dynamically zones the park into Red, Yellow, and Blue regions.',
  },
  {
    icon: '🗺️',
    title: 'Smart Routing',
    description: 'Rangers receive live instructions. Your jeep is guided to where the action is — before the crowd arrives.',
  },
]

const packages = [
  {
    name: 'Dawn Patrol',
    time: '6:00 AM – 9:00 AM',
    guests: 6,
    jeep: 'Open Jeep',
    bestFor: 'Big cats, deer',
    price: '₹1,499',
  },
  {
    name: 'Golden Hour',
    time: '4:00 PM – 7:00 PM',
    guests: 6,
    jeep: 'Open Jeep',
    bestFor: 'Elephants, leopards',
    price: '₹1,799',
  },
  {
    name: 'Full Day Expedition',
    time: '7:00 AM – 5:00 PM',
    guests: 4,
    jeep: 'Covered Jeep',
    bestFor: 'All species, photographers',
    price: '₹4,999',
  },
]

const stats = [
  { value: '5,000+', label: 'Safaris Completed' },
  { value: '47', label: 'Species Tracked' },
  { value: '6', label: 'Smart Sensor Zones' },
  { value: '98%', label: 'Guest Satisfaction' },
]

const testimonials = [
  {
    quote: 'We spotted a tiger within 20 minutes. The guide said the system predicted it would move to that zone. Unbelievable.',
    author: 'Priya M.',
    location: 'Mumbai',
  },
  {
    quote: 'No other jeep was near us the entire time. It felt like a private jungle experience.',
    author: 'Rahul S.',
    location: 'Pune',
  },
  {
    quote: 'The fact that this tech also protects the animals made the whole trip more meaningful.',
    author: 'Ananya K.',
    location: 'Bangalore',
  },
]

// ── Scroll animation hook ─────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, className = '' }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 jungle-texture" />
        <div className="absolute inset-0">
          {/* Decorative jungle silhouette shapes */}
          <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 400\'%3E%3Cpath d=\'M0 400 Q200 250 400 320 Q600 200 800 300 Q1000 250 1200 200 L1200 400Z\' fill=\'%23166534\'/%3E%3C/svg%3E") bottom/cover no-repeat',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-safari-dark/80 via-transparent to-safari-dark/70" />
          {/* Glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safari-green/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-safari-amber/5 rounded-full blur-3xl" />
        </div>

        {/* Silhouette animal (decorative text/emoji) */}
        <div className="absolute right-8 bottom-20 lg:right-24 lg:bottom-28 text-9xl opacity-5 select-none pointer-events-none" aria-hidden>
          🐅
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-24 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-safari-amber/10 border border-safari-amber/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-safari-amber animate-pulse-slow" />
            <span className="text-safari-amber text-xs font-semibold tracking-widest uppercase">IoT-Powered Wildlife Tracking</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-safari-cream mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Where Technology<br />
            <span className="text-gradient-amber">Meets the Wild</span>
          </h1>

          <p className="text-safari-cream/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            AI-powered, sensor-guided safaris that protect wildlife and elevate your experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/book" className="btn-primary text-base px-8 py-4">
              Book Your Safari
            </Link>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline text-base px-8 py-4">
              How It Works
            </a>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
            <span className="text-safari-cream/60 text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4 text-safari-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why Smart Safari ─────────────────────────────── */}
      <section className="safari-section bg-safari-darker">
        <div className="container-xl">
          <RevealSection className="text-center mb-14">
            <span className="section-badge">The Difference</span>
            <h2 className="section-title">Why Smart Safari?</h2>
            <p className="section-subtitle mx-auto">
              We don't guess where animals will be. We know.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <RevealSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-dark h-full group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-safari-amber/10 border border-safari-amber/20 
                    flex items-center justify-center text-2xl mb-5
                    group-hover:bg-safari-amber/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-safari-cream mb-3">{feature.title}</h3>
                  <p className="text-safari-cream/55 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How It Works ──────────────────────────────────── */}
      <section id="how-it-works" className="safari-section bg-safari-dark">
        <div className="container-xl">
          <RevealSection className="text-center mb-16">
            <span className="section-badge">Intelligence System</span>
            <h2 className="section-title">The Intelligence Behind Every Safari</h2>
            <p className="section-subtitle mx-auto">
              Four layers of technology working in harmony, invisibly behind every sighting.
            </p>
          </RevealSection>

          <RevealSection>
            <StepTimeline steps={steps} />
          </RevealSection>
        </div>
      </section>

      {/* ── Section 4: Packages ──────────────────────────────────────── */}
      <section className="safari-section bg-safari-darker">
        <div className="container-xl">
          <RevealSection className="text-center mb-14">
            <span className="section-badge">Safari Packages</span>
            <h2 className="section-title">Choose Your Adventure</h2>
            <p className="section-subtitle mx-auto">
              Every package is intelligently routed for your best possible encounter.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {packages.map((pkg, i) => (
              <RevealSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <PackageCard pkg={pkg} highlighted={i === 1} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Stats ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-safari-green/10 border-y border-safari-green/20">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <RevealSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold font-serif text-safari-amber mb-2">{stat.value}</div>
                  <div className="text-safari-cream/55 text-sm">{stat.label}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Testimonials ──────────────────────────────────── */}
      <section className="safari-section bg-safari-dark">
        <div className="container-xl">
          <RevealSection className="text-center mb-14">
            <span className="section-badge">Guest Stories</span>
            <h2 className="section-title">Heard in the Wild</h2>
            <p className="section-subtitle mx-auto">
              Real experiences from guests who trusted the system.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <TestimonialCard {...t} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-safari-green/20 via-safari-darker to-safari-green/10 border-t border-safari-green/20">
        <div className="container-xl text-center">
          <RevealSection>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-safari-cream mb-4">
              Your next great encounter<br />
              <span className="text-gradient-amber">starts here.</span>
            </h2>
            <p className="text-safari-cream/55 text-lg mb-8">
              Reserve your smart safari today. Limited slots available per zone.
            </p>
            <Link to="/book" className="btn-primary text-base px-10 py-4 inline-block">
              Book Your Safari
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
