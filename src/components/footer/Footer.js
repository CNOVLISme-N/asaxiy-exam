import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Malumotlar</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                Bizning brendlarimiz
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Olib ketish punktlari
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Blog
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Bizning brendlarimiz
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Asaxiydagi karyerasi
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Ommaviy oferta (Foydalanuvchi bitimi)
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Muddatli toʻlov asosida sotib 
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                Biz haqimizda
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Biz bilan aloqa</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                +998 71 200 01 05
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                info@asaxiy.uz
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                ​Islom Karimov, 49, Toshkent
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Erishgan yutuqlarimiz</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                "Tahsin" mukofoti
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                "Shuhrat" medali

                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                "Kelajak bunyodkori"

                </a>
              </li>
            </ul>
          </div>
            <div className="footer-container-internal-wrapper">
              <h4 className="footer-container-title">Do'konlarimiz</h4>

              <ul className="footer-container-list">
                <li className="footer-container-item">
                  <a className="footer-container-link" href="">
                  Asaxiy Novza
                  </a>
                </li>

                <li className="footer-container-list">
                  <a className="footer-container-link" href="">
                  Asaxiy Farhod bozori

                  </a>
                </li>
                <li className="footer-container-list">
                  <a className="footer-container-link" href="">
                  Asaxiy Panorama

                  </a>
                </li>
                <li className="footer-container-list">
                  <a className="footer-container-link" href="">
                  Asaxiy Kitob Olami

                  </a>
                </li>
                <li className="footer-container-list">
                  <a className="footer-container-link" href="">
                  Asaxiy Beruniy

                  </a>
                </li>
                <li className="footer-container-list">
                  <a className="footer-container-link" href="">
                  Asaxiy Books Kamolon

                  </a>
                </li>
              </ul>
            </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-social-title">
              Ilovani yuklab olish
            </h4>

            <ul className="footer-container-social-list">
              <li className="footer-container-social-item">
                <a className="footer-container-social-link" href="">
                  <FaApple />
                </a>
                <span>AppStore</span>
              </li>

              <li className="footer-container-social-item">
                <a className="footer-container-social-link" href="">
                  <FaGooglePlay />
                </a>
                <span>Google play</span>
              </li>
            </ul>

            <div className="footer-container-internal-wrapper-bottom">
              <h4 className="footer-container-bottom-contact-title">
                Assaxiy ijtimoiy tarmoqlarda
              </h4>

              <ul className="footer-container-bottom-contact-list">
                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaInstagram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaTelegram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaYoutube />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
