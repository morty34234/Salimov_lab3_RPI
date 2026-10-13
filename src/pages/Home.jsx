import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src="../src/images/home.png" alt="Home" className="photo" />
        <div className="text-content">
          <p>
            Наши лекторы — признанные специалисты в своих областях,
            готовые делиться опытом и знаниями.
          </p>
          <Link to="/lectors" className="find-lector-btn">
          Найти лектора
        </Link>
        </div>
      </div>
      
      <section className="page-container">
        <h2 className="header-h1">О нашей платформе</h2>
        <p className="text-p">
          Наша учебная платформа соединяет компании, образовательные учреждения
          и НКО с профессиональными лекторами, спикерами и тренерами. Мы
          упрощаем процесс подбора, бронирования и организации лекций, помогая
          находить экспертов, которые не просто делятся знаниями, но и
          вдохновляют аудиторию.
        </p>

       
      </section>

     <div className="page-container">
      <h1 className="header-h1">Наши партнеры</h1>
      <p className="text-p">Мы плодотворно работаем со многими компаниями. Среди них:</p>
      
      <div className="grid">
        <div className="card">
          <div className="card1">
            <img src="../src/images/icl.png" alt="ICL" className="photo1" />
            <a href="https://icl.ru/" className="partner-btn">
            <p className="text-part">↗</p>
            </a>
          </div>
          <p className="card-text">ICL - высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России,
            предоставляющая весь спектр ИТ-услуг, проектов решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением 
            вычислительных систем (КПО ВС).
          </p>
        </div>
        <div className="card">
          <div className="card1">
           <img src="../src/images/tat.png" alt="Татнефть" className="photo2" />
            <a href="https://www.tatneft.ru/" className="partner-btn">
            <p className="text-part">↗</p>
            </a>
          </div>
          <p className="card-text">"Татнефть" - одна и крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, 
            нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур. 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;