import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/auth/ProtectedRoute';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Academics = lazy(() => import('../pages/Academics'));
const Admissions = lazy(() => import('../pages/Admissions'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Events = lazy(() => import('../pages/Events'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-4 border-navy-800 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
