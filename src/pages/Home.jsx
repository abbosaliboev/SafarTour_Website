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
      <div
        className="container-fluid bg-primary py-5 mb-5 hero-header"
        style={{
          paddingTop: "120px", // 👈 header uchun joy ochib berildi
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                {t("hero.title")}
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 🔹 Hero Section End */}

      {/* Other Sections */}
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Booking />
      <Process />

      {/* 🔹 Responsiv CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hero-header {
            padding-top: 100px !important; /* mobilda biroz kichikroq */
          }
        }
      `}</style>
    </div>
  );
}