export default function TestimonialCard({ quote, author, location }) {
  return (
    <div className="card-dark p-7 flex flex-col gap-5 hover:border-safari-amber/20 transition-all duration-300 hover:-translate-y-0.5">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-safari-amber" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <div className="absolute -top-2 -left-1 text-safari-amber/20 text-6xl font-serif leading-none select-none">"</div>
        <p className="text-safari-cream/80 text-sm leading-relaxed pt-4 italic">{quote}</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-safari-green/30 border border-safari-green/50 flex items-center justify-center text-safari-cream font-serif font-bold text-sm">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-safari-cream font-medium text-sm">{author}</p>
          <p className="text-safari-cream/40 text-xs">{location}</p>
        </div>
      </div>
    </div>
  )
}
