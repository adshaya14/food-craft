export const SVG_ASSET_SET = new Set([
  "cheddar-slice", "patty-beef", "patty-zinger", "patty-paneer",
  "mozzarella", "pepperoni", "olives", "jalapeno", "basil",
  "boiled-egg", "birista", "tandoori-leg", "shish-tawook", "seekh-kebab",
  "mint-chutney", "raita", "boba-pearls", "ice-cream-scoop", "whipped-cream",
  "crushed-oreo", "lime-slice", "mint-leaves", "mango-pulp", "chocolate-syrup"
]);

export function getFoodAssetUrl(iconName) {
  if (!iconName) return "/assets/food/lettuce.png";
  if (iconName.includes(".")) return iconName.startsWith("/") ? iconName : `/${iconName}`;
  const ext = SVG_ASSET_SET.has(iconName) ? ".svg" : ".png";
  return `/assets/food/${iconName}${ext}`;
}

export function inr(val) {
  return `₹${val}`;
}

export const STUDIO_MODES = {
  shawarma: {
    name: "Shawarma",
    title: "🌯 Shawarma & Rolls Studio",
    desc: "Spread whipped garlic toum, carve spit chicken, add your favorite toppings & roll it tight!",
    baseName: "Artisanal Flatbread",
    basePrice: 40,
    baseImg: "/assets/food/flatbread.png",
    sauceName: "Whipped Garlic Toum",
    saucePrice: 20,
    sauceColor: ["#fffef8", "#f6f1e2", "#ece4cc"],
    actionBtn: "Roll it up ↻",
    doneImg: "/assets/food/wrap-done.png",
    doneText: "Rolled tight in fresh butcher wrap!",
    spatPrompt: "drag spatula across base ↘",
    spitPrompt: "tap to carve chicken meat ↓",
    toppings: [
      { id: "chicken", name: "Chicken Shawarma", short: "Chicken", price: 80, icon: "chicken", note: "Carved straight off the vertical rotisserie spit." },
      { id: "beef", name: "Crispy Spiced Beef", short: "Beef", price: 100, icon: "beef", note: "Thinly shaved seasoned beef, crispy char at edges." },
      { id: "falafel", name: "Green Falafel", short: "Falafel", price: 50, icon: "falafel", note: "Crunchy chickpea & parsley falafels." },
      { id: "lettuce", name: "Crisp Lettuce", short: "Lettuce", price: 15, icon: "lettuce", note: "Cold, shredded iceberg lettuce." },
      { id: "tomato", name: "Ripe Tomato", short: "Tomato", price: 15, icon: "tomato", note: "Ripe summer tomatoes sliced thin." },
      { id: "pickles", name: "House Pickles", short: "Pickles", price: 20, icon: "pickles", note: "Sour Lebanese pickles for crunch." },
      { id: "onion", name: "Sumac Red Onions", short: "Onions", price: 15, icon: "onion", note: "Sliced red onions tossed in tangy sumac." },
      { id: "fries", name: "French Fries Inside", short: "Fries", price: 30, icon: "fries", note: "Golden hot fries tucked inside the wrap." },
      { id: "parsley", name: "Fresh Parsley", short: "Parsley", price: 10, icon: "parsley", note: "A fresh handful of chopped garden parsley." },
      { id: "hot", name: "Hot Harissa Sauce", short: "Hot Sauce", price: 15, icon: "hot-drizzle", note: "Spicy harissa chilli drizzle." },
      { id: "tahini", name: "Nutty Tahini", short: "Tahini", price: 20, icon: "tahini-drizzle", note: "Stoneground sesame tahini drizzle." }
    ]
  },
  burger: {
    name: "Burger",
    title: "🍔 Smash Burger Studio",
    desc: "Toasted brioche bun, spread secret relish sauce, stack patties, double cheese, veggies & crown!",
    baseName: "Toasted Brioche Bun",
    basePrice: 40,
    baseImg: "/assets/dishes/base-burger.svg",
    sauceName: "Secret Burger Sauce",
    saucePrice: 20,
    sauceColor: ["#fff5ea", "#fed7aa", "#f97316"],
    actionBtn: "Stack & Crown 🍔",
    doneImg: "/assets/dishes/burger-smash.svg",
    doneText: "Stacked high with toasted brioche crown!",
    spatPrompt: "spread burger relish across bun ↘",
    spitPrompt: "tap to sear patty ↓",
    toppings: [
      { id: "b_patty", name: "Smashed Beef Patty", short: "Smash Patty", price: 90, icon: "patty-beef", note: "Lacy-edged iron-seared beef patty." },
      { id: "b_zinger", name: "Crispy Zinger Fillet", short: "Crispy Fillet", price: 80, icon: "patty-zinger", note: "Crunchy buttermilk fried chicken fillet." },
      { id: "b_paneer", name: "Grilled Paneer Steak", short: "Paneer Steak", price: 60, icon: "patty-paneer", note: "Thick spiced tandoori cottage cheese." },
      { id: "b_cheese", name: "Double Cheddar Cheese", short: "Cheddar Melt", price: 30, icon: "cheddar-slice", note: "Molten yellow American cheddar slices." },
      { id: "b_onion", name: "Caramelized Onions", short: "Caramel Onions", price: 20, icon: "onion", note: "Sweet slow-cooked caramelized onions." },
      { id: "b_pickles", name: "Pickled Gherkins", short: "Pickles", price: 15, icon: "pickles", note: "Crunchy tart dill gherkins." },
      { id: "b_lettuce", name: "Iceberg Lettuce", short: "Lettuce", price: 15, icon: "lettuce", note: "Crisp shredded iceberg lettuce." },
      { id: "b_tomato", name: "Fresh Tomato", short: "Tomato", price: 15, icon: "tomato", note: "Fresh ripe tomato slices." },
      { id: "b_fries", name: "Crispy Fries Inside", short: "Fries", price: 30, icon: "fries", note: "Crunchy potato fries inside the burger." },
      { id: "b_bbq", name: "Smoky BBQ Glaze", short: "BBQ Sauce", price: 20, icon: "chocolate-syrup", note: "Sweet molasses hickory BBQ glaze." },
      { id: "b_mayo", name: "Garlic Truffle Mayo", short: "Truffle Mayo", price: 20, icon: "tahini-drizzle", note: "Velvety garlic truffle mayo." }
    ]
  },
  pizza: {
    name: "Pizza",
    title: "🍕 Woodfired Pizza Studio",
    desc: "Hand-stretched Neapolitan dough, San Marzano marinara, load mozzarella & toppings, woodfire bake!",
    baseName: "Neapolitan Dough Crust",
    basePrice: 90,
    baseImg: "/assets/dishes/base-pizza.svg",
    sauceName: "San Marzano Marinara",
    saucePrice: 30,
    sauceColor: ["#fecaca", "#ef4444", "#991b1b"],
    actionBtn: "Woodfire Bake 🍕",
    doneImg: "/assets/food/pizza-done.png",
    doneText: "Woodfire baked with bubbling melted mozzarella!",
    spatPrompt: "spread marinara across dough ↘",
    spitPrompt: "tap for grilled chicken chunks ↓",
    toppings: [
      { id: "p_mozz", name: "Fresh Mozzarella", short: "Mozzarella", price: 50, icon: "mozzarella", note: "Creamy melted fior di latte mozzarella." },
      { id: "p_pep", name: "Spicy Cupped Pepperoni", short: "Pepperoni", price: 80, icon: "pepperoni", note: "Crispy curled spicy beef pepperoni." },
      { id: "p_chicken", name: "BBQ Grilled Chicken", short: "BBQ Chicken", price: 70, icon: "chicken", note: "Tender seasoned chicken breast chunks." },
      { id: "p_paneer", name: "Spiced Peri Paneer", short: "Peri Paneer", price: 60, icon: "patty-paneer", note: "Tandoori paneer cubes." },
      { id: "p_onion", name: "Red Onion Rings", short: "Red Onions", price: 20, icon: "onion", note: "Thin sliced red onion rings." },
      { id: "p_tomato", name: "Cherry Tomatoes", short: "Tomatoes", price: 20, icon: "tomato", note: "Sweet sun-ripened cherry tomatoes." },
      { id: "p_olives", name: "Kalamata Black Olives", short: "Olives", price: 25, icon: "olives", note: "Pitted Mediterranean black olives." },
      { id: "p_jalapeno", name: "Pickled Jalapeños", short: "Jalapeños", price: 20, icon: "jalapeno", note: "Spicy sliced pickled jalapeños." },
      { id: "p_basil", name: "Fresh Sweet Basil", short: "Fresh Basil", price: 15, icon: "basil", note: "Aromatic garden sweet basil leaves." },
      { id: "p_chilli", name: "Hot Honey & Chilli Oil", short: "Hot Honey", price: 25, icon: "hot-drizzle", note: "Sweet fiery hot honey drizzle." },
      { id: "p_parm", name: "Aged Shaved Parmesan", short: "Parmesan", price: 30, icon: "cheddar-slice", note: "Nutty aged shaved parmesan." }
    ]
  },
  grill: {
    name: "Grill",
    title: "🍗 Charcoal Sizzler Studio",
    desc: "Sizzling iron platter, spiced garlic butter marinade, skewered kebabs, tandoori & wings!",
    baseName: "Sizzler Iron Plate & Pita",
    basePrice: 50,
    baseImg: "/assets/dishes/base-grill.svg",
    sauceName: "Garlic Butter Marinade",
    saucePrice: 20,
    sauceColor: ["#fef08a", "#f59e0b", "#b45309"],
    actionBtn: "Charcoal Sizzle 🔥",
    doneImg: "/assets/dishes/grill-tandoori.svg",
    doneText: "Charcoal smoked and sizzling hot with lime & mint!",
    spatPrompt: "baste garlic butter across plate ↘",
    spitPrompt: "tap for tandoori chicken leg ↓",
    toppings: [
      { id: "g_tandoori", name: "Tandoori Chicken Leg", short: "Tandoori Leg", price: 110, icon: "tandoori-leg", note: "Charcoal flame-roasted chicken leg quarter." },
      { id: "g_shish", name: "Shish Tawook Skewer", short: "Shish Tawook", price: 100, icon: "shish-tawook", note: "Garlic lemon skewered chicken cubes." },
      { id: "g_seekh", name: "Spiced Seekh Kebab", short: "Seekh Kebab", price: 90, icon: "seekh-kebab", note: "Charcoal grilled minced kebab." },
      { id: "g_wings", name: "Sticky BBQ Wings", short: "BBQ Wings", price: 70, icon: "chicken", note: "Sticky glazed crispy wings." },
      { id: "g_paneer", name: "Charred Paneer Tikka", short: "Paneer Tikka", price: 60, icon: "patty-paneer", note: "Smoky tandoori spiced paneer." },
      { id: "g_onion", name: "Sizzling Onions", short: "Charred Onion", price: 20, icon: "onion", note: "Caramelized sizzler bed onions." },
      { id: "g_tomato", name: "Grilled Tomatoes", short: "Grilled Tomato", price: 20, icon: "tomato", note: "Flame-charred whole tomatoes." },
      { id: "g_fries", name: "Peri-Peri Fries", short: "Peri Fries", price: 35, icon: "fries", note: "Spicy crisp French fries." },
      { id: "g_chutney", name: "Spicy Mint Chutney", short: "Mint Dip", price: 15, icon: "mint-chutney", note: "Fresh coriander mint chutney." },
      { id: "g_toum", name: "Extra Whipped Toum", short: "Extra Toum", price: 20, icon: "tahini-drizzle", note: "Pure whipped garlic dip." },
      { id: "g_lemon", name: "Lemon & Chaat Masala", short: "Chaat Masala", price: 10, icon: "hot-drizzle", note: "Tangy lemon juice & roasted cumin." }
    ]
  },
  bowl: {
    name: "Bowl",
    title: "🍚 Loaded Biryani Bowl Studio",
    desc: "Artisan donburi bowl, aromatic saffron basmati rice, dump meats, eggs, raita & fresh herbs!",
    baseName: "Saffron Basmati Rice Bowl",
    basePrice: 60,
    baseImg: "/assets/dishes/base-bowl.svg",
    sauceName: "Spiced Salan Gravy",
    saucePrice: 20,
    sauceColor: ["#fef9c3", "#facc15", "#ca8a04"],
    actionBtn: "Garnish Bowl 🍚",
    doneImg: "/assets/food/bowl-done.png",
    doneText: "Steaming aromatic saffron bowl garnished!",
    spatPrompt: "ladle spiced salan gravy ↘",
    spitPrompt: "tap for slow-dum marinated meat ↓",
    toppings: [
      { id: "w_shawarma", name: "Spit Shaved Chicken", short: "Shawarma Meat", price: 80, icon: "chicken", note: "Juicy shaved chicken shawarma." },
      { id: "w_dum", name: "Dum Biryani Meat", short: "Dum Meat", price: 90, icon: "beef", note: "Slow-dum marinated aromatic meat." },
      { id: "w_katsu", name: "Crispy Katsu Chicken", short: "Crispy Katsu", price: 70, icon: "patty-zinger", note: "Japanese panko chicken cutlet." },
      { id: "w_falafel", name: "Crispy Falafels", short: "Falafels", price: 50, icon: "falafel", note: "Crunchy chickpea falafel balls." },
      { id: "w_egg", name: "Boiled Spiced Egg", short: "Boiled Egg", price: 20, icon: "boiled-egg", note: "Farm fresh boiled egg half." },
      { id: "w_onion", name: "Fried Birista Onions", short: "Birista Onion", price: 20, icon: "birista", note: "Golden crisp fried onions." },
      { id: "w_pickles", name: "Pickled Turnips", short: "Pickles", price: 15, icon: "pickles", note: "Crunchy pickled turnip sticks." },
      { id: "w_fries", name: "Toasted Pita Crisps", short: "Pita Crisps", price: 25, icon: "fries", note: "Crunchy toasted pita chips." },
      { id: "w_mint", name: "Fresh Mint & Cilantro", short: "Fresh Herbs", price: 10, icon: "mint-leaves", note: "Chopped fresh mint & coriander." },
      { id: "w_raita", name: "Cooling Mint Raita", short: "Raita", price: 20, icon: "raita", note: "Chilled spiced cucumber yogurt." },
      { id: "w_harissa", name: "Fiery Harissa Drizzle", short: "Harissa Drizzle", price: 15, icon: "hot-drizzle", note: "Spicy red chilli harissa drizzle." }
    ]
  },
  drinks: {
    name: "Drinks",
    title: "🥤 Drinks & Boba Studio",
    desc: "Chilled glass with ice cubes, swirl rich syrups, blend thick shakes, top with boba pearls & scoops!",
    baseName: "Chilled Highball Glass & Ice",
    basePrice: 40,
    baseImg: "/assets/dishes/base-drink.svg",
    sauceName: "Belgian Chocolate Fudge / Syrup",
    saucePrice: 25,
    sauceColor: ["#451a03", "#78350f", "#b45309"],
    actionBtn: "Shake & Blend 🥤",
    doneImg: "/assets/dishes/drink-shake.svg",
    doneText: "Ice-blended smooth and served cold with eco glass straw!",
    spatPrompt: "drag syrup swirl across glass ↘",
    spitPrompt: "tap for ice cubes & boba ↓",
    toppings: [
      { id: "d_boba", name: "Brown Sugar Boba Pearls", short: "Boba Pearls", price: 35, icon: "boba-pearls", note: "Slow-simmered chewy brown sugar tapioca pearls." },
      { id: "d_icecream", name: "Vanilla Ice Cream Scoop", short: "Ice Cream", price: 40, icon: "ice-cream-scoop", note: "Rich vanilla bean ice cream scoop floating on top." },
      { id: "d_cream", name: "Swirled Whipped Cream", short: "Whipped Cream", price: 30, icon: "whipped-cream", note: "Fluffy dairy whipped cream rosette." },
      { id: "d_oreo", name: "Crushed Oreo Crumble", short: "Crushed Oreo", price: 25, icon: "crushed-oreo", note: "Crunchy dark cocoa cookie crumbles." },
      { id: "d_lime", name: "Fresh Lime Wheel", short: "Lime Wheel", price: 15, icon: "lime-slice", note: "Fresh sliced Persian lime on the rim." },
      { id: "d_mint", name: "Fresh Spearmint Sprigs", short: "Mint Sprigs", price: 15, icon: "mint-leaves", note: "Crisp aromatic spearmint leaves." },
      { id: "d_mango", name: "Alphonso Mango Puree", short: "Mango Puree", price: 35, icon: "mango-pulp", note: "Luscious golden Alphonso mango nectar drizzle." },
      { id: "d_choco", name: "Dark Chocolate Fudge", short: "Choco Fudge", price: 30, icon: "chocolate-syrup", note: "Belgian molten dark chocolate ganache swirl." }
    ]
  }
};

