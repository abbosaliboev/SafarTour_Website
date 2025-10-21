import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarCollapse');
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          new window.bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-3" style={{ padding: '5px 0' }}>
        <div className="row gx-0 align-items-center">
          <div className="col-12 text-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: '40px', gap: '15px' }}
            >
              <small className="text-light d-flex align-items-center" style={{ margin: 0 }}>
                <i className="fa fa-phone-alt me-2" />
                {t('phone', { defaultValue: '+998 93 307 46 79' })}
              </small>
              <div className="dropdown">
                <button
                  className="btn btn-sm btn-outline-light dropdown-toggle"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: '2px 10px', fontSize: '0.9rem', height: '30px' }}
                >
                  <span className="me-1" style={{ lineHeight: '1' }}>
                    {i18n.language === 'uz' && '🇺🇿'}
                    {i18n.language === 'ru' && '🇷🇺'}
                    {i18n.language === 'en' && '🇬🇧'}
                  </span>
                  {i18n.language === 'uz' && 'O‘zbekcha'}
                  {i18n.language === 'ru' && 'Русский'}
                  {i18n.language === 'en' && 'English'}
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
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href="https://t.me/Jizzax_SafarTour"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '30px', height: '30px', padding: 0 }}
              >
                <i className="fab fa-telegram-plane fw-normal" style={{ lineHeight: '30px' }} />
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
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
            padding: 5px 15px;
          }
          .d-flex.justify-content-center {
            flex-wrap: nowrap !important;
            gap: 10px;
          }
          .text-light {
            font-size: 0.9rem;
          }
          .btn.btn-sm.btn-outline-light.dropdown-toggle {
            padding: 2px 10px;
            font-size: 0.9rem;
          }
          .btn-sm-square {
            width: 30px;
            height: 30px;
            padding: 0;
          }
          .fab.fa-telegram-plane {
            line-height: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;