import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white' : 'text-zinc-400';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 p-20">
        <div className="flex items-center justify-around">
          <Link to="/">
            <h1 className="text-xl font-bold text-white hover:text-zinc-300 transition-colors">Jens Lundsgaard</h1>
          </Link>
          <div className="flex gap-5 flex-0.1">
            <Link to="/about" className={`${isActive('/about')} hover:text-white transition-colors`}>About</Link>
            <Link to="/experience" className={`${isActive('/experience')} hover:text-white transition-colors`}>Experience</Link>
            <Link to="/education" className={`${isActive('/education')} hover:text-white transition-colors`}>Education</Link>
            <Link to="/skills" className={`${isActive('/skills')} hover:text-white transition-colors`}>Skills</Link>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-white transition-colors`}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
