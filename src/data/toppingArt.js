export const TOPPING_ART_CONFIG = {
  // Shawarma
  chicken: [
    { x: 46, y: 40, w: 37, r: 0, d: 0 },
    { x: 54, y: 62, w: 36, r: 40, d: 0.12 }
  ],
  beef: [
    { x: 55, y: 46, w: 36, r: -20, d: 0 },
    { x: 44, y: 64, w: 32, r: 25, d: 0.12 }
  ],
  falafel: [
    { x: 64, y: 56, w: 23, r: 0, d: 0 },
    { x: 37, y: 52, w: 21, r: 60, d: 0.1 }
  ],
  lettuce: [
    { x: 50, y: 33, w: 39, r: 0, d: 0 },
    { x: 50, y: 66, w: 39, r: 50, d: 0.1 }
  ],
  tomato: [
    { x: 42, y: 48, w: 30, r: -20, d: 0 },
    { x: 59, y: 60, w: 28, r: 30, d: 0.1 }
  ],
  pickles: [
    { x: 35, y: 41, w: 20, r: 20, d: 0 },
    { x: 65, y: 70, w: 20, r: -10, d: 0.1 }
  ],
  onion: [
    { x: 63, y: 37, w: 26, r: 10, d: 0 },
    { x: 37, y: 67, w: 25, r: -30, d: 0.1 }
  ],
  fries: [
    { x: 47, y: 52, w: 32, r: -30, d: 0 },
    { x: 56, y: 30, w: 22, r: 20, d: 0.1 }
  ],
  parsley: [
    { x: 48, y: 73, w: 23, r: 0, d: 0 },
    { x: 52, y: 28, w: 19, r: 90, d: 0.1 }
  ],
  hot: [
    { isDrizzle: true, file: "hot-drizzle", r: 80 }
  ],
  tahini: [
    { isDrizzle: true, file: "tahini-drizzle", r: 100 }
  ],

  // Burger
  "patty-beef": [
    { x: 50, y: 50, w: 55, r: 0, d: 0 }
  ],
  "patty-zinger": [
    { x: 50, y: 50, w: 52, r: -5, d: 0 }
  ],
  "patty-paneer": [
    { x: 50, y: 50, w: 48, r: 10, d: 0 }
  ],
  "cheddar-slice": [
    { x: 50, y: 50, w: 55, r: 45, d: 0 }
  ],

  // Pizza
  mozzarella: [
    { x: 38, y: 40, w: 26, r: 0, d: 0 },
    { x: 62, y: 48, w: 27, r: 20, d: 0.1 },
    { x: 48, y: 65, w: 25, r: -15, d: 0.2 }
  ],
  pepperoni: [
    { x: 34, y: 36, w: 22, r: 15, d: 0 },
    { x: 64, y: 38, w: 22, r: -20, d: 0.08 },
    { x: 39, y: 64, w: 22, r: 30, d: 0.15 },
    { x: 61, y: 62, w: 22, r: -10, d: 0.22 }
  ],
  olives: [
    { x: 42, y: 32, w: 17, r: 10, d: 0 },
    { x: 65, y: 52, w: 17, r: -40, d: 0.1 },
    { x: 40, y: 68, w: 17, r: 25, d: 0.2 }
  ],
  jalapeno: [
    { x: 55, y: 32, w: 17, r: -20, d: 0 },
    { x: 32, y: 52, w: 17, r: 30, d: 0.1 },
    { x: 58, y: 68, w: 17, r: -10, d: 0.2 }
  ],
  basil: [
    { x: 48, y: 38, w: 18, r: -30, d: 0 },
    { x: 58, y: 58, w: 18, r: 40, d: 0.1 },
    { x: 38, y: 58, w: 17, r: -10, d: 0.2 }
  ],

  // Grill
  "tandoori-leg": [
    { x: 50, y: 50, w: 58, r: -15, d: 0 }
  ],
  "shish-tawook": [
    { x: 45, y: 42, w: 52, r: 12, d: 0 },
    { x: 55, y: 58, w: 52, r: -8, d: 0.1 }
  ],
  "seekh-kebab": [
    { x: 45, y: 42, w: 55, r: 20, d: 0 },
    { x: 55, y: 58, w: 55, r: 20, d: 0.1 }
  ],
  "mint-chutney": [
    { isDrizzle: true, file: "mint-chutney", r: 45 }
  ],

  // Bowls
  "boiled-egg": [
    { x: 38, y: 45, w: 24, r: -25, d: 0 },
    { x: 62, y: 58, w: 24, r: 30, d: 0.1 }
  ],
  birista: [
    { x: 50, y: 38, w: 30, r: 0, d: 0 },
    { x: 50, y: 62, w: 30, r: 180, d: 0.1 }
  ],
  raita: [
    { isDrizzle: true, file: "raita", r: -30 }
  ],
  "mint-leaves": [
    { x: 50, y: 32, w: 21, r: -15, d: 0 },
    { x: 50, y: 68, w: 21, r: 25, d: 0.1 }
  ],

  // Drinks
  "boba-pearls": [
    { x: 50, y: 68, w: 48, r: 0, d: 0 },
    { x: 50, y: 52, w: 42, r: 180, d: 0.1 }
  ],
  "ice-cream-scoop": [
    { x: 50, y: 39, w: 43, r: 0, d: 0 }
  ],
  "whipped-cream": [
    { x: 50, y: 34, w: 46, r: 0, d: 0 }
  ],
  "crushed-oreo": [
    { x: 50, y: 30, w: 38, r: 0, d: 0 }
  ],
  "lime-slice": [
    { x: 66, y: 32, w: 26, r: 25, d: 0 }
  ],
  "mango-pulp": [
    { isDrizzle: true, file: "mango-pulp", r: 60 }
  ],
  "chocolate-syrup": [
    { isDrizzle: true, file: "chocolate-syrup", r: -45 }
  ]
};

