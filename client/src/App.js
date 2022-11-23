import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import ChatPage from './pages/Chat';
import Navbar from './component/Navigation';
import Navigation from './component/Navigation';

function App() {
  return (
    <BrowserRouter>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Navigation />}

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
