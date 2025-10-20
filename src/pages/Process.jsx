import React from "react";
import { useTranslation } from "react-i18next";

function Process() {
  const { t } = useTranslation();

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            {t("process_title")}
          </h6>
          <h1 className="mb-5">{t("process_subtitle")}</h1>
        </div>

        <div className="row gy-4 gx-4 justify-content-center">
          {/* Step 1 */}
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative border border-primary rounded p-4 text-center h-100 shadow-sm"
              style={{
                minHeight: "280px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 80, height: 80 }}
              >
                <i className="fa fa-map-marked-alt fa-2x text-white" />
              </div>
              <div style={{ marginTop: "70px" }}>
                <h5 className="mt-3">{t("step1_title")}</h5>
                <p className="mt-2 small text-muted">{t("step1_text")}</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div
              className="position-relative border border-primary rounded p-4 text-center h-100 shadow-sm"
              style={{
                minHeight: "280px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 80, height: 80 }}
              >
                <i className="fa fa-calendar-check fa-2x text-white" />
              </div>
              <div style={{ marginTop: "70px" }}>
                <h5 className="mt-3">{t("step2_title")}</h5>
                <p className="mt-2 small text-muted">{t("step2_text")}</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="position-relative border border-primary rounded p-4 text-center h-100 shadow-sm"
              style={{
                minHeight: "280px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 80, height: 80 }}
              >
                <i className="fa fa-phone-alt fa-2x text-white" />
              </div>
              <div style={{ marginTop: "70px" }}>
                <h5 className="mt-3">{t("step3_title")}</h5>
                <p className="mt-2 small text-muted">{t("step3_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;