const variants = {
  primary: 'bg-navy-800 text-white px-6 py-3 rounded-lg hover:bg-navy-950 transition font-medium',
  outline: 'border border-navy-800 text-navy-800 px-6 py-3 rounded-lg hover:bg-navy-100 transition',
  gold: 'bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-400 transition font-medium',
};

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
