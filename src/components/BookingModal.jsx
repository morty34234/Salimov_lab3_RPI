import { useState } from "react";
import "./BookingModal.css";

const BookingModal = ({ lector, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({
      lectorId: lector.id,
      lectorName: lector.name,
      ...form,
      date: new Date().toISOString(),
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {sent ? (
          <div className="modal-success">
            <h2>Спасибо!</h2>
            <p>
              Ваша заявка на занятие с <strong>{lector.name}</strong> отправлена.
              Мы свяжемся с вами в ближайшее время.
            </p>
            <button className="modal-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <h2>Записаться к лектору</h2>
            <p className="modal-subtitle">{lector.name}</p>

            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Комментарий (необязательно)"
                value={form.message}
                onChange={handleChange}
                rows={3}
              />
              <button type="submit" className="modal-btn">
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;