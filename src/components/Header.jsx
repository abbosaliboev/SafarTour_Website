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

  // 🔹 Navbar collapse-ni mobilda yopish
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarCollapse");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          new window.bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  }, []);

  return (
    <header className="position-absolute top-0 w-100" style={{ zIndex: 1000 }}>
      {/* 🔹 Topbar */}
      <div
        className="container-fluid text-light py-2 px-4"
        style={{
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {/* Chap tomon */}
          <div
            className="d-flex align-items-center flex-wrap mb-2 mb-lg-0"
            style={{
              fontSize: "0.85rem",
              lineHeight: "1.2",
              gap: "10px",
            }}
          >
            <small className="me-3 m-0">
              <i className="fa fa-map-marker-alt me-2 text-primary" />
              {t("location")}
            </small>
            <small className="me-3 m-0">
              <i className="fa fa-phone-alt me-2 text-primary" />
              {t("phone")}
            </small>
            <small className="m-0">
              <i className="fa fa-envelope-open me-2 text-primary" />
              {t("email")}
            </small>
          </div>

          {/* O‘ng tomon */}
          <div className="d-flex align-items-center position-relative">
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://t.me/Jizzax_SafarTour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane fw-normal" />
            </a>

            {/* 🌍 Language Selector */}
            <div className="dropdown" style={{ position: "relative", zIndex: 2000 }}>
              <button
                className="btn btn-sm btn-outline-light dropdown-toggle"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {i18n.language === "uz" && "🇺🇿 O‘zbekcha"}
                {i18n.language === "ru" && "🇷🇺 Русский"}
                {i18n.language === "en" && "🇬🇧 English"}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="languageDropdown"
                style={{
                  zIndex: 2500,
                  position: "absolute",
                }}
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
      <nav
        className="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0"
        style={{
          background: "transparent",
        }}
      >
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-map-marker-alt me-3" />
            {t("brand")}
          </h1>
        </Link>

        {/* Mobil tugma */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars text-primary" />
        </button>

        {/* Menyu */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto align-items-center py-2">
            <Link to="/" className="nav-item nav-link text-white">
              {t("home")}
            </Link>
            <Link to="/About" className="nav-item nav-link text-white">
              {t("about")}
            </Link>
            <Link to="/Services" className="nav-item nav-link text-white">
              {t("services")}
            </Link>
            <Link to="/Packages" className="nav-item nav-link text-white">
              {t("packages")}
            </Link>
            <Link to="/Contact" className="nav-item nav-link text-white">
              {t("contact")}
            </Link>
            <Link
              to="/Register"
              className="btn btn-primary rounded-pill py-2 px-4 ms-lg-3"
            >
              {t("register")}
            </Link>
          </div>
        </div>
      </nav>

      {/* 🔹 Responsiv CSS */}
      <style>{`
        @media (max-width: 768px) {
          .container-fluid small {
            font-size: 0.75rem !important;
          }
          .navbar-nav .nav-link {
            text-align: center;
            padding: 12px 0;
            font-size: 16px;
            color: #fff !important;
          }
          .navbar-collapse {
            background: rgba(0, 0, 0, 0.85);
            border-radius: 0 0 12px 12px;
          }
          .navbar-brand h1 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;