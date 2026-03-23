import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 overflow-hidden
              ${isOpen
                ? 'border-safari-amber/30 bg-safari-amber/5'
                : 'border-white/5 bg-safari-darker hover:border-white/10'
              }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className={`font-medium text-sm transition-colors duration-200 ${
                isOpen ? 'text-safari-amber' : 'text-safari-cream/80 group-hover:text-safari-cream'
              }`}>
                {item.question}
              </span>
              <svg
                className={`w-4 h-4 flex-shrink-0 ml-3 transition-all duration-300 ${
                  isOpen ? 'text-safari-amber rotate-180' : 'text-safari-cream/30'
                }`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
              <p className="px-5 pb-4 text-safari-cream/55 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
