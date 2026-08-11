export const pageList = [
  { name: "Startseite", path: "/" },
  { name: "Speisekarte", path: "/menu" },
  { name: "Über uns", path: "/about" },
  { name: "Galerie", path: "/gallery" },
  { name: "Kontakt", path: "/contact" },
  { name: "Reservierung", path: "/reserve" }
]

export const openingHours = [
  { day: "Mo - Di", hoursBegin: "", hoursEnd: "", isOpen: false },
  { day: "Mi - Do", hoursBegin: "17:30", hoursEnd: "23:00", isOpen: true },
  { day: "Fr - Sa", hoursBegin: "12:00", hoursEnd: "00:00", isOpen: true },
  { day: "So & Ftg", hoursBegin: "12:00", hoursEnd: "22:00", isOpen: true },
]

export const contactInfo = {
  address: "Stauffenbergstraße 1",
  city: "70173 Stuttgart",
  phone: "+49 69 987 654 32",
  email: "kontakt@spanischer-traum.de"
}

export const menu = [
  {
    name: "Tapas", dishes: [
      { name: "Patatas Bravas", tag: ["vegan"], desc: "Knusprige Kartoffeln, scharfe Tomaten-Aioli, geräucherter Paprika", price: 9 },
      { name: "Gambas al Ajillo", tag: [], desc: "Riesengarnelen, Knoblauch, Weißwein, frische Petersilie", price: 16 },
      { name: "Pan con Tomate", tag: ["vegan"], desc: "Geröstetes Brot, geriebene Tomaten, Olivenöl extra vergine, Fleur de Sel", price: 7 },
      { name: "Jamón Ibérico", tag: [], desc: "36 Monate gereifter Ibérico-Schinken, handgeschnitten, Manchego", price: 22 },
      { name: "Croquetas Caseras", tag: [], desc: "Hausgemachte Bechamel-Kroketten mit Serranoschinken und Käse", price: 11 },
      { name: "Pimientos de Padrón", tag: ["vegan"], desc: "Gegrillte galicische Paprika, Meersalz, Olivenöl", price: 8 }
    ]
  },
  {
    name: "Hauptgerichte", dishes: [
      { name: "Paella Valenciana", tag: [], desc: "Authentische Valencia-Paella mit Hähnchen, Kaninchen, grünen Bohnen und Safran (mind. 2 Personen)", price: 28 },
      { name: "Paella de Mariscos", tag: [], desc: "Meeresfrüchte-Paella mit Garnelen, Muscheln, Tintenfisch und Safran-Reis", price: 32 },
      { name: "Cochinillo Asado", tag: [], desc: "Spanisches Spanferkel aus dem Ofen, Rosmarinkartoffeln, Bratjus", price: 38 },
      { name: "Dorada a la Sal", tag: [], desc: "Dorade in der Salzkruste gebacken, Zitronenöl, Gemüse der Saison", price: 34 },
      { name: "Cordero al Chilindrón", tag: [], desc: "Lammrücken aus Aragón, Tomaten-Paprika-Sauce, Rosmarinkartoffeln", price: 36 },
      { name: "Berenjenas con Miel", tag: ["vegetarisch"], desc: "Frittierte Auberginen mit Honig und Ziegenkäse, saisonaler Salat", price: 19 }
    ]
  },
  { name: "Desserts", dishes: [
      { name: "Crema Catalana", tag: ["vegetarisch"], desc: "Katalanische Creme mit karamellisiertem Zucker, Zimt, Zitronenschale", price: 9 },
      { name: "Churros con Chocolate", tag: ["vegan"], desc: "Hausgemachte Churros mit heißer Schokoladen-Sauce", price: 10 },
      { name: "Tarta de Santiago", tag: ["vegetarisch"], desc: "Galizischer Mandelkuchen, Puderzucker-Kreuz, Crème fraîche", price: 8 },
      { name: "Flan de Huevo", tag: ["vegetarisch"], desc: "Spanische Karamelcreme, Karamellsauce, frische Beeren", price: 8 },
      { name: "Helado Artesanal", tag: ["vegetarisch"], desc: "Hausgemachtes Eis der Saison (3 Kugeln), Mandelbrösel", price: 7 },
    ]
  },
  { name: "Getränke", dishes: [
      { name: "Sangría Roja", tag: ["vegan"], desc: "Hausgemachte rote Sangría mit Rotwein, Brandy, Orangen und Zimtstange", price: 8 },
      { name: "Sangría Blanca", tag: ["vegan"], desc: "Weiße Sangría mit Weißwein, Limette, Minze und Pfirsich", price: 8 },
      { name: "Rioja Reserva", tag: ["vegan"], desc: "Tempranillo, Rioja DOCa, 2019 — vollmundig, kirsch, Vanille", price: 11 },
      { name: "Albariño", tag: ["vegan"], desc: "Rias Baixas, 2022 - frisch, mineralisch, Zitrus, weißer Pfirsich", price: 9 },
      { name: "Horchata de Chufa", tag: ["vegan"], desc: "Traditionelles valencianisches Erfrischungsgetränk aus Erdmandeln", price: 5 },
      { name: "Café Solo / Cortado", tag: ["vegan"], desc: "Spanischer Espresso aus biologisch angebautem Arabica", price: 3 },
    ]
  }
]