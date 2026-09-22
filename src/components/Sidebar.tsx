import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PaidIcon from '@mui/icons-material/Paid';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WarningIcon from '@mui/icons-material/Warning';
import PaymentsIcon from '@mui/icons-material/Payments';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const menu = [
  { to: '/', label: 'Dashibodi', icon: DashboardIcon, end: true },
  { to: '/wanachama', label: 'Wanachama', icon: PeopleIcon },
  { to: '/hisa', label: 'Hisa', icon: PaidIcon },
  { to: '/pesa-jamii', label: 'Pesa ya Jamii', icon: VolunteerActivismIcon },
  { to: '/faini', label: 'Faini', icon: WarningIcon },
  { to: '/mikopo', label: 'Mikopo', icon: PaymentsIcon },
  { to: '/ripoti', label: 'Ripoti', icon: BarChartIcon },
  { to: '/mipangilio', label: 'Mipangilio', icon: SettingsIcon },
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
          <AccountBalanceIcon sx={{ fontSize: 22 }} />
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
                <Icon sx={{ fontSize: 20 }} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
