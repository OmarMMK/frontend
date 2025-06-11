import { Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/form" element={<UserForm />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
export default App;
