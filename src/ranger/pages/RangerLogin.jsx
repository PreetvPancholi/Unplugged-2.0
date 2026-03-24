import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RangerLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'ranger' && password === 'safari2026') {
      setError('')
      onLogin()
      navigate('/ranger/dashboard')
    } else {
      setError('Invalid credentials. Access denied.')
    }
  }

  return (
    <div className="min-h-screen bg-safari-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(22,101,52,0.12) 0%, transparent 70%), linear-gradient(180deg, #0a0f0d 0%, #0d1f17 50%, #0a0f0d 100%)',
          }}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(166,101,52,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(166,101,52,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-safari-amber/10 border border-safari-amber/30 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-safari-amber animate-pulse" />
            <span className="text-safari-amber text-xs font-semibold tracking-widest uppercase">Restricted Access</span>
          </div>
        </div>

        <div className="bg-safari-darker border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🐾</div>
            <h1 className="font-serif text-3xl font-bold text-safari-cream mb-2">Ranger Control Access</h1>
            <p className="text-safari-cream/45 text-sm">Predictive Safari Intelligence System</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label-text">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError('') }}
                placeholder="Enter ranger ID"
                autoComplete="username"
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="label-text">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                placeholder="••••••••••"
                autoComplete="current-password"
                required
                className="input-field"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-3.5 text-base mt-2">
              Login to Dashboard →
            </button>
          </form>

          <p className="text-center text-safari-cream/25 text-xs mt-6">
            SafariIQ Ranger Portal v2.0 · UNPLUGGED 2026
          </p>
        </div>
      </div>
    </div>
  )
}
