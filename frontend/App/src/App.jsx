import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />} 
        />
        <Route path="/dashboard/:role" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;