import { LayoutDashboard } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashibodi</h1>
        <p className="page-subtitle">Muhtasari wa VICOBA yako</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <LayoutDashboard size={48} className="placeholder-icon" />
          <h2>Dashibodi</h2>
          <p>Hapa tutaonyesha takwimu za jumla. Tutaijenga baadaye.</p>
        </div>
      </div>
    </div>
  );
}
