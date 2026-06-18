import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, Mail, RefreshCw, Loader } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getAdmissions, getContacts } from '../../api';
import Button from '../../components/ui/Button';

function DataTable({ title, icon: Icon, data, columns, loading, error, onRefresh }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={20} className="text-navy-800" />
          <h2 className="font-serif text-xl text-navy-800">{title}</h2>
          <span className="bg-navy-100 text-navy-800 text-xs px-2 py-0.5 rounded-full font-medium">
            {data.length}
          </span>
        </div>
        <button onClick={onRefresh} className="text-slate-400 hover:text-navy-800 transition" title="Refresh">
          <RefreshCw size={16} />
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader size={24} className="animate-spin text-navy-500" />
        </div>
      ) : error ? (
        <div className="text-center py-12 text-red-500 text-sm">{error}</div>
      ) : data.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm">No submissions yet</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-cream-50 text-navy-800 font-medium">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="px-6 py-3 whitespace-nowrap">{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((row, i) => (
                <tr key={row.id || i} className="hover:bg-cream-50 transition">
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-3 text-slate-600 whitespace-nowrap">
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [admissions, setAdmissions] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loadingAdmissions, setLoadingAdmissions] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoadingAdmissions(true);
    setLoadingContacts(true);
    setError('');
    try {
      const [admRes, conRes] = await Promise.all([getAdmissions(), getContacts()]);
      setAdmissions(admRes.data || []);
      setContacts(conRes.data || []);
    } catch {
      setError('Failed to load data. Make sure the API server is running.');
    } finally {
      setLoadingAdmissions(false);
      setLoadingContacts(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const admissionColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'grade', label: 'Grade' },
    {
      key: 'created_at',
      label: 'Date',
      render: (row) => row.created_at ? new Date(row.created_at).toLocaleDateString() : '-',
    },
  ];

  const contactColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'subject', label: 'Subject' },
    {
      key: 'message',
      label: 'Message',
      render: (row) => (
        <span className="line-clamp-1 max-w-[200px] inline-block">{row.message}</span>
      ),
    },
    {
      key: 'created_at',
      label: 'Date',
      render: (row) => row.created_at ? new Date(row.created_at).toLocaleDateString() : '-',
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <nav className="bg-navy-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-16">
          <span className="font-serif text-white text-xl">Admin Dashboard</span>
          <div className="flex items-center gap-4">
            <span className="text-white/60 text-sm hidden md:block">{user?.name || user?.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white/70 hover:text-gold-600 text-sm transition"
            >
              <LogOut size={16} />
              <span className="hidden md:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-6 py-3 rounded-lg mb-6">
            {error}
            <button onClick={fetchData} className="ml-3 underline font-medium">Retry</button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DataTable
            title="Admission Enquiries"
            icon={Users}
            data={admissions}
            columns={admissionColumns}
            loading={loadingAdmissions}
            error={error}
            onRefresh={fetchData}
          />
          <DataTable
            title="Contact Messages"
            icon={Mail}
            data={contacts}
            columns={contactColumns}
            loading={loadingContacts}
            error={error}
            onRefresh={fetchData}
          />
        </div>
      </div>
    </div>
  );
}
