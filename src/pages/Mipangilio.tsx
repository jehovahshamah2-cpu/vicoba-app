import { Settings } from 'lucide-react';

export default function Mipangilio() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Mipangilio</h1>
        <p className="page-subtitle">Thamani ya hisa, riba na mipangilio mingine</p>
      </div>
      <div className="card">
        <div className="placeholder">
          <Settings size={48} className="placeholder-icon" />
          <h2>Mipangilio ya Mfumo</h2>
          <p>Hapa tutaweka thamani ya hisa moja, riba n.k.</p>
        </div>
      </div>
    </div>
  );
}
