"use client";

import { siteConfig } from "@/config/site";

export default function CoverBanner() {
  const scrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(".js--contacts-scroll-point");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="t-cover" style={{ height: 503 }}>
      <div
        className="t-cover__carrier"
        style={{
          backgroundImage: `url(${siteConfig.logoSrc})`,
          backgroundPosition: "center top",
          backgroundAttachment: "scroll",
        }}
      />
      <div
        className="t-cover__filter"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgb(0, 0, 0))",
        }}
      />
      <div className="t-container" style={{ height: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{ width: "100%" }}>
            <div className="t001__wrapper" style={{ textAlign: "center" }}>
              <div className="t001__uptitle t-uptitle t-uptitle_sm" style={{ fontSize: 15, paddingBottom: 10 }}>
                {siteConfig.banner.uptitle}
              </div>
              <h1 className="t001__title t-title t-title_xl">&quot;{siteConfig.name}&quot;</h1>
              <div className="t001__descr t-descr t-descr_xl" style={{ textAlign: "center" }}>
                {siteConfig.banner.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="t-cover__arrow js--scroll-to-contacts" onClick={scrollToContacts}>
        <div className="t-cover__arrow-wrapper t-cover__arrow-wrapper_animated">
          <div>
            <svg
              role="presentation"
              style={{ fill: "#ffffff" }}
              x="0px"
              y="0px"
              width="38.417px"
              height="18.592px"
              viewBox="0 0 38.417 18.592"
            >
              <g>
                <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
