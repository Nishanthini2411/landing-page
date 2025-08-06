import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import "./Login.css";
import "./Dashboard.css";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(true);
    navigate("/dashboard");
  };

  return (
    <div className="login-container neon-bg">
      <div className="neon-card">
        <h2 className="login-title">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button className="neon-btn">Login</button>
          <p className="forgot-text">
            Forgot Password? <a href="#">Click Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

function DashboardPage({ onLogout }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul>
          <li><i className="fas fa-home"></i> Home</li>
          <li><i className="fas fa-user"></i> Profile</li>
          <li><i className="fas fa-cogs"></i> Settings</li>
          <li><i className="fas fa-chart-line"></i> Analytics</li>
          <li>
            <i className="fas fa-sign-out-alt"></i>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                onLogout();
              }}
            >
              Logout
            </span>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <header>
          <h1>Welcome to Your Dashboard</h1>
        </header>
      </main>
    </div>
  );
}

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <DashboardPage onLogout={() => setIsLoggedIn(false)} />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default Login;
