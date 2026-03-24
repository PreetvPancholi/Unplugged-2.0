import { useState } from 'react'

const INITIAL_MESSAGES = [
  {
    id: 1,
    name: 'Ananya K.',
    subject: 'Group Bookings',
    message: 'Hi, we are a group of 14 planning a visit...',
    time: '05:30 AM',
    read: false,
  },
  {
    id: 2,
    name: 'Rahul S.',
    subject: 'Booking Help',
    message: 'My booking reference is not showing up in the confirmation email...',
    time: '04:15 AM',
    read: true,
  },
  {
    id: 3,
    name: 'Priya M.',
    subject: 'Feedback',
    message: 'Amazing experience yesterday, the tiger sighting was incredible...',
    time: 'Yesterday',
    read: true,
  },
]

const subjectColor = {
  'Group Bookings': 'bg-purple-500/15 text-purple-400',
  'Booking Help':   'bg-blue-500/15 text-blue-400',
  'Feedback':       'bg-green-500/15 text-green-400',
}

export default function ContactMessageFeed() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)

  const toggleRead = (id) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: !m.read } : m))
  }

  const unreadCount = messages.filter(m => !m.read).length

  return (
    <div className="bg-safari-darker rounded-xl border border-white/5 p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h2 className="text-safari-amber font-semibold text-sm tracking-wider uppercase">Guest Messages</h2>
          <p className="text-safari-cream/30 text-xs mt-0.5">From contact form</p>
        </div>
        {unreadCount > 0 && (
          <span className="bg-safari-amber text-safari-dark text-xs font-bold px-2 py-0.5 rounded-full">
            {unreadCount} new
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {messages.map((msg) => (
          <div key={msg.id}
            className={`rounded-lg border px-3 py-2.5 transition-all duration-200
              ${msg.read ? 'bg-safari-dark border-white/5' : 'bg-safari-amber/5 border-safari-amber/20'}`}
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                {!msg.read && (
                  <span className="w-2 h-2 rounded-full bg-safari-amber flex-shrink-0 mt-0.5" />
                )}
                <span className="text-safari-cream font-semibold text-xs">{msg.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${subjectColor[msg.subject]}`}>
                  {msg.subject}
                </span>
              </div>
              <span className="text-safari-cream/30 text-xs flex-shrink-0">{msg.time}</span>
            </div>
            <p className="text-safari-cream/55 text-xs leading-relaxed truncate mb-2">{msg.message}</p>
            {!msg.read && (
              <button
                onClick={() => toggleRead(msg.id)}
                className="text-safari-amber/70 hover:text-safari-amber text-[10px] font-medium transition-colors duration-200"
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
