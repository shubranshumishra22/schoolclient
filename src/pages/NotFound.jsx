import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="bg-white py-32">
        <div className="text-center">
          <h1 className="font-serif text-7xl text-navy-800">404</h1>
          <p className="font-serif text-3xl text-navy-950 mt-2">Page Not Found</p>
          <div className="mt-8">
            <Link to="/">
              <Button>Go back home</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
