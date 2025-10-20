import React from "react";
import { useTranslation } from "react-i18next";

export default function License() {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h2 className="text-secondary mt-4 mb-4">{t("license.title")}</h2>
      <p>{t("license.intro")}</p>

      <h5>1. {t("license.section1_title")}</h5>
      <ul>
        <li>
          <strong>{t("license.name_label")}</strong> “Jizzax Safar Tour” MCHJ
        </li>
        <li>
          <strong>{t("license.stir_label")}</strong> 312510933
        </li>
        <li>
          <strong>{t("license.address_label")}</strong> Jizzax shahri, Zargarlik
          MFY, Zargarlik ko'chasi 8-uy 57-xonadon.
        </li>
        <li>
          <strong>{t("license.phone_label")}</strong> +998 93 307 46 79
        </li>
        <li>
          <strong>{t("license.email_label")}</strong> jizzaxsafartour@gmail.com
        </li>
      </ul>

      <a
        className="btn btn-outline-primary mt-3"
        href="/assets/docs/qaror_433.pdf"
        target="_blank"
        rel="noreferrer"
      >
        📄 {t("license.download_qaror")}
      </a>
      <br />
      <a
        className="btn btn-outline-success mt-3"
        href="/assets/docs/jizzax_safar_license.pdf"
        target="_blank"
        rel="noreferrer"
      >
        🪪 {t("license.view_certificate")}
      </a>

      <p className="mt-4 text-muted">{t("license.footer")}</p>
    </div>
  );
}