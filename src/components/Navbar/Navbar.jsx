import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../LoginModal.jsx";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const navItems = [
    { to: '/', label: 'Главная' },
    { to: '/partners', label: 'Партнёры' },
    { to: '/about', label: 'О нас' },
    { to: '/lectors', label: 'Лекторы' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="logo">
          Мастер<span>Знаний</span>
        </NavLink>
        <div className="nav-buttons">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `btn ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <button
          className="btn login-btn"
          onClick={() => setShowLogin(true)}
        >
          Войти
        </button>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;