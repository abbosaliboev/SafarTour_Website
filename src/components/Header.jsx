import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                {t("location")}
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                {t("phone")}
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                {t("email")}
              </small>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              {/* Telegram */}
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-3"
                href="https://t.me/Jizzax_SafarTour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram-plane fw-normal" />
              </a>

              {/* 🌍 Language Selector */}
              <div className="dropdown">
                <button
                  className="btn btn-sm btn-outline-light dropdown-toggle"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {i18n.language.toUpperCase()}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage("uz")}
                    >
                      🇺🇿 O‘zbekcha
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage("ru")}
                    >
                      🇷🇺 Русский
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLanguage("en")}
                    >
                      🇬🇧 English
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
          <h1 className="text-primary m-0 fs-3">
            <i className="fa fa-globe-americas me-2" />
            Jizzax Safar Tour
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
                {t("home")}
              </Link>
              <Link to="/About" className="nav-item nav-link">
                {t("about")}
              </Link>
              <Link to="/Services" className="nav-item nav-link">
                {t("services")}
              </Link>
              <Link to="/Packages" className="nav-item nav-link">
                {t("packages")}
              </Link>
              <Link to="/Contact" className="nav-item nav-link">
                {t("contact")}
              </Link>
            </div>
            <Link
              to="/Booking"
              className="btn btn-primary rounded-pill py-2 px-4"
            >
              {t("booking")}
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}

export default Header;