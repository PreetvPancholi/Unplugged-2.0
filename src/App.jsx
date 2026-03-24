import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Home from './customer/pages/Home'
import Booking from './customer/pages/Booking'
import Contact from './customer/pages/Contact'
import RangerLogin from './ranger/pages/RangerLogin'
import RangerDashboard from './ranger/pages/RangerDashboard'
import RangerBookingsPage from './ranger/pages/RangerBookingsPage'
import RangerMessagesPage from './ranger/pages/RangerMessagesPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        {/* ── Customer Routes (with Navbar + Footer) ── */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-safari-dark flex flex-col">
              <Navbar />
              <main className="flex-1"><Home /></main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/book"
          element={
            <div className="min-h-screen bg-safari-dark flex flex-col">
              <Navbar />
              <main className="flex-1"><Booking /></main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="min-h-screen bg-safari-dark flex flex-col">
              <Navbar />
              <main className="flex-1"><Contact /></main>
              <Footer />
            </div>
          }
        />

        {/* ── Ranger Routes (no Navbar/Footer) ── */}
        <Route
          path="/ranger"
          element={
            isAuthenticated
              ? <Navigate to="/ranger/dashboard" replace />
              : <RangerLogin onLogin={() => setIsAuthenticated(true)} />
          }
        />
        <Route
          path="/ranger/dashboard"
          element={
            isAuthenticated
              ? <RangerDashboard onLogout={() => setIsAuthenticated(false)} />
              : <Navigate to="/ranger" replace />
          }
        />
        <Route
          path="/ranger/bookings"
          element={
            isAuthenticated
              ? <RangerBookingsPage onLogout={() => setIsAuthenticated(false)} />
              : <Navigate to="/ranger" replace />
          }
        />
        <Route
          path="/ranger/messages"
          element={
            isAuthenticated
              ? <RangerMessagesPage onLogout={() => setIsAuthenticated(false)} />
              : <Navigate to="/ranger" replace />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
