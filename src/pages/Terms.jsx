import React from "react";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h2 className="text-secondary mt-4 mb-4">{t("terms.title")}</h2>

      <p>{t("terms.intro")}</p>

      <h5>1. {t("terms.section1_title")}</h5>
      <p>{t("terms.section1_text")}</p>

      <h5>2. {t("terms.section2_title")}</h5>
      <ul>
        <li>{t("terms.section2_li1")}</li>
        <li>{t("terms.section2_li2")}</li>
        <li>{t("terms.section2_li3")}</li>
      </ul>

      <h5>3. {t("terms.section3_title")}</h5>
      <p>{t("terms.section3_text")}</p>

      <h5>4. {t("terms.section4_title")}</h5>
      <p>{t("terms.section4_text")}</p>

      <h5>5. {t("terms.section5_title")}</h5>
      <p>
        {t("terms.section5_text")}
        <br />
        📧 <strong>jizzaxsafartour@gmail.com</strong> <br />
        ☎️ <strong>+998 93 307 46 79</strong>
      </p>

      <p className="text-muted mt-4">{t("terms.footer")}</p>
    </div>
  );
}