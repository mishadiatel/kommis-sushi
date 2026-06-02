"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Header() {
  const scrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(".js--contacts-scroll-point");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile header */}
      <div className="tmenu-mobile" style={{ backgroundColor: "#000" }}>
        <div className="tmenu-mobile__container">
          <Image
            src={siteConfig.logoSrc}
            className="tmenu-mobile__imglogo js--scroll-to-contacts"
            width={63}
            height={63}
            alt={siteConfig.name}
            style={{ maxWidth: 63, width: 63, cursor: "pointer" }}
            onClick={scrollToContacts}
          />
        </div>
      </div>

      {/* Desktop header */}
      <div className="navbar">
        <div className="navbar__top">
          <span className="navbar__text">{siteConfig.header.orderNotice}</span>
          <a className="navbar__logo-link" onClick={scrollToContacts}>
            <Image
              src={siteConfig.logoSrc}
              width={130}
              height={130}
              style={{ display: "block", width: 130, height: "auto" }}
              alt={siteConfig.name}
            />
          </a>
        </div>
        <hr className="navbar__divider" />
      </div>
    </>
  );
}
