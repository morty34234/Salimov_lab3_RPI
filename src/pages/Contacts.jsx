import React from 'react';


const Contacts = () => {
  return (
    <div className="page-container">
      <h1 className="header-h1">Контакты</h1>
      <div className="contacts-wrapper">
        <div className="contact-item">
          <strong>Адрес:</strong> г. Казань, ул. Программистов, д. 1
        </div>
        <div className="contact-item">
          <strong>Телефон:</strong> +7 (999) 777-77-77
        </div>
        <div className="contact-item">
          <strong>Email:</strong> info@master-znaniy.ru
        </div>
        <div className="contact-item">
          <strong>Соцсети:</strong> Telegram, VK, YouTube
        </div>
      </div>
     
    </div>
  );
};

export default Contacts;