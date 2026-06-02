export interface Product {
  id: string;
  prodName?: string;
  prodDescription?: string;
  oldPrice?: number;
  newPrice?: number;
  image: string;
}

export interface Category {
  id: number;
  categoryName: string;
  items: Product[];
}

export const categories: Category[] = [
  {
    id: 1,
    categoryName: "Преміум роли",
    items: [
      {
        id: "premium-california-ikra",
        prodName: "Каліфорнія з ікрою",
        prodDescription: "Легкий рол із креветкою та ікрою — ідеальний баланс ніжності та морської свіжості🍤",
        oldPrice: 11,
        newPrice: 10.49,
        image: "/img/products/photo_2026-04-30_20-40-33.jpg",
      },
    ],
  },
  {
    id: 2,
    categoryName: "Роли",
    items: [
      {
        id: "philadelphia-salmon",
        prodName: "Філадельфія з лососем",
        prodDescription: "🧀🐟 Ніжність, що тане з першого шматочка",
        oldPrice: 9.99,
        newPrice: 9.49,
        image: "/img/products/photo_2026-01-26_12-51-23.webp",
      },
      {
        id: "philadelphia-smoked-salmon",
        prodName: "Філадельфія з копченим лососем",
        prodDescription: "🔥🐟 Димний акцент для справжніх гурманів",
        oldPrice: 9.99,
        newPrice: 9.49,
        image: "/img/products/photo_2026-01-26_12-51-42.webp",
      },
      {
        id: "california-black-white",
        prodName: "Каліфорнія блек/вайт",
        prodDescription: "⚫⚪ Контраст, який закохує з першого погляду",
        oldPrice: 9.99,
        newPrice: 9.49,
        image: "/img/products/photo_2026-01-26_12-51-53.webp",
      },
      {
        id: "california-shrimp",
        prodName: "Каліфорнія з креветкою",
        prodDescription: "🦐✨ Легкий хрускіт і морський настрій у кожному шматочку",
        oldPrice: 9.99,
        newPrice: 9.49,
        image: "/img/products/photo_2026-01-26_12-51-48.webp",
      },
    ],
  },
  {
    id: 3,
    categoryName: "Теплі роли",
    items: [
      {
        id: "warm-roll-salmon",
        prodName: "Теплий рол з лососем",
        prodDescription: "♨️🐟 Ніжність, що зігріває з першого шматочка",
        oldPrice: 10.5,
        newPrice: 9.99,
        image: "/img/products/photo_2026-01-26_12-52-01.webp",
      },
      {
        id: "warm-roll-smoked-salmon",
        prodName: "Теплий рол з копченим лососем",
        prodDescription: "🔥🌊 Гаряча подача з димним характером",
        oldPrice: 10.5,
        newPrice: 9.99,
        image: "/img/products/photo_2026-01-26_12-51-57.webp",
      },
    ],
  },
  {
    id: 4,
    categoryName: "Фелікс роли",
    items: [
      {
        id: "felix-smoked-salmon",
        prodName: "Фелікс рол з копченим лососем",
        prodDescription: "ніжна текстура, димний аромат риби та приємна пікантність у кожному шматочку.",
        oldPrice: 13,
        newPrice: 12.49,
        image: "/img/products/photo_2026-04-16_21-52-35.jpg",
      },
      {
        id: "felix-salmon",
        prodName: "Фелікс рол з лососем",
        prodDescription: "ніжний, соковитий і з тим самим соусом зверху, від якого важко втриматись",
        oldPrice: 13,
        newPrice: 12.49,
        image: "/img/products/photo_2026-04-16_21-51-35.jpg",
      },
      {
        id: "felix-shrimp",
        prodName: "Фелікс рол з креветкою",
        prodDescription: "рол із ніжною креветкою та крем-сиром, политий пікантним соусом — м'який смак із приємною вершковою ноткою.",
        oldPrice: 13,
        newPrice: 12.49,
        image: "/img/products/photo_2026-04-16_21-49-18.jpg",
      },
    ],
  },
  {
    id: 5,
    categoryName: "Суші Бургери",
    items: [
      {
        id: "sushi-burger-shrimp",
        prodName: "Суші бургер з креветкою",
        prodDescription: "🔥🌊 Ніжна креветка та хрумкість у кожному укусі",
        oldPrice: 14,
        newPrice: 13.49,
        image: "/img/products/photo_2026-01-26_12-52-07.webp",
      },
    ],
  },
  {
    id: 6,
    categoryName: "Сети",
    items: [
      {
        id: "set-standard",
        prodName: "Стандартний набір",
        prodDescription: "🍣✨ Контраст, ніжність і морський характер в одному сеті",
        oldPrice: 37,
        newPrice: 34.99,
        image: "/img/products/photo_2026-02-05_17-26-00.webp",
      },
      {
        id: "set-hot",
        prodName: "Гарячий набір",
        prodDescription: "✨🍔 Тепла класика з авторським хрумким акцентом",
        oldPrice: 33,
        newPrice: 31.49,
        image: "/img/products/photo_2026-02-05_17-26-27.webp",
      },
      {
        id: "set-felix",
        prodName: "Фелікс набір",
        prodDescription: "Теплий сет Фелікс — три смаки в одному наборі: соковитий лосось, димний копчений лосось і ніжна креветка під фірмовим соусом. Ідеально, щоб поділитися… або не ділитися 😏🍣",
        oldPrice: 37,
        newPrice: 34.99,
        image: "/img/products/photo_2026-04-16_21-47-36.jpg",
      },
    ],
  },
  {
    id: 7,
    categoryName: "Ексклюзивні пропозиції",
    items: [
      {
        id: "yin-yang",
        prodName: "Інь-Янь",
        prodDescription: "Інь-Янь — поєднання лосося та вугра, де ніжність зустрічається з насиченістю.",
        oldPrice: 11.5,
        newPrice: 10.99,
        image: "/img/products/photo_2026-04-16_21-42-03.jpg",
      },
      {
        id: "unagi-salmon-chuka-burger",
        prodName: "Вугор, лосось і чука в форматі суші-бургера",
        prodDescription: "Вугор, лосось і чука в форматі суші-бургера — баланс ніжного та яскравого смаку в кожному шматочку.",
        oldPrice: 15,
        newPrice: 14.49,
        image: "/img/products/photo_2026-04-16_21-46-00.jpg",
      },
    ],
  },
];
