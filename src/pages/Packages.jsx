import React from "react";
import { useTranslation } from "react-i18next";

function Packages() {
  const { t } = useTranslation();

  const packages = [
    {
      id: 1,
      img: "assets/img/package-1.jpg",
      name: t("package_1_name"),
      price: t("package_1_price"),
      desc: t("package_1_desc"),
      link: "https://t.me/Jizzax_SafarTour"
    },
    {
      id: 2,
      img: "assets/img/package-2.jpg",
      name: t("package_2_name"),
      price: t("package_2_price"),
      desc: t("package_2_desc"),
      link: "https://t.me/Jizzax_SafarTour"
    },
    {
      id: 3,
      img: "assets/img/package-3.jpg",
      name: t("package_3_name"),
      price: t("package_3_price"),
      desc: t("package_3_desc"),
      link: "https://t.me/Jizzax_SafarTour"
    }
  ];

  return (
    <div>

      {/* Packages Section */}
      <div className="py-5">
        <div
          className="text-center mx-auto"
          style={{ maxWidth: "1100px", width: "80%" }}
        >
          <h6 className="section-title bg-white text-primary px-3">
            {t("packages_title")}
          </h6>
          <h1 className="mb-5">{t("packages_subtitle")}</h1>

          <div className="row g-4 justify-content-center">
            {packages.map((p, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
              >
                <div className="package-item rounded border shadow-sm d-flex flex-column w-100">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src={p.img}
                      alt={p.name}
                      style={{ height: "240px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="text-center p-4 flex-grow-1 d-flex flex-column">
                    <h4 className="text-primary fw-bold mb-2">{p.price}</h4>
                    <h5 className="mb-3">{p.name}</h5>
                    <p className="flex-grow-1">{p.desc}</p>

                    <div className="d-flex justify-content-center mt-auto pt-3">
                      <a
                        href={p.link}
                        className="btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("read_more")}
                      </a>
                      <a
                        href="/booking"
                        className="btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        {t("book_now")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .package-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff;
        }
        .package-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

export default Packages;