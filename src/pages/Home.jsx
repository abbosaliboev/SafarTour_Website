import React from "react";
import { useTranslation } from "react-i18next";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Packages from "./Packages";
import Booking from "./Booking";
import Process from "./Process";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* 🔹 Hero Section Start */}
      <section
        className="hero-header container-fluid py-5 mb-5 d-flex align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 50, 0.7), rgba(0, 0, 80, 0.8)), url('/assets/img/hero-bg.jpg') center/cover no-repeat",
          minHeight: "80vh",
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center text-white">
              <h1 className="display-3 fw-bold mb-3 animated slideInDown">
                {t("hero.title")}
              </h1>
              <p className="fs-4 fw-light mb-4 animated fadeInUp">
                {t("hero.subtitle")}
              </p>
              <a
                href="#packages"
                className="btn btn-light rounded-pill py-2 px-4 animated zoomIn"
              >
                {t("hero.button")}
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Overlay Gradient (for aesthetic blur) */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
            zIndex: 0,
          }}
        ></div>
      </section>
      {/* 🔹 Hero Section End */}

      {/* 🔹 Sections */}
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Booking />
      <Process />

      {/* 🔹 Responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          .hero-header {
            min-height: 60vh !important;
            background-position: center !important;
          }
          .hero-header h1 {
            font-size: 2rem !important;
          }
          .hero-header p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}