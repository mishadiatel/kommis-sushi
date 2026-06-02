"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("scroll-products-point");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__text">
          <h1 className="hero-section__title">
            {siteConfig.hero.title} &quot;{siteConfig.name}&quot;
          </h1>
          <a
            className="hero-btn js--scroll-to-products"
            onClick={scrollToProducts}
          >
            <span>{siteConfig.hero.buttonLabel}</span>
          </a>
        </div>

        <Image
          src={siteConfig.heroImageSrc}
          alt={siteConfig.name}
          width={739}
          height={490}
          className="hero-section__product-img"
          priority
        />
      </div>
    </div>
  );
}
