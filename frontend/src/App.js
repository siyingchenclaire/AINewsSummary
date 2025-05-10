import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routing/Home';
import About from './routing/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
            <Link to="/about" style={{ color: 'white' }}>About</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
