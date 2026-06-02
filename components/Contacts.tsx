import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Contacts() {
  return (
    <>
      {/* Contacts title */}
      <div
        id="contacts"
        className="contacts-section"
        style={{ paddingTop: 60, paddingBottom: 0, backgroundColor: "#000" }}
      >
        <div className="t-container t-align_center">
          <div
            className="t-col t-col_6 t-prefix_3"
            style={{ display: "block", maxWidth: 600, margin: "0 auto" }}
          >
            <div className="t225__title t-title t-title_md">
              {siteConfig.contacts.sectionTitle}
            </div>
            <div className="t225__descr t-descr t-descr_xxl">
              {siteConfig.contacts.orderNotice}
            </div>
            <div className="t225__descr t-descr t-descr_xxl">
              Доставка по місту {siteConfig.deliveryCity} {siteConfig.deliveryPrice}
            </div>
            <div className="t225__descr t-descr t-descr_xxl">
              {siteConfig.contacts.telegramCta}{" "}
              <a target="_blank" href={siteConfig.telegramUrl} rel="noopener noreferrer">
                {siteConfig.telegramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info columns */}
      <div className="t567" style={{ backgroundColor: "#000", paddingTop: 30 }}>
        <div className="t-container">
          <div className="t567__col">
            <div className="t567__col-wrapper t567__col-wrapper_first">
              <Image
                className="t567__img"
                src={siteConfig.icons.contacts}
                width={60}
                height={60}
                alt={siteConfig.contacts.columnContacts}
              />
              <div className="t567__title t-name t-name_xl" style={{ color: "#fff", fontSize: 24 }}>
                {siteConfig.contacts.columnContacts}
              </div>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginBottom: 20 }}
              >
                <div className="t567__descr t-text t-text_sm" style={{ color: "#fff", fontSize: 14 }}>
                  Telegram:
                </div>
                <div className="t567__descr t-text t-text_sm" style={{ color: "#fff", fontSize: 14 }}>
                  {siteConfig.telegramHandle}
                </div>
              </a>
            </div>
          </div>

          <div className="t567__col">
            {/*<div className="t567__line" />*/}
            <div className="t567__col-wrapper">
              <Image
                className="t567__img"
                src={siteConfig.icons.location}
                width={60}
                height={60}
                alt={siteConfig.contacts.columnAddress}
              />
              <div className="t567__title t-name t-name_xl" style={{ color: "#fff", fontSize: 24 }}>
                {siteConfig.contacts.columnAddress}
              </div>
              <div className="t567__descr t-text t-text_sm" style={{ color: "#fff", fontSize: 14 }}>
                {siteConfig.city}
              </div>
            </div>
          </div>

          <div className="t567__col">
            {/*<div className="t567__line" />*/}
            <div className="t567__col-wrapper">
              <Image
                className="t567__img"
                src={siteConfig.icons.hours}
                width={60}
                height={60}
                alt={siteConfig.contacts.columnSchedule}
              />
              <div className="t567__title t-name t-name_xl" style={{ color: "#fff", fontSize: 24 }}>
                {siteConfig.contacts.columnSchedule}
              </div>
              <div className="t567__descr t-text t-text_sm" style={{ color: "#fff", fontSize: 14 }}>
                {siteConfig.workDays}
                <br />
                {siteConfig.workHours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div
        className="instagram-section"
        style={{ backgroundColor: "#000", paddingTop: 0, paddingBottom: 50 }}
      >
        <div className="t-container t-align_center">
          <div
            className="t-col t-col_6 t-prefix_3"
            style={{ display: "block", maxWidth: 600, margin: "0 auto" }}
          >
            <div className="t225__title t-title t-title_md" style={{ color: "#fff" }}>
              {siteConfig.contacts.instagramSection}
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t225__descr t-descr t-descr_xxl"
              style={{ display: "block", color: "#fff", paddingTop: 41 }}
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
