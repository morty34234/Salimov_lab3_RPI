import { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Введите корректный email");
      return;
    }
    if (form.password.length < 4) {
      setError("Пароль должен быть минимум 4 символа");
      return;
    }

    setSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {success ? (
          <div className="modal-success">
            <h2>Готово!</h2>
            <p>Вы успешно вошли в систему.</p>
          </div>
        ) : (
          <>
            <h2>Вход</h2>

            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={form.password}
                onChange={handleChange}
                required
              />

              {error && <p className="modal-error">{error}</p>}

              <button type="submit" className="modal-btn">
                Войти
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;