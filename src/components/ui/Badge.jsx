const variantStyles = {
  navy: 'bg-navy-800 text-white',
  gold: 'bg-gold-600 text-white',
  green: 'bg-green-600 text-white',
  red: 'bg-red-600 text-white',
};

export default function Badge({ variant = 'navy', className = '', children }) {
  return (
    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
