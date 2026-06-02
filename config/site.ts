export const siteConfig = {
  // Brand
  name: "Kommis Sushi",
  fullName: '"Kommis Sushi"',

  // Meta
  title: "Доставка Японської Кухні | Kommis Sushi",
  description:
    "Доставка Японської Кухні. Дуже смачні суші з доставкою по місту Магдебург",
  lang: "uk",

  // Social links
  telegramUrl: "https://t.me/Kommis_Sushi",
  telegramHandle: "@Kommis_Sushi",
  instagramUrl: "https://www.instagram.com/sushi_magdeburg/",
  instagramHandle: "sushi_magdeburg",

  // Business info
  city: "м. Магдебург",
  deliveryCity: "Магдебург",
  deliveryPrice: "7 €",
  orderHours: "з 9.00 до 14.00",
  workDays: "субота - неділя",
  workHours: "з 14:00 до 22:00",

  // Images
  logoSrc: "/img/logo.webp",
  heroImageSrc: "/img/products/main-product.png",
  icons: {
    contacts: "/img/layer_13.svg",
    location: "/img/basic_geolocalize01.svg",
    hours: "/img/8yo_hours.svg",
  },

  // UI texts — Header
  header: {
    orderNotice: "Прийом замовлень з 9.00 до 14.00",
  },

  // UI texts — Hero
  hero: {
    title: "Доставка Японської Кухні",
    buttonLabel: "Акційні товари",
  },

  // UI texts — Cover Banner
  banner: {
    uptitle: "Доставка Японської кухні:",
    description: "Дуже смачні суші з доставкою по місту Магдебург",
  },

  // UI texts — Contacts
  contacts: {
    sectionTitle: "Контакти",
    orderNotice:
      "Замовлення приймаємо до 14:00. Доставку здійснюємо в обідній та вечірній час.",
    telegramCta: "Для замовлення пишіть в телеграм",
    columnContacts: "Контакти",
    columnAddress: "Адреса",
    columnSchedule: "Графік роботи",
    instagramSection: "Наш instagram",
  },
} as const;
