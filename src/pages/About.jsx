import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="header-h1">О нашей платформе</h1>
        <p className="text-p">
          Наша учебная платформа соединяет компании, образовательные учреждения
          и НКО с профессиональными лекторами, спикерами и тренерами. Мы
          упрощаем процесс подбора, бронирования и организации лекций, помогая
          находить экспертов, которые не просто делятся знаниями, но и
          вдохновляют аудиторию.
        </p>
      </section>
      <section className="about-stats">
        <div className="stat">
          <span className="stat-number">10</span>
          <span className="stat-label">лекторов</span>
        </div>
        <div className="stat">
          <span className="stat-number">5</span>
          <span className="stat-label">направлений</span>
        </div>
        <div className="stat">
          <span className="stat-number">500+</span>
          <span className="stat-label">студентов</span>
        </div>
        <div className="stat">
          <span className="stat-number">12</span>
          <span className="stat-label">лет опыта</span>
        </div>
      </section>
      <section className="about-steps">
        <h2 className="header-h1">Как это работает</h2>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-num">1</span>
            <h4>Выбираете лектора</h4>
            <p>Смотрите профили, дисциплины и тарифы</p>
          </div>
          <div className="step-card">
            <span className="step-num">2</span>
            <h4>Оставляете заявку</h4>
            <p>Нажимаете «Записаться» на странице лектора</p>
          </div>
          <div className="step-card">
            <span className="step-num">3</span>
            <h4>Согласуете время</h4>
            <p>Мы связываемся с вами в течение дня</p>
          </div>
          <div className="step-card">
            <span className="step-num">4</span>
            <h4>Начинаете занятия</h4>
            <p>Онлайн или офлайн — как удобно</p>
          </div>
        </div>
      </section>
      <section className="about-cta">
        <h2>Готовы начать?</h2>
        <p>Выберите лектора и запишитесь на первое занятие</p>
        <div className="cta-buttons">
          <Link to="/lectors" className="cta-btn primary">
            Найти лектора
          </Link>
          <Link to="/contacts" className="cta-btn secondary">
            Связаться с нами
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;