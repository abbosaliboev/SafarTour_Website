import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  const { t, i18n } = useTranslation();

  // 🔹 Tilni o‘zgartirish
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // 🔹 Navbar collapse ni avtomatik yopish (mobilda)
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarCollapse");
    const bsCollapse = window.bootstrap?.Collapse;

    if (bsCollapse && navbarCollapse) {
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          const collapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
          if (collapse && navbarCollapse.classList.contains("show")) {
            collapse.hide();
          }
        });
      });
    }
  }, []);

  return (
    <header>
      {/* 🔹 Topbar */}
      <div className="container-fluid bg-dark text-light py-2 px-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {/* Chap tomonda aloqa ma’lumotlari */}
          <div className="d-flex align-items-center flex-wrap mb-2 mb-lg-0">
            <small className="me-3">
              <i className="fa fa-plane-departure me-2 text-primary" />
              {t("location")}
            </small>
            <small className="me-3">
              <i className="fa fa-phone-alt me-2 text-primary" />
              {t("phone")}
            </small>
            <small>
              <i className="fa fa-envelope-open me-2 text-primary" />
              {t("email")}
            </small>
          </div>

          {/* O‘ng tomonda Telegram + Language */}
          <div className="d-flex align-items-center">
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
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

      {/* 🔹 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top px-4 px-lg-5 py-3">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary fw-bold m-0 fs-3">
            <i className="fa fa-globe-americas me-2" />
            Jizzax Safar Tour
          </h1>
        </Link>

        {/* Mobil tugma */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars text-primary" />
        </button>

        {/* Menyu */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto align-items-center py-2">
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
            <Link
              to="/Booking"
              className="btn btn-primary rounded-pill py-2 px-4 ms-lg-3"
            >
              {t("booking")}
            </Link>
          </div>
        </div>
      </nav>

      {/* 🔹 Responsivlik */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-nav .nav-link {
            text-align: center;
            padding: 12px 0;
            font-size: 16px;
          }
          .navbar-brand h1 {
            font-size: 1.4rem;
          }
          .dropdown-menu {
            min-width: 140px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;