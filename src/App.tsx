import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Wanachama from './pages/Wanachama';
import Hisa from './pages/Hisa';
import PesaJamii from './pages/PesaJamii';
import Faini from './pages/Faini';
import Mikopo from './pages/Mikopo';
import Ripoti from './pages/Ripoti';
import Mipangilio from './pages/Mipangilio';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="wanachama" element={<Wanachama />} />
        <Route path="hisa" element={<Hisa />} />
        <Route path="pesa-jamii" element={<PesaJamii />} />
        <Route path="faini" element={<Faini />} />
        <Route path="mikopo" element={<Mikopo />} />
        <Route path="ripoti" element={<Ripoti />} />
        <Route path="mipangilio" element={<Mipangilio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
