import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container pb-4">
        <div className="row g-4">
          {/* 1️⃣ Kompaniya haqida */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">{t("footer.company_name")}</h5>
            <p className="small">{t("footer.company_desc")}</p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-2 text-primary" />
              {t("footer.address")}
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-2 text-primary" /> +998 93 307 46 79
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-2 text-primary" /> jizzaxsafartour@gmail.com
            </p>
            <p className="mb-2">
              <i className="fa fa-clock me-2 text-primary" /> {t("footer.working_hours")}
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href="https://t.me/jizzax_safartour"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-telegram" />
              </a>
            </div>
          </div>

          {/* 2️⃣ Foydali sahifalar */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">{t("footer.useful_pages")}</h5>
            <div className="d-flex flex-column">
              <a className="btn btn-link text-start" href="/">{t("footer.home")}</a>
              <a className="btn btn-link text-start" href="/about">{t("footer.about")}</a>
              <a className="btn btn-link text-start" href="/packages">{t("footer.packages")}</a>
              <a className="btn btn-link text-start" href="/booking">{t("footer.booking")}</a>
              <a className="btn btn-link text-start" href="/contact">{t("footer.contact")}</a>
            </div>
          </div>

          {/* 3️⃣ Hujjatlar */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">{t("footer.documents")}</h5>
            <div className="d-flex flex-column">
              <a className="btn btn-link text-start" href="/privacy-policy">
                {t("footer.privacy")}
              </a>
              <a className="btn btn-link text-start" href="/public-offer">
                {t("footer.offer")}
              </a>
              <a className="btn btn-link text-start" href="/terms">
                {t("footer.terms")}
              </a>
              <a className="btn btn-link text-start" href="/license">
                {t("footer.license")}
              </a>
            </div>
            <p className="small mt-3">
              <i className="fa fa-check text-primary me-1"></i>
              {t("footer.legal_notice")}
            </p>
          </div>
        </div>
      </div>

      {/* Pastki chiziq */}
      <div
        className="text-center py-3 mt-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <small className="text-muted">
          © {new Date().getFullYear()} {t("footer.company_name")}. {t("footer.rights_reserved")}
          <br />
          {t("footer.site_label")}{" "}
          <a
            href="https://safar-tour.uz"
            className="text-primary text-decoration-none"
          >
            safar-tour.uz
          </a>{" "}
          | {t("footer.dev_by")}{" "}
          <a
            href="https://www.abbosaliboev.site"
            target="_blank"
            rel="noreferrer"
            className="text-primary text-decoration-none"
          >
            Abbos Aliboev
          </a>
        </small>
      </div>
    </footer>
  );
}