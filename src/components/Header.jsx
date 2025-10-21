import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                {t('phone', { defaultValue: '+998 93 307 46 79' })}
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              {/* Language Selector */}
              <div className="dropdown me-2">
                <button
                  className="btn btn-sm btn-outline-light dropdown-toggle"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {i18n.language === 'uz' && '🇺🇿 O‘zbekcha'}
                  {i18n.language === 'ru' && '🇷🇺 Русский'}
                  {i18n.language === 'en' && '🇬🇧 English'}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage('uz')}
                    >
                      🇺🇿 O‘zbekcha
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage('ru')}
                    >
                      🇷🇺 Русский
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage('en')}
                    >
                      🇬🇧 English
                    </button>
                  </li>
                </ul>
              </div>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://t.me/Jizzax_SafarTour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram-plane fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              {t('brand', { defaultValue: 'Jizzax Safar Tour' })}
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
                {t('home', { defaultValue: 'Home' })}
              </Link>
              <Link to="/About" className="nav-item nav-link">
                {t('about', { defaultValue: 'About' })}
              </Link>
              <Link to="/Services" className="nav-item nav-link">
                {t('services', { defaultValue: 'Services' })}
              </Link>
              <Link to="/Packages" className="nav-item nav-link">
                {t('packages', { defaultValue: 'Packages' })}
              </Link>
              <Link to="/Contact" className="nav-item nav-link">
                {t('contact', { defaultValue: 'Contact' })}
              </Link>
            </div>
            <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">
              {t('booking', { defaultValue: 'Booking' })}
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          .container-fluid.bg-dark {
            padding: 10px 15px;
          }
          .d-inline-flex.align-items-center {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }
          .col-lg-8, .col-lg-4 {
            flex: 0 0 100%;
            max-width: 100%;
            text-align: center;
          }
          .dropdown-menu {
            text-align: center;
          }
          .btn-sm-square {
            margin: 0 5px;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;