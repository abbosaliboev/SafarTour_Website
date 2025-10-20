import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h2 className="text-secondary mt-4 mb-4">
        {t("privacy.title")}
      </h2>

      <p>{t("privacy.intro")}</p>

      <h5>1. {t("privacy.section1_title")}</h5>
      <p>{t("privacy.section1_text")}</p>

      <h5>2. {t("privacy.section2_title")}</h5>
      <p>{t("privacy.section2_text")}</p>

      <h5>3. {t("privacy.section3_title")}</h5>
      <p>{t("privacy.section3_text")}</p>

      <h5>4. {t("privacy.section4_title")}</h5>
      <p>{t("privacy.section4_text")}</p>

      <h5>5. {t("privacy.section5_title")}</h5>
      <p>
        {t("privacy.section5_text")}
        <br />
        📧 <strong>jizzaxsafartour@gmail.com</strong>
        <br />
        ☎️ <strong>+998 93 307 46 79</strong>
      </p>

      <p className="mt-4 text-muted">{t("privacy.footer")}</p>
    </div>
  );
}