import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Coins,
  HeartHandshake,
  AlertTriangle,
  HandCoins,
  BarChart3,
  Settings,
  Landmark,
} from 'lucide-react';

const menu = [
  { to: '/', label: 'Dashibodi', icon: LayoutDashboard, end: true },
  { to: '/wanachama', label: 'Wanachama', icon: Users },
  { to: '/hisa', label: 'Hisa', icon: Coins },
  { to: '/pesa-jamii', label: 'Pesa ya Jamii', icon: HeartHandshake },
  { to: '/faini', label: 'Faini', icon: AlertTriangle },
  { to: '/mikopo', label: 'Mikopo', icon: HandCoins },
  { to: '/ripoti', label: 'Ripoti', icon: BarChart3 },
  { to: '/mipangilio', label: 'Mipangilio', icon: Settings },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Landmark size={22} />
          <span>VICOBA</span>
        </div>
        <nav className="sidebar-nav">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
                onClick={onClose}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
