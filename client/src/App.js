import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import ChatPage from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/dashboard' element={<DashboardPage />}/>
        <Route path='/chat' element={<ChatPage />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
