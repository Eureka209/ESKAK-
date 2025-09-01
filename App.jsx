import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="app-container">
      <header className="header-section">
        <div className="header-content">
          <h3 className="instructor-name">ESKAK Foundation</h3>
          <Link to="/signup.jsx">
            <button className="member-button">Become a Member</button>
          </Link>
        </div>
        <div className="main-title">
          <h4>Conserve Street Kids Lives All Over The World</h4>
          <h1>Even Street Kid Are Kids</h1>
        </div>
      </header>

      <footer className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/uwizeyimana.thierry.9">Facebook</a>
          <a href="https://x.com/bm_thierry209">Twitter</a>
          <a href="https://t.co/IBspFBEFbc">Instagram</a>
        </div>
        <p>© 2025 ESKAK. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
