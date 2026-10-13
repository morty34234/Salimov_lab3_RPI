import React from 'react';


const Partners = () => {
  return (
    <div className="page-container">
      <h1 className="header-h1">Наши партнеры</h1>
      <p className="text-p">Мы плодотворно работаем со многими компаниями. Среди них:</p>
      
      <div className="grid">
        <div className="card">
          <div className="card1">
            <img src="https://storage.yandexcloud.net/lectorsphoto/icl.png" alt="ICL" className="photo1" />
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
           <img src="https://storage.yandexcloud.net/lectorsphoto/tat.png" alt="Татнефть" className="photo2" />
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
  );
};

export default Partners;