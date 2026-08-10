export const pageList = [
  { name: "Startseite", href: "#Home" },
  { name: "Speisekarte", href: "#Menu" },
  { name: "Über uns", href: "#About" },
  { name: "Galerie", href: "#Gallery" },
  { name: "Kontakt", href: "#Contact" },
  { name: "Reservierung", href: "#Reservation" }
]

export const openingHours = [
  { day: "Mo - Di", hoursBegin: "", hoursEnd: "", isOpen: false},
  { day: "Mi - Do", hoursBegin: "17:30", hoursEnd: "23:00", isOpen: true},
  { day: "Fr - Sa", hoursBegin: "12:00", hoursEnd: "00:00", isOpen: true},
  { day: "So & Ftg", hoursBegin: "12:00", hoursEnd: "22:00", isOpen: true},
]

export const contactInfo = {
  address: "Stauffenbergstraße 1",
  city: "70173 Stuttgart",
  phone: "+49 69 987 654 32",
  email: "kontakt@spanischer-traum.de"
}

export const menu = {
  Tapas: [
    { name: "Patatas Bravas", tag: ["vegan"], ingredients: "Knusprige Kartoffeln, scharfe Tomaten-Aioli, geräucherter Paprika", price: 9 },
    { name: "Gambas al Ajillo", tag: [], ingredients: "Riesengarnelen, Knoblauch, Weißwein, frische Petersilie", price: 16 },
    { name: "Pan con Tomate", tag: ["vegan"], ingredients: "Geröstetes Brot, geriebene Tomaten, Olivenöl extra vergine, Fleur de Sel", price: 7 },
    { name: "Jamón Ibérico", tag: [], ingredients: "36 Monate gereifter Ibérico-Schinken, handgeschnitten, Manchego", price: 22 },
    { name: "Croquetas Caseras", tag: [], ingredients: "Hausgemachte Bechamel-Kroketten mit Serranoschinken und Käse", price: 11 },
    { name: "Pimientos de Padrón", tag: ["vegan"], ingredients: "Gegrillte galicische Paprika, Meersalz, Olivenöl", price: 8 },
  ],
  Hauptgerichte: [],
  Desserts: [],
  Getränke: []
}