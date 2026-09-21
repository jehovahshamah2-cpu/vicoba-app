import { HeartHandshake } from 'lucide-react';

export default function PesaJamii() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Pesa ya Jamii</h1>
        <p className="page-subtitle">Michango na matumizi ya pesa ya jamii</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <HeartHandshake size={48} className="placeholder-icon" />
          <h2>Moduli ya Pesa ya Jamii</h2>
          <p>Hapa tutafuatilia michango na matumizi ya jamii.</p>
        </div>
      </div>
    </div>
  );
}
