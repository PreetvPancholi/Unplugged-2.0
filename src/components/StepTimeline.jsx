export default function StepTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Connecting line - desktop */}
      <div className="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-safari-amber/30 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            {/* Icon circle + number */}
            <div className="relative mb-5">
              <div className="w-20 h-20 rounded-full bg-safari-darker border-2 border-safari-amber/30 
                flex items-center justify-center text-3xl transition-all duration-300
                group-hover:border-safari-amber group-hover:shadow-lg group-hover:shadow-safari-amber/20
                z-10 relative">
                {step.icon}
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-safari-amber 
                flex items-center justify-center text-safari-dark text-xs font-bold z-20">
                {index + 1}
              </div>
            </div>

            {/* Content */}
            <h3 className="font-serif text-lg font-bold text-safari-cream mb-2">{step.title}</h3>
            <p className="text-safari-cream/55 text-sm leading-relaxed">{step.description}</p>

            {/* Mobile connector */}
            {index < steps.length - 1 && (
              <div className="md:hidden w-px h-8 bg-safari-amber/20 mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
