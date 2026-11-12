import os

os.makedirs("assets/food", exist_ok=True)
os.makedirs("assets/dishes", exist_ok=True)

# Generate detailed SVGs that can be referenced as images
svg_assets = {}

# 1. Authentic Cardamom Karak Chai Cup
svg_assets["assets/dishes/drink-karak.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <filter id="kSh" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.35"/>
    </filter>
    <linearGradient id="teaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="50%" stop-color="#92400e"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
  </defs>
  <g filter="url(#kSh)">
    <ellipse cx="100" cy="180" rx="55" ry="12" fill="#2d3748" opacity="0.4"/>
    <!-- Terracotta Saucer -->
    <ellipse cx="100" cy="170" rx="65" ry="14" fill="#9a3412"/>
    <ellipse cx="100" cy="168" rx="60" ry="11" fill="#c2410c"/>
    <!-- Traditional Chai Glass / Kulhad Cup -->
    <path d="M68,75 L75,160 Q100,166 125,160 L132,75 Z" fill="#9a3412"/>
    <path d="M70,78 L76,158 Q100,164 124,158 L130,78 Z" fill="#c2410c"/>
    <!-- Ribbed Glass / Terracotta Bands -->
    <ellipse cx="100" cy="95" rx="30" ry="6" fill="none" stroke="#7c2d12" stroke-width="2"/>
    <ellipse cx="100" cy="115" rx="28" ry="5.5" fill="none" stroke="#7c2d12" stroke-width="2"/>
    <ellipse cx="100" cy="135" rx="26" ry="5" fill="none" stroke="#7c2d12" stroke-width="2"/>
    <!-- Hot Cardamom Tea Liquid Level -->
    <ellipse cx="100" cy="80" rx="31" ry="8" fill="url(#teaGrad)"/>
    <!-- Frothy Milk Foam Top with Saffron Strands -->
    <ellipse cx="100" cy="79" rx="29" ry="7" fill="#fed7aa" opacity="0.9"/>
    <!-- Saffron Strands on top -->
    <path d="M92,78 Q96,75 100,79" stroke="#b91c1c" stroke-width="1.5" fill="none"/>
    <path d="M102,77 Q106,80 110,77" stroke="#b91c1c" stroke-width="1.5" fill="none"/>
    <circle cx="95" cy="81" r="1" fill="#78350f"/>
    <circle cx="105" cy="80" r="1" fill="#78350f"/>
    <!-- Cardamom pod peeking -->
    <ellipse cx="101" cy="79" rx="3.5" ry="2" fill="#15803d"/>
    <!-- Steaming Hot Wisps -->
    <path d="M85,55 Q78,40 86,28" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    <path d="M100,50 Q108,35 98,22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M115,55 Q122,40 114,28" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
  </g>
</svg>'''

# 2. Peri-Peri Paneer Pizza (Dedicated distinct graphic)
svg_assets["assets/dishes/pizza-peri-paneer.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <filter id="pPanSh" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>
  <g filter="url(#pPanSh)">
    <!-- Charred Woodfired Crust -->
    <circle cx="100" cy="100" r="84" fill="#c05621"/>
    <circle cx="100" cy="100" r="82" fill="#dd6b20"/>
    <ellipse cx="40" cy="75" rx="5" ry="3" fill="#2d1508" opacity="0.7"/>
    <ellipse cx="155" cy="68" rx="6" ry="3" fill="#2d1508" opacity="0.7"/>
    <!-- Peri-Peri Spicy Marinara Base -->
    <circle cx="100" cy="100" r="70" fill="#b91c1c"/>
    <circle cx="100" cy="100" r="66" fill="#fde047"/>
    <!-- Cubes of Golden Spiced Peri-Peri Paneer -->
    <rect x="70" y="65" width="16" height="15" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <rect x="114" y="68" width="16" height="15" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <rect x="92" y="92" width="18" height="16" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <rect x="68" y="116" width="16" height="15" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <rect x="118" y="112" width="16" height="15" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <!-- Bell Pepper Green Triangles -->
    <polygon points="60,90 68,80 72,92" fill="#16a34a"/>
    <polygon points="128,88 138,80 140,94" fill="#16a34a"/>
    <polygon points="95,124 105,116 108,130" fill="#16a34a"/>
    <!-- Sliced Pickled Jalapeños -->
    <circle cx="90" cy="72" r="5" fill="#15803d"/><circle cx="90" cy="72" r="2.5" fill="#4ade80"/>
    <circle cx="110" cy="130" r="5" fill="#15803d"/><circle cx="110" cy="130" r="2.5" fill="#4ade80"/>
    <circle cx="130" cy="105" r="5" fill="#15803d"/><circle cx="130" cy="105" r="2.5" fill="#4ade80"/>
    <!-- Sweet Golden Corn Kernels -->
    <circle cx="80" cy="100" r="3" fill="#eab308"/>
    <circle cx="104" cy="80" r="3" fill="#eab308"/>
    <circle cx="85" cy="120" r="3" fill="#eab308"/>
    <!-- Fiery Peri-Peri Dust -->
    <circle cx="78" cy="72" r="1.5" fill="#dc2626"/>
    <circle cx="122" cy="75" r="1.5" fill="#dc2626"/>
    <circle cx="100" cy="100" r="1.5" fill="#dc2626"/>
  </g>
</svg>'''

# 3. Smoky BBQ Onion Crunch Burger (Dedicated graphic)
svg_assets["assets/dishes/burger-bbq-bacon.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <filter id="bbqBSh" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <g filter="url(#bbqBSh)">
    <ellipse cx="100" cy="180" rx="74" ry="12" fill="#2d3748" opacity="0.4"/>
    <!-- Bottom Bun -->
    <path d="M45,152 Q100,166 155,152 Q158,168 145,172 Q100,178 55,172 Q42,168 45,152 Z" fill="#dd6b20"/>
    <!-- Smashed Beef Patty -->
    <rect x="40" y="136" width="120" height="15" rx="7" fill="#381c0d"/>
    <!-- Sharp Melted Cheddar Cheese -->
    <path d="M38,135 Q70,131 100,135 Q130,131 162,135 L158,145 Q148,158 140,147 L124,148 Q118,160 110,149 L88,150 Q80,163 72,149 L52,150 Q44,158 40,144 Z" fill="#f59e0b"/>
    <!-- Smoky BBQ Sauce Drizzle Dripping -->
    <path d="M45,128 Q100,120 155,128 L150,136 Q135,142 120,135 Q105,144 90,135 Q75,142 60,136 Z" fill="#451a03"/>
    <!-- Crispy Golden Onion Ring Tanglers on Top -->
    <ellipse cx="80" cy="116" rx="22" ry="10" fill="none" stroke="#d97706" stroke-width="5"/>
    <ellipse cx="120" cy="118" rx="20" ry="9" fill="none" stroke="#d97706" stroke-width="5"/>
    <ellipse cx="100" cy="112" rx="24" ry="10" fill="none" stroke="#f59e0b" stroke-width="4"/>
    <!-- Crispy Bacon Strips -->
    <path d="M48,124 Q75,118 100,122 Q125,118 152,124" stroke="#7f1d1d" stroke-width="5" stroke-linecap="round"/>
    <!-- Top Brioche Bun -->
    <path d="M40,102 C40,46 160,46 160,102 C160,105 40,105 40,102 Z" fill="#ea580c"/>
    <path d="M42,100 C42,48 158,48 158,100 Z" fill="#f97316"/>
    <!-- Sesame Seeds -->
    <ellipse cx="80" cy="68" rx="3" ry="1.5" transform="rotate(-15 80 68)" fill="#fffaf0"/>
    <ellipse cx="102" cy="62" rx="3" ry="1.5" transform="rotate(5 102 62)" fill="#fffaf0"/>
    <ellipse cx="122" cy="70" rx="3" ry="1.5" transform="rotate(25 122 70)" fill="#fffaf0"/>
    <ellipse cx="92" cy="80" rx="3" ry="1.5" transform="rotate(-5 92 80)" fill="#fffaf0"/>
    <ellipse cx="114" cy="82" rx="3" ry="1.5" transform="rotate(15 114 82)" fill="#fffaf0"/>
  </g>
</svg>'''

# 4. Drinks Studio Base: Transparent Faceted Highball Glass
svg_assets["assets/dishes/base-drink.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <filter id="drSh" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>
  <g filter="url(#drSh)">
    <!-- Coaster / Shadow -->
    <ellipse cx="100" cy="180" rx="55" ry="12" fill="#1e293b" opacity="0.6"/>
    <ellipse cx="100" cy="178" rx="50" ry="10" fill="#334155" opacity="0.5"/>
    <!-- Glass Foot -->
    <ellipse cx="100" cy="172" rx="36" ry="7" fill="#64748b" opacity="0.5"/>
    <!-- Clear Glass Outer Outline -->
    <path d="M68,55 L76,170 Q100,176 124,170 L132,55 Z" fill="#e2e8f0" opacity="0.25" stroke="#94a3b8" stroke-width="2"/>
    <!-- Rim -->
    <ellipse cx="100" cy="55" rx="32" ry="7" fill="none" stroke="#cbd5e1" stroke-width="2.5"/>
    <!-- Crystal Ice Cubes at Bottom of Glass -->
    <rect x="80" y="145" width="18" height="18" rx="4" fill="#ffffff" opacity="0.75" stroke="#94a3b8" stroke-width="1"/>
    <rect x="102" y="142" width="16" height="16" rx="4" fill="#ffffff" opacity="0.7" stroke="#94a3b8" stroke-width="1"/>
    <rect x="88" y="125" width="18" height="18" rx="4" fill="#ffffff" opacity="0.8" stroke="#94a3b8" stroke-width="1"/>
    <rect x="100" y="105" width="16" height="16" rx="4" fill="#ffffff" opacity="0.7" stroke="#94a3b8" stroke-width="1"/>
    <!-- Glass reflection highlight -->
    <path d="M74,65 L80,165" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
  </g>
</svg>'''

# 5. Dedicated Ingredient SVGs:
# Cheddar Cheese Slice
svg_assets["assets/food/cheddar-slice.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M15,25 L85,15 L78,78 L12,82 Z" fill="#f59e0b"/>
  <path d="M18,28 L82,18 L75,75 L15,79 Z" fill="#fbbf24"/>
  <path d="M15,79 Q30,90 45,82 Q60,92 75,75" fill="#f59e0b"/>
</svg>'''

# Smashed Beef Patty
svg_assets["assets/food/patty-beef.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <ellipse cx="50" cy="50" rx="45" ry="38" fill="#451a03"/>
  <ellipse cx="50" cy="48" rx="42" ry="35" fill="#78350f"/>
  <line x1="20" y1="35" x2="80" y2="35" stroke="#270f03" stroke-width="3"/>
  <line x1="15" y1="50" x2="85" y2="50" stroke="#270f03" stroke-width="3.5"/>
  <line x1="22" y1="65" x2="78" y2="65" stroke="#270f03" stroke-width="3"/>
</svg>'''

# Crispy Zinger Patty
svg_assets["assets/food/patty-zinger.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M15,50 Q20,25 50,20 Q80,22 88,48 Q85,78 52,82 Q18,80 15,50 Z" fill="#b45309"/>
  <path d="M18,50 Q22,28 50,24 Q77,26 84,48 Q81,75 52,78 Q22,76 18,50 Z" fill="#d97706"/>
  <circle cx="35" cy="40" r="3" fill="#92400e"/><circle cx="65" cy="38" r="4" fill="#92400e"/>
  <circle cx="50" cy="60" r="4" fill="#92400e"/><circle cx="70" cy="62" r="3" fill="#92400e"/>
</svg>'''

# Paneer Steak
svg_assets["assets/food/patty-paneer.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="15" y="25" width="70" height="52" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <line x1="25" y1="28" x2="45" y2="74" stroke="#b45309" stroke-width="3"/>
  <line x1="45" y1="28" x2="65" y2="74" stroke="#b45309" stroke-width="3"/>
  <line x1="65" y1="28" x2="80" y2="62" stroke="#b45309" stroke-width="3"/>
</svg>'''

# Mozzarella Shreds
svg_assets["assets/food/mozzarella.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M20,40 Q40,30 75,35" stroke="#fef9c3" stroke-width="6" stroke-linecap="round"/>
  <path d="M15,55 Q50,45 85,50" stroke="#fef08a" stroke-width="7" stroke-linecap="round"/>
  <path d="M25,70 Q60,65 80,72" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  <path d="M30,25 Q55,20 70,28" stroke="#fef08a" stroke-width="5" stroke-linecap="round"/>
</svg>'''

# Pepperoni Slices
svg_assets["assets/food/pepperoni.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="45" cy="45" r="28" fill="#991b1b"/>
  <circle cx="45" cy="45" r="25" fill="#dc2626"/>
  <circle cx="40" cy="42" r="3" fill="#f87171"/><circle cx="52" cy="48" r="2.5" fill="#ffffff"/>
  <circle cx="68" cy="62" r="24" fill="#991b1b"/>
  <circle cx="68" cy="62" r="21" fill="#dc2626"/>
  <circle cx="64" cy="58" r="2.5" fill="#f87171"/>
</svg>'''

# Black Olives Slices
svg_assets["assets/food/olives.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="40" cy="45" r="22" fill="#1e293b"/>
  <circle cx="40" cy="45" r="10" fill="#0f172a"/>
  <circle cx="68" cy="60" r="20" fill="#1e293b"/>
  <circle cx="68" cy="60" r="9" fill="#0f172a"/>
</svg>'''

# Jalapenos
svg_assets["assets/food/jalapeno.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="42" cy="45" r="24" fill="#15803d"/>
  <circle cx="42" cy="45" r="14" fill="#4ade80"/>
  <circle cx="40" cy="42" r="3" fill="#14532d"/><circle cx="45" cy="48" r="2" fill="#14532d"/>
  <circle cx="68" cy="62" r="22" fill="#15803d"/>
  <circle cx="68" cy="62" r="12" fill="#4ade80"/>
</svg>'''

# Fresh Basil Leaves
svg_assets["assets/food/basil.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M30,70 C10,40 40,15 70,25 C85,55 60,85 30,70 Z" fill="#16a34a"/>
  <path d="M30,70 C45,50 60,35 70,25" stroke="#86efac" stroke-width="2.5" fill="none"/>
</svg>'''

# Boiled Egg Half
svg_assets["assets/food/boiled-egg.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <ellipse cx="50" cy="50" rx="36" ry="44" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <ellipse cx="50" cy="54" rx="22" ry="24" fill="#eab308"/>
  <ellipse cx="48" cy="52" rx="19" ry="20" fill="#facc15"/>
</svg>'''

# Fried Birista Onions
svg_assets["assets/food/birista.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M20,35 Q50,20 80,30" stroke="#78350f" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M15,50 Q45,35 85,45" stroke="#92400e" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M25,65 Q55,50 80,60" stroke="#78350f" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M30,80 Q60,70 75,78" stroke="#451a03" stroke-width="4.5" stroke-linecap="round" fill="none"/>
</svg>'''

# Tandoori Leg Piece
svg_assets["assets/food/tandoori-leg.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Bone -->
  <path d="M70,30 Q85,15 88,25 Q78,35 70,30" fill="#ffffff"/>
  <!-- Meat -->
  <path d="M20,75 C10,50 35,35 65,35 C80,35 85,50 80,65 C75,80 50,85 20,75 Z" fill="#dc2626"/>
  <!-- Cuts -->
  <line x1="40" y1="50" x2="55" y2="65" stroke="#7f1d1d" stroke-width="3"/>
  <line x1="55" y1="45" x2="70" y2="60" stroke="#7f1d1d" stroke-width="3"/>
</svg>'''

# Shish Tawook Skewer
svg_assets["assets/food/shish-tawook.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <line x1="15" y1="85" x2="85" y2="15" stroke="#94a3b8" stroke-width="3"/>
  <rect x="25" y="60" width="18" height="18" rx="4" transform="rotate(-45 25 60)" fill="#eab308"/>
  <rect x="45" y="40" width="18" height="18" rx="4" transform="rotate(-45 45 40)" fill="#dc2626"/>
  <rect x="65" y="20" width="18" height="18" rx="4" transform="rotate(-45 65 20)" fill="#eab308"/>
</svg>'''

# Seekh Kebab
svg_assets["assets/food/seekh-kebab.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <line x1="10" y1="50" x2="90" y2="50" stroke="#94a3b8" stroke-width="2.5"/>
  <rect x="20" y="40" width="60" height="20" rx="10" fill="#78350f"/>
  <ellipse cx="35" cy="50" rx="2" ry="7" fill="#451a03"/>
  <ellipse cx="50" cy="50" rx="2" ry="7" fill="#451a03"/>
  <ellipse cx="65" cy="50" rx="2" ry="7" fill="#451a03"/>
</svg>'''

# Spicy Mint Chutney
svg_assets["assets/food/mint-chutney.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="38" fill="#15803d"/>
  <circle cx="50" cy="50" r="30" fill="#16a34a"/>
  <circle cx="48" cy="48" r="22" fill="#22c55e"/>
  <circle cx="45" cy="45" r="5" fill="#86efac"/>
</svg>'''

# Cooling Raita
svg_assets["assets/food/raita.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="38" fill="#f8fafc"/>
  <circle cx="50" cy="50" r="32" fill="#ffffff"/>
  <rect x="35" y="42" width="6" height="6" rx="1" fill="#4ade80"/>
  <rect x="52" y="38" width="6" height="6" rx="1" fill="#4ade80"/>
  <rect x="46" y="55" width="6" height="6" rx="1" fill="#4ade80"/>
  <circle cx="58" cy="52" r="1.5" fill="#78350f"/>
</svg>'''

# Boba Tapioca Pearls
svg_assets["assets/food/boba-pearls.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="32" cy="42" r="16" fill="#1e1b18"/><circle cx="28" cy="38" r="3" fill="#ffffff" opacity="0.6"/>
  <circle cx="65" cy="38" r="15" fill="#1e1b18"/><circle cx="62" cy="34" r="3" fill="#ffffff" opacity="0.6"/>
  <circle cx="48" cy="68" r="17" fill="#1e1b18"/><circle cx="44" cy="64" r="3.5" fill="#ffffff" opacity="0.6"/>
</svg>'''

# Vanilla Ice Cream Scoop
svg_assets["assets/food/ice-cream-scoop.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="36" fill="#fef08a"/>
  <circle cx="50" cy="50" r="32" fill="#fef9c3"/>
  <path d="M25,70 Q50,85 75,70 Q60,78 40,75 Z" fill="#fef08a"/>
  <circle cx="40" cy="40" r="1" fill="#78350f"/><circle cx="60" cy="45" r="1" fill="#78350f"/>
</svg>'''

# Whipped Cream
svg_assets["assets/food/whipped-cream.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M20,75 C15,55 35,45 45,50 C42,35 60,25 65,35 C75,25 90,40 85,55 C92,65 85,78 50,78 C30,78 20,75 20,75 Z" fill="#ffffff"/>
  <path d="M30,70 Q50,60 70,70" stroke="#f1f5f9" stroke-width="3" fill="none"/>
</svg>'''

# Crushed Oreos
svg_assets["assets/food/crushed-oreo.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <polygon points="25,35 40,25 45,42" fill="#18181b"/>
  <polygon points="55,25 75,30 68,48" fill="#18181b"/>
  <polygon points="35,55 58,50 50,75" fill="#18181b"/>
  <polygon points="65,60 85,55 80,78" fill="#18181b"/>
  <circle cx="48" cy="40" r="3" fill="#ffffff"/>
</svg>'''

# Lime Slice
svg_assets["assets/food/lime-slice.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="38" fill="#16a34a"/>
  <circle cx="50" cy="50" r="32" fill="#bbf7d0"/>
  <circle cx="50" cy="50" r="30" fill="#22c55e"/>
  <circle cx="50" cy="50" r="6" fill="#bbf7d0"/>
</svg>'''

# Mint Leaves
svg_assets["assets/food/mint-leaves.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M35,65 C15,35 45,15 75,25 C90,55 65,85 35,65 Z" fill="#15803d"/>
  <path d="M35,65 C50,45 65,35 75,25" stroke="#4ade80" stroke-width="2.5" fill="none"/>
</svg>'''

# Mango Pulp
svg_assets["assets/food/mango-pulp.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="38" fill="#ea580c"/>
  <circle cx="50" cy="50" r="32" fill="#f59e0b"/>
  <circle cx="48" cy="46" r="24" fill="#fbbf24"/>
</svg>'''

# Chocolate Syrup Drizzle
svg_assets["assets/food/chocolate-syrup.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M20,35 Q50,15 75,35 Q50,55 30,75 Q60,95 85,75" stroke="#381c0d" stroke-width="10" stroke-linecap="round" fill="none"/>
  <path d="M22,35 Q50,18 73,35" stroke="#5c2e17" stroke-width="5" stroke-linecap="round" fill="none"/>
</svg>'''

for path, content in svg_assets.items():
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Generated {path}")

print(f"Done! Generated {len(svg_assets)} assets.")

