import React from "react";
import { useTranslation } from "react-i18next";

export default function PublicOffer() {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h2 className="text-secondary mt-4 mb-4">{t("offer.title")}</h2>
      <p>{t("offer.intro")}</p>

      <h5>1. {t("offer.section1_title")}</h5>
      <p>{t("offer.section1_text")}</p>

      <h5>2. {t("offer.section2_title")}</h5>
      <p>{t("offer.section2_text")}</p>

      <h5>3. {t("offer.section3_title")}</h5>
      <ul>
        <li>{t("offer.section3_li1")}</li>
        <li>{t("offer.section3_li2")}</li>
        <li>{t("offer.section3_li3")}</li>
      </ul>

      <h5>4. {t("offer.section4_title")}</h5>
      <ul>
        <li>{t("offer.section4_li1")}</li>
        <li>{t("offer.section4_li2")}</li>
        <li>{t("offer.section4_li3")}</li>
      </ul>

      <h5>5. {t("offer.section5_title")}</h5>
      <p>{t("offer.section5_text")}</p>

      <h5>6. {t("offer.section6_title")}</h5>
      <p>{t("offer.section6_text")}</p>
    </div>
  );
}