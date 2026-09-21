import { BarChart3 } from 'lucide-react';

export default function Ripoti() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Ripoti</h1>
        <p className="page-subtitle">Takwimu na mgawanyo wa faida</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <BarChart3 size={48} className="placeholder-icon" />
          <h2>Moduli ya Ripoti</h2>
          <p>Hapa tutaonyesha mgawanyo wa faida kwa hisa.</p>
        </div>
      </div>
    </div>
  );
}
