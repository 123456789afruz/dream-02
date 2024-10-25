import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <section className="footer">
          <div className="container">
            <h2>Форма заказа билета в будущее</h2>
            <div className="footer__wrapper">
              <input placeholder='Имя' type="text" />
              <input placeholder='E-mail' type="text" />
              <input placeholder='Телефон' type="text" />
              <input placeholder='Куда я полечу в ближайшее время?' type="text" />
              <button>Двигаться к мечте!</button>

            </div>
          </div>
            <h5>© Все мои мечты защищены моим трудолюбием</h5>
        </section>
    </>
  )
}

export default Footer