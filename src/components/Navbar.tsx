import { Link, useLocation } from 'react-router-dom';
import { Terminal, Moon } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'home' },
  { path: '/projects', label: 'projects' },
  { path: '/experience', label: 'experience' },
  { path: '/assistant', label: 'AI Assistant' },
  { path: '/blog', label: 'blog' },
];

const isActive = (pathname: string, linkPath: string) =>
  linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath);

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-3xl border-b border-outline-variant/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <Terminal className="text-secondary w-6 h-6" />
          <span className="text-xl font-bold tracking-tighter font-headline">Tanmesh Joshi</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-headline text-sm tracking-tight">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`capitalize transition-colors ${
                isActive(pathname, path) ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-primary-container hover:text-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <button className="p-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all">
          <Moon className="w-5 h-5" />
        </button>
      </nav>
    </header>
  );
};
