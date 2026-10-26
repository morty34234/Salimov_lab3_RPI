import { Link } from "react-router-dom";
import { lectors } from "../data/lectors.js";
import { useFavorites } from "../context/FavoritesContext.jsx";

const Lectors = () => {
  throw new Error("Тестовая ошибка для проверки Error Boundary");
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="lectors-page">
      <h1>Наши лекторы</h1>

      <div className="lectors-list">
        {lectors.map((lector) => {
          const favorite = isFavorite(lector.id);
          return (
            <div key={lector.id} className="lector-row">
              <img
                src={lector.photo}
                alt={lector.name}
                className="lector-photo"
              />

              <div className="lector-info">
                <h2>{lector.name}</h2>
                <p className="lector-degree">{lector.degree}</p>
                <p>{lector.shortDescription}</p>

                <div className="lector-actions">
                  <button
                    className={`heart-btn ${favorite ? "active" : ""}`}
                    onClick={() => toggleFavorite(lector.id)}
                    aria-label="В избранное"
                  >
                    {favorite ? "★" : "☆"}
                  </button>

                  <Link to={`/lectors/${lector.id}`} className="more-btn">
                    Подробнее →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lectors;