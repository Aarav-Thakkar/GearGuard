// src/components/AuthForm.jsx - Fixed Syntax Errors
import { useState } from 'react';

function AuthForm({ isLogin, setIsLogin }) {
  const [role, setRole] = useState('employee');
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { id: 'manager', label: 'Manager', desc: 'Team Lead/Supervisor - Configures, plans, assigns, approves, monitors' },
    { id: 'technician', label: 'Technician', desc: 'Executes tasks, changes ticket states, resolves tickets' },
    { id: 'employee', label: 'Employee', desc: 'Raises maintenance requests' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Fixed: Proper timeout handling
    const timeoutId = setTimeout(() => {
      console.log('Navigating to:', role);
      window.location.href = `/dashboard/${role}`;
      setIsLoading(false);
    }, 1200);
    
    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="authCard">
      <header className="headerContainer">
        <h1 className="appTitle">GearGuard</h1>
        <p className="welcomeText">{isLogin ? 'Welcome back' : 'Create your account'}</p>
      </header>

      <section className="roleSelector">
        {roles.map((r) => (
          <button
            key={r.id}
            className={`roleButton ${role === r.id ? 'roleButtonActive' : ''}`}
            onClick={() => setRole(r.id)}
          >
            <div className="roleIndicator" />
            <div className="roleText">
              <div className="roleLabel">{r.label}</div>
              <div className="roleDescription">{r.desc}</div>
            </div>
          </button>
        ))}
      </section>

      <form onSubmit={handleSubmit} className="authForm">
        {!isLogin && (
          <div className="formGroup">
            <label className="formLabel">Full Name</label>
            <input
              type="text"
              className="primaryInput"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required={!isLogin}
            />
          </div>
        )}
        
        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input
            type="email"
            className="primaryInput"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="formGroup">
          <label className="formLabel">Password</label>
          <input
            type="password"
            className="primaryInput"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••"
            required
          />
        </div>

        {!isLogin && (
          <div className="formGroup">
            <label className="formLabel">Confirm Password</label>
            <input
              type="password"
              className="primaryInput"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="Confirm password"
              required={!isLogin}
            />
          </div>
        )}

        <button 
          type="submit" 
          className={`primaryButton ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Creating Account...</span>
          ) : (
            isLogin ? 'Sign In' : 'Create Account'
          )}
        </button>
      </form>

      <div className="toggleContainer">
        <button
          type="button"
          className="toggleLink"
          onClick={() => setIsLogin(!isLogin)}
          disabled={isLoading}
        >
          {isLogin ? "Don't have an account? Create one" : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
}

export default AuthForm;