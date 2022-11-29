import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ChatPage from './pages/Chat';
import Contacts from './pages/Contacts';
import Groupes from './pages/Groupes';
import Navigation from './component/Navigation';
import HomePage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/' && <Navigation />}

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/groups' element={<Groupes />} />
        <Route path='/' element={<HomePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
