export default function Input({ label, error, register, name, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-navy-800">{label}</label>}
      <input
        {...register(name)}
        className={`px-4 py-2.5 border rounded-lg text-sm outline-none transition focus:ring-2 focus:ring-navy-500 ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-slate-300'
        }`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
