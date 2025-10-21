import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Gallery() {
  const { t } = useTranslation();

  const images = Array.from({ length: 10 }, (_, i) =>
    process.env.PUBLIC_URL + `/assets/img/gallery${i + 1}.jpeg`
  );

  // Bootstrap Carousel ni ishga tushirish
  useEffect(() => {
    const carouselElement = document.querySelector("#galleryCarousel");
    if (carouselElement) {
      const bsCarousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 5000, // har 3 soniyada almashadi
        ride: "carousel",
        pause: false, // hover qilganda to‘xtamasin
        wrap: true, // oxiridan keyin boshiga qaytsin
      });
    }
  }, []);

  return (
    <div className="py-5">
      <div
        className="text-center mx-auto"
        style={{ maxWidth: "1100px", width: "80%" }}
      >
        <h6 className="section-title bg-white text-center text-primary px-3">
          {t("gallery_section_title")}
        </h6>
        <h1 className="mb-4">{t("gallery_heading")}</h1>
        <p className="mb-5">{t("gallery_text")}</p>

        <div
          id="galleryCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded shadow-lg">
            {images.map((src, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={src}
                  className="d-block w-100 rounded"
                  alt={`Gallery ${index + 1}`}
                  style={{
                    height: "80vh",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.5s ease",
                  }}
                  onClick={(e) => e.target.classList.toggle("zoomed")}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <style>{`
        img.zoomed {
          transform: scale(1.25);
          z-index: 2;
          transition: transform 0.5s ease;
        }
        @media (max-width: 768px) {
          img.zoomed {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

export default Gallery;