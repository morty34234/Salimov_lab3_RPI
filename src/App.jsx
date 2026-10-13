import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Partners from './pages/Partners.jsx';
import Lectors from './pages/Lectors.jsx';
import Contacts from './pages/Contacts.jsx';
import Lectorsdetail from './pages/Lectorsdetail.jsx';
import { Routes, Route } from "react-router-dom";
import './styles/styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/lectors" element={<Lectors />} />
          <Route path="/lectors/:id" element={<Lectorsdetail />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <footer className="footer">
        &copy; 2026 МастерЗнаний
      </footer>
    </div>
  );
}

export default App;