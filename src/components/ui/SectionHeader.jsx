export default function SectionHeader({ eyebrow, heading, subtext, light = false }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className={`text-xs font-medium tracking-widest uppercase ${light ? 'text-gold-600' : 'text-gold-600'} mb-2`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-4xl mt-2 mb-4 ${light ? 'text-white' : 'text-navy-800'}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`${light ? 'text-white/60' : 'text-slate-500'}`}>{subtext}</p>
      )}
    </div>
  );
}
