import { useState } from 'react';
import { Users, Plus, Search, Pencil, Trash2, X } from 'lucide-react';
import { useVicoba } from '../store/vicobaStore';
import type { Mwanachama } from '../types';

const fomuTupu = {
  jina: '',
  simu: '',
  mahali: '',
  tareheKujiunga: new Date().toISOString().slice(0, 10),
  hali: 'hai' as 'hai' | 'amesimama',
  kumbuka: '',
};

export default function Wanachama() {
  const { wanachama, ongezaMwanachama, haririMwanachama, futaMwanachama } = useVicoba();
  const [tafuta, setTafuta] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [fomu, setFomu] = useState(fomuTupu);
  const [kufutaId, setKufutaId] = useState<string | null>(null);

  const waliochujwa = wanachama.filter((w) => {
    const t = tafuta.toLowerCase();
    return (
      w.jina.toLowerCase().includes(t) ||
      w.simu.includes(t) ||
      w.nambaYaMwanachama.toLowerCase().includes(t)
    );
  });

  function funguaOngeza() {
    setEditingId(null);
    setFomu(fomuTupu);
    setModalOpen(true);
  }

  function funguaHariri(w: Mwanachama) {
    setEditingId(w.id);
    setFomu({
      jina: w.jina,
      simu: w.simu,
      mahali: w.mahali,
      tareheKujiunga: w.tareheKujiunga,
      hali: w.hali,
      kumbuka: w.kumbuka ?? '',
    });
    setModalOpen(true);
  }

  function hifadhi(e: React.FormEvent) {
    e.preventDefault();
    if (!fomu.jina.trim() || !fomu.simu.trim()) return;
    if (editingId) {
      haririMwanachama(editingId, fomu);
    } else {
      ongezaMwanachama(fomu);
    }
    setModalOpen(false);
  }

  function thibitishaKufuta() {
    if (kufutaId) futaMwanachama(kufutaId);
    setKufutaId(null);
  }

  const wanachamaHai = wanachama.filter((w) => w.hali === 'hai').length;

  return (
    <div>
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Wanachama</h1>
          <p className="page-subtitle">
            Jumla: {wanachama.length} &middot; Hai: {wanachamaHai}
          </p>
        </div>
        <button className="btn-primary" onClick={funguaOngeza}>
          <Plus size={18} /> Ongeza
        </button>
      </div>

      <div className="search-box">
        <Search size={18} />
        <input
          placeholder="Tafuta kwa jina, simu au namba..."
          value={tafuta}
          onChange={(e) => setTafuta(e.target.value)}
        />
      </div>

      {waliochujwa.length === 0 ? (
        <div className="card">
          <div className="placeholder">
            <Users size={48} className="placeholder-icon" />
            <h2>{wanachama.length === 0 ? 'Hakuna wanachama bado' : 'Hakuna matokeo'}</h2>
            <p>
              {wanachama.length === 0
                ? 'Bonyeza "Ongeza" kuanza kuandikisha wanachama.'
                : 'Badilisha maneno ya kutafuta.'}
            </p>
          </div>
        </div>
      ) : (
        <div className="mwanachama-list">
          {waliochujwa.map((w) => (
            <div key={w.id} className="mwanachama-card">
              <div className="mwanachama-avatar">
                {w.jina.charAt(0).toUpperCase()}
              </div>
              <div className="mwanachama-info">
                <div className="mwanachama-jina">{w.jina}</div>
                <div className="mwanachama-meta">
                  <span>{w.nambaYaMwanachama}</span>
                  <span>•</span>
                  <span>{w.simu}</span>
                </div>
                <div className="mwanachama-meta">
                  {w.mahali && <span>{w.mahali}</span>}
                  <span className={`badge ${w.hali === 'hai' ? 'badge-green' : 'badge-gray'}`}>
                    {w.hali === 'hai' ? 'Hai' : 'Amesimama'}
                  </span>
                </div>
              </div>
              <div className="mwanachama-actions">
                <button className="btn-icon" onClick={() => funguaHariri(w)} title="Hariri">
                  <Pencil size={16} />
                </button>
                <button
                  className="btn-icon btn-danger"
                  onClick={() => setKufutaId(w.id)}
                  title="Futa"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingId ? 'Hariri Mwanachama' : 'Ongeza Mwanachama'}</h2>
              <button className="btn-icon" onClick={() => setModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={hifadhi} className="modal-body">
              <div className="form-group">
                <label>Jina kamili *</label>
                <input
                  required
                  value={fomu.jina}
                  onChange={(e) => setFomu({ ...fomu, jina: e.target.value })}
                  placeholder="Mfano: Juma Mwangi"
                />
              </div>
              <div className="form-group">
                <label>Namba ya simu *</label>
                <input
                  required
                  value={fomu.simu}
                  onChange={(e) => setFomu({ ...fomu, simu: e.target.value })}
                  placeholder="Mfano: 0712 345 678"
                />
              </div>
              <div className="form-group">
                <label>Mahali / Kijiji</label>
                <input
                  value={fomu.mahali}
                  onChange={(e) => setFomu({ ...fomu, mahali: e.target.value })}
                  placeholder="Mfano: Kijiji cha Mwanga"
                />
              </div>
              <div className="form-group">
                <label>Tarehe ya kujiunga</label>
                <input
                  type="date"
                  value={fomu.tareheKujiunga}
                  onChange={(e) => setFomu({ ...fomu, tareheKujiunga: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Hali</label>
                <select
                  value={fomu.hali}
                  onChange={(e) =>
                    setFomu({ ...fomu, hali: e.target.value as 'hai' | 'amesimama' })
                  }
                >
                  <option value="hai">Hai</option>
                  <option value="amesimama">Amesimama</option>
                </select>
              </div>
              <div className="form-group">
                <label>Kumbuka</label>
                <textarea
                  rows={2}
                  value={fomu.kumbuka}
                  onChange={(e) => setFomu({ ...fomu, kumbuka: e.target.value })}
                  placeholder="Maelezo ya ziada (si lazima)"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Ghairi
                </button>
                <button type="submit" className="btn-primary">
                  {editingId ? 'Hifadhi' : 'Ongeza'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {kufutaId && (
        <div className="modal-overlay" onClick={() => setKufutaId(null)}>
          <div className="modal modal-small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Futa Mwanachama?</h2>
            </div>
            <div className="modal-body">
              <p>Una uhakika? Hatua hii haiwezi kurudishwa.</p>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setKufutaId(null)}>
                  Ghairi
                </button>
                <button className="btn-danger-solid" onClick={thibitishaKufuta}>
                  Futa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
