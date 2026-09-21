import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const titles: Record<string, string> = {
  '/': 'Dashibodi',
  '/wanachama': 'Wanachama',
  '/hisa': 'Hisa',
  '/pesa-jamii': 'Pesa ya Jamii',
  '/faini': 'Faini',
  '/mikopo': 'Mikopo',
  '/ripoti': 'Ripoti',
  '/mipangilio': 'Mipangilio',
};

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = titles[location.pathname] ?? 'VICOBA';

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-area">
        <header className="topbar">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(true)}
            aria-label="Fungua menyu"
          >
            <Menu size={22} />
          </button>
          <span className="topbar-title">{title}</span>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
