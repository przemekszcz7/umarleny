import { Dish, Review, OpeningHour, DailySpecial } from "./types";

export const MENU_ITEMS: Dish[] = [
  {
    id: "m1",
    name: "Domowe Pierogi",
    description: "Tradycyjne z farszem ruskim, z kapustą i grzybami lub soczystym mięsem, okraszane cebulką.",
    category: "Dania Mączne"
  },
  {
    id: "m2",
    name: "Aromatyczne Kopytka",
    description: "Delikatne kluseczki ziemniaczane, podawane z gulaszem lub tradycyjną okrasą.",
    category: "Dania Mączne"
  },
  {
    id: "m3",
    name: "Naleśniki na Słodko i Słono",
    description: "Cienkie i puszyste, z twarogiem słodkim lub wytrawnym farszem szpinakowym.",
    category: "Dania Mączne"
  },
  {
    id: "m4",
    name: "Krokiety Wyborne",
    description: "Chrupiące, z kapustą i grzybami lub mięsem, idealnie pasujące do czystego barszczu.",
    category: "Dania Mączne"
  },
  {
    id: "m5",
    name: "Gołąbki Tradycyjne",
    description: "Zawijane w liście kapusty z mięsnym nadzieniem i ryżem, otulone gęstym sosem pomidorowym.",
    category: "Dania Klasyczne"
  },
  {
    id: "m6",
    name: "Kotlet Wieprzowy",
    description: "Klasyka polskiego stołu. Soczysty, chrupiąca panierka, smażony na złoty kolor.",
    category: "Dania Mięsne"
  },
  {
    id: "m7",
    name: "Kotlet Drobiowy",
    description: "Lekki i delikatny filet z piersi kurczaka w złotej, chrupiącej otoczce.",
    category: "Dania Mięsne"
  },
  {
    id: "m8",
    name: "Gulasz Domowy",
    description: "Wolno gotowane, kruche mięso wieprzowe w gęstym, aromatycznym sosie własnym z warzywami.",
    category: "Dania Klasyczne"
  },
  {
    id: "m9",
    name: "Zrazy Wołowe",
    description: "Tradycyjne zrazy zawijane z boczkiem, ogórkiem kiszonym i musztardą w ciemnym sosie pieczeniowym.",
    category: "Dania Klasyczne"
  },
  {
    id: "m10",
    name: "Zupa Dnia",
    description: "Codziennie inna, ugotowana na bogatym wywarze drobiowo-wołowym ze świeżymi warzywami.",
    category: "Zupy"
  },
  {
    id: "m11",
    name: "Zestaw Dodatków Domowych",
    description: "Ziemniaki z wody z koperkiem, aksamitne purée, frytki oraz zestaw świeżych surówek sezonowych.",
    category: "Dodatki"
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Poniedziałek", hours: "08:00 - 16:00", isClosed: false },
  { day: "Wtorek", hours: "08:00 - 16:00", isClosed: false },
  { day: "Środa", hours: "08:00 - 16:00", isClosed: false },
  { day: "Czwartek", hours: "08:00 - 16:00", isClosed: false },
  { day: "Piątek", hours: "08:00 - 16:00", isClosed: false },
  { day: "Sobota", hours: "ZAMKNIĘTE", isClosed: true },
  { day: "Niedziela", hours: "ZAMKNIĘTE", isClosed: true }
];

export const DAILY_SPECIAL: DailySpecial = {
  date: "Piątek, 22 Maja",
  soup: "Barszcz biały",
  mainCourse: "Udko pieczone z ziemniakami i surówką",
  replacements: [
    "Ryba w panierce, ziemniaki i surówka",
    "Kartacze z okrasą i surówka",
    "Gołąbki w sosie z ziemniakami"
  ]
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Karolina S.",
    text: "Bardzo Polecam najlepsze obiady w mieście ❤️✅",
    rating: 5,
    date: "Facebook"
  },
  {
    id: "r2",
    author: "Andrzej W.",
    text: "przepysznie zdrowo tanio A obsługa jest niesamowita szacunek dla pań które tam pracują wielki dobre duszyczki",
    rating: 5,
    date: "Facebook"
  },
  {
    id: "r3",
    author: "Zofia K.",
    text: "Najlepsze jedzonko jakie jadłam. Smacznie i tanio polecam!!!",
    rating: 5,
    date: "Facebook"
  }
];
