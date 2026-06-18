export default function Card({ className = '', children }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
