import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Contact Section */}
      <div className="container-xxl mt-2 py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              {t("contacts.section_title")}
            </h6>
            <h1 className="mb-5">{t("contacts.subtitle")}</h1>
          </div>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>{t("contacts.get_in_touch")}</h5>
              <p className="mb-4">{t("contacts.description")}</p>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-location-dot text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">{t("contacts.office")}</h5>
                  <p className="mb-0">
                    Jizzax shahri, Zargarlik MFY, Zargarlik ko‘chasi 8-uy, 57-xonadon
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">{t("contact.phone")}</h5>
                  <p className="mb-0">+998 93 307 46 79</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">{t("contacts.email")}</h5>
                  <p className="mb-0">jizzaxsafartour@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.1656359590287!2d67.82490040905147!3d40.13830906545714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b297811fcc0c33%3A0x43fa8f85daaa1c26!2sMy%20Dentist%20-%20Dental%20clinic!5e0!3m2!1sen!2skr!4v1760981469008!5m2!1sen!2skr"
                frameBorder="0"
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Jizzax Safar Tour Location"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}