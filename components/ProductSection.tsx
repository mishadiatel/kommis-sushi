"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Category } from "@/data/products";

interface Props {
  categories: Category[];
}

export default function ProductSection({ categories }: Props) {
  useEffect(() => {
    // Dynamically load Fancybox and bind
    const init = async () => {
      const { Fancybox } = await import("@fancyapps/ui");
      Fancybox.bind('[data-fancybox="product"]', {});
    };
    init();
  }, []);

  const scrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(".js--contacts-scroll-point");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="products">
      {categories.map((category) => (
        <div key={category.id}>
          {/* Category title */}
          <div
            className="t795 t-rec_pt_0 t-rec_pb_0"
            style={{ backgroundColor: "#000" }}
          >
            <div className="t795">
              <div className="t-container t-align_center">
                <div
                  className="t-col t-col_10 t-prefix_1"
                  style={{ display: "block", margin: "0 auto", paddingTop: 40 }}
                >
                  <h3
                    className="t795__title t-title t-title_xs t-margin_auto"
                    style={{ color: "red" }}
                  >
                    {category.categoryName}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div
            className="t778 t-rec_pt_30 t-rec_pb_30"
            style={{ backgroundColor: "#000" }}
          >

              <div className="js-store-grid-cont t-store__grid-cont t-container t-store__grid-cont_mobile-grid t-store__mobile-two-columns">
                <div className="t-store__card-list">
                  {category.items.map((product) => (
                      <div
                          key={product.id}
                          className="t-store__card t-align_center"
                      >
                        <div
                            className="t-store__card__wrap_all"
                            style={{backgroundColor: "#000000"}}
                        >
                          <a
                              href={product.image}
                              data-fancybox="product"
                              data-caption={product.prodName}
                              style={{display: "block"}}
                          >
                            <Image
                                src={product.image}
                                alt={product.prodName}

                                width={400}
                                height={220}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  // objectFit: "cover",
                                  // display: "block",
                                  cursor: "pointer",
                                }}
                            />
                          </a>

                          <div className="t-store__card__wrap_txt-and-btns t-store__card__wrap_pad-sm">
                            <div className="store__card__wrap_txt-and-opts store__card__has-btns">
                              <div className="t-store__card__textwrapper">
                                {product.prodName && (
                                    <div className="t-store__card__title t-name t-name_xs">
                                      {product.prodName}
                                    </div>
                                )}
                                {product.prodDescription && (
                                    <div className="t-store__card__descr t-descr t-descr_xxs">
                                      {product.prodDescription}
                                    </div>
                                )}



                                {/* Old price */}
                                {product.oldPrice && (
                                    <div className="t-store__card__price-wrapper">
                                      <div className="t-store__card__price t-store__card__price-item t-name t-name_xs">
                                        <div
                                            className="t-store__card__price-value t-store__card__price-value--old"
                                        >
                                          {product.oldPrice} €
                                        </div>
                                      </div>
                                    </div>
                                )}


                                {/* New price */}
                                {product.newPrice && (
                                    <div className="t-store__card__price-wrapper">
                                      <div className="t-store__card__price t-store__card__price-item t-name t-name_xs">
                                        <div className="t-store__card__price-value">
                                          {product.newPrice} €
                                        </div>
                                      </div>
                                    </div>
                                )}

                              </div>
                            </div>

                            <div className="t-store__card__btns-wrapper">
                              <a
                                  className="t-store__card__btn js--scroll-to-contacts"
                                  onClick={scrollToContacts}
                              >
                                <span>Замовити</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}
