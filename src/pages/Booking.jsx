import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function Booking() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <div>

      {/* Booking Form */}
      <div className="container-xxl mt-4 py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5 rounded shadow-lg bg-primary bg-opacity-75">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-uppercase">{t("booking_title")}</h6>
                <h1 className="text-white mb-4">{t("booking_online")}</h1>
                <p>{t("booking_info_1")}</p>
                <p>{t("booking_info_2")}</p>
                <a
                  className="btn btn-outline-light py-3 px-5 mt-2"
                  href="https://t.me/Jizzax_SafarTour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact_telegram")}
                </a>
              </div>

              <div className="col-md-6">
                <h1 className="text-white mb-4">{t("booking_form_title")}</h1>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          name="user_name"
                          required
                        />
                        <label>{t("your_name")}</label>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control bg-transparent text-white"
                          name="user_phone"
                          required
                        />
                        <label>{t("your_phone")}</label>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          name="user_address"
                        />
                        <label>{t("your_address")}</label>
                      </div>
                    </div>

                    {/* Number of People */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          min="1"
                          className="form-control bg-transparent text-white"
                          name="booking_count"
                        />
                        <label>{t("booking_count")}</label>
                      </div>
                    </div>

                    {/* Package Type */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent text-white"
                          name="package_type"
                        >
                          <option value="Samarqand">
                            {t("package_1_name")}
                          </option>
                          <option value="Buxoro">
                            {t("package_2_name")}
                          </option>
                          <option value="Xorazm">
                            {t("package_3_name")}
                          </option>
                        </select>
                        <label>{t("package_type")}</label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-transparent text-white"
                          name="user_email"
                        />
                        <label>{t("your_email")}</label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-transparent text-white"
                          name="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label>{t("special_request")}</label>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light w-100 py-3"
                        type="submit"
                      >
                        {status === "sending"
                          ? "Yuborilmoqda..."
                          : status === "success"
                          ? "Yuborildi ✅"
                          : status === "error"
                          ? "Xatolik yuz berdi ❌"
                          : t("book_now")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style */}
      <style>{`
        .form-floating label {
          color: rgba(255,255,255,0.8);
        }
        .form-control:focus, .form-select:focus {
          border-color: #fff;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}

export default Booking;