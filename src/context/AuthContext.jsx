import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getMe, login as loginApi, signup as signupApi } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getMe()
        .then((res) => setUser(res.data.user || res.data))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (data) => {
    const res = await loginApi(data);
    const { token, user: userData } = res.data;
    localStorage.setItem('token', token);
    setUser(userData);
    return userData;
  }, []);

  const signup = useCallback(async (data) => {
    const res = await signupApi(data);
    const { token, user: userData } = res.data;
    localStorage.setItem('token', token);
    setUser(userData);
    return userData;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
