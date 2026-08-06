import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, History, Box, Brain } from 'lucide-react';

const MOBILE_NAV_LINKS = [
  { path: '/', label: 'home', icon: HomeIcon },
  { path: '/experience', label: 'Exp', icon: History },
  { path: '/projects', label: 'projects', icon: Box },
  { path: '/assistant', label: 'AI', icon: Brain },
];

const isActive = (pathname: string, linkPath: string) =>
  linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath);

export const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl border-t border-outline-variant/10 px-8 py-3 z-50">
      <div className="flex justify-between items-center">
        {MOBILE_NAV_LINKS.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 ${isActive(pathname, path) ? 'text-secondary' : 'text-on-primary-container'}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-tighter">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
