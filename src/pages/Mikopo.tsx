import { HandCoins } from 'lucide-react';

export default function Mikopo() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Mikopo</h1>
        <p className="page-subtitle">Utoaji na urejeshaji wa mikopo</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <HandCoins size={48} className="placeholder-icon" />
          <h2>Moduli ya Mikopo</h2>
          <p>Hapa tutasimamia mikopo na marejesho yake.</p>
        </div>
      </div>
    </div>
  );
}
