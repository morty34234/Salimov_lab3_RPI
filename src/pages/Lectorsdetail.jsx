import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { lectors } from "../data/lectors.js";
import { useFavorites } from "../context/FavoritesContext.jsx";
import BookingModal from "../components/BookingModal.jsx";


const Lectorsdetail = () => {
  const { id } = useParams();
  const lector = lectors.find((l) => l.id === Number(id));
  const { toggleFavorite, isFavorite } = useFavorites();
  const [showBooking, setShowBooking] = useState(false);

  if (!lector) {
    return (
      <div className="lector-detail">
        <h1>Лектор не найден</h1>
        <Link to="/lectors">← Вернуться к списку</Link>
      </div>
    );
  }

  const favorite = isFavorite(lector.id);

  return (
    <div className="lector-detail">
      <Link to="/lectors" className="back-link">← Назад к списку</Link>

      <div className="detail-layout">
        <div className="detail-left">
          <img src={lector.photo} alt={lector.name} className="detail-photo" />
        </div>

        <div className="detail-right">
          <h1>{lector.name}</h1>

          <div className="detail-meta">
            <p><strong>Образование:</strong> {lector.education}</p>
            <p><strong>Стаж:</strong> {lector.experience}</p>
            <p><strong>Учёная степень:</strong> {lector.degree}</p>
          </div>

          <p className="detail-short">{lector.shortDescription}</p>

          <div className="detail-actions">
            <button
              className="action-btn primary"
              onClick={() => setShowBooking(true)}
            >
              Записаться
            </button>

            <button
              className={`action-btn favorite ${favorite ? "active" : ""}`}
              onClick={() => toggleFavorite(lector.id)}
            >
              {favorite ? "★ В избранном" : "☆ В избранное"}
            </button>
          </div>

          <h2 className="section-title">Преподаваемые дисциплины</h2>
          {lector.disciplines.map((disc, i) => (
            <div key={i} className="discipline-block">
              <h3>{disc.title}</h3>
              <p className="discipline-desc">{disc.description}</p>
              <ul className="topics-list">
                {disc.topics.map((topic, j) => <li key={j}>{topic}</li>)}
              </ul>
            </div>
          ))}

          <h2 className="section-title">Тарифы</h2>
          <div className="tariffs">
            {lector.tariffs.map((tariff, i) => (
              <div key={i} className="tariff-card">
                <span className="tariff-label">{tariff.label}</span>
                <span className="tariff-price">{tariff.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showBooking && (
        <BookingModal lector={lector} onClose={() => setShowBooking(false)} />
      )}
    </div>
  );
};

export default Lectorsdetail;