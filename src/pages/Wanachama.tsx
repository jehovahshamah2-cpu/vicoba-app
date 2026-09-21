import { Users } from 'lucide-react';

export default function Wanachama() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Wanachama</h1>
        <p className="page-subtitle">Usimamizi wa wanachama wa VICOBA</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <Users size={48} className="placeholder-icon" />
          <h2>Moduli ya Wanachama</h2>
          <p>Hapa tutaongeza, kuhariri na kufuta wanachama.</p>
        </div>
      </div>
    </div>
  );
}
