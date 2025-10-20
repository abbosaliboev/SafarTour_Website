import React from 'react'
import { useTranslation } from "react-i18next";
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Packages from './Packages';
import Booking from './Booking';
import Process from './Process';

export default function Home() {
    const { t } = useTranslation();
  return (
    <div>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
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
    {/* About Start */}
    <About />
    {/* About End */}

    {/* Service Start */}
    <Services />
    {/* Service End */}

    {/* Gallery Start */}
    <Gallery />
    {/* Gallery Start */}

    {/* Package Start */}
    <Packages />
    {/* Package End */}

    {/* Booking Start */}
    <Booking />
    {/* Booking Start */}

    {/* Process Start */}
    <Process/>
    {/* Process End */}
   
    </div>
  )
}
