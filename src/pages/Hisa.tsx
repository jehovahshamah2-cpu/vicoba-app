import { Coins } from 'lucide-react';

export default function Hisa() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Hisa</h1>
        <p className="page-subtitle">Kununua, kuuza na kufuatilia hisa</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <Coins size={48} className="placeholder-icon" />
          <h2>Moduli ya Hisa</h2>
          <p>Hapa tutasimamia hisa za wanachama.</p>
        </div>
      </div>
    </div>
  );
}
