import { AlertTriangle } from 'lucide-react';

export default function Faini() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Faini</h1>
        <p className="page-subtitle">
          Faini za kuchelewa kikao na marejesho
        </p>
      </div>
      <div className="card">
        <div className="placeholder">
          <AlertTriangle size={48} className="placeholder-icon" />
          <h2>Moduli ya Faini</h2>
          <p>Hapa tutasimamia faini za wanachama.</p>
        </div>
      </div>
    </div>
  );
}
