import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about.jpg"
                  alt="about"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h6 className="section-title bg-white text-start text-primary pe-3">
                {t("about_page_title")}
              </h6>
              <h1 className="mb-4">{t("about_heading")}</h1>
              <p className="mb-4">{t("about_text_1")}</p>
              <p className="mb-4">{t("about_text_2")}</p>

              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {t("about_features_1")}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {t("about_features_2")}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {t("about_features_3")}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {t("about_features_4")}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {t("about_features_5")}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {t("about_features_6")}
                  </p>
                </div>
              </div>

              <a className="btn btn-primary py-3 px-5 mt-2" href="https://t.me/jizzax_safartour">
                {t("about_readmore")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;