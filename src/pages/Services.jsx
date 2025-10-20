import React from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <div>

      {/* Service Start */}
      <div className="container-xxl mt-2 py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              {t("services_hero")}
            </h6>
            <h1 className="mb-3">{t("services_heading")}</h1>
            <p className="mb-5">{t("services_subtext")}</p>
          </div>
          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4 text-center">
                  <i className="fa fa-3x fa-map-marked-alt text-primary mb-4" />
                  <h5>{t("service_1_title")}</h5>
                  <p>{t("service_1_desc")}</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4 text-center">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5>{t("service_2_title")}</h5>
                  <p>{t("service_2_desc")}</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4 text-center">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>{t("service_3_title")}</h5>
                  <p>{t("service_3_desc")}</p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4 text-center">
                  <i className="fa fa-3x fa-bus text-primary mb-4" />
                  <h5>{t("service_4_title")}</h5>
                  <p>{t("service_4_desc")}</p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4 text-center">
                  <i className="fa fa-3x fa-users text-primary mb-4" />
                  <h5>{t("service_5_title")}</h5>
                  <p>{t("service_5_desc")}</p>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4 text-center">
                  <i className="fa fa-3x fa-headset text-primary mb-4" />
                  <h5>{t("service_6_title")}</h5>
                  <p>{t("service_6_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </div>
  );
}

export default Services;