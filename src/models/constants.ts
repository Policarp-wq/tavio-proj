import { IOffer, IOfferPreview } from "./IOffer";
import { IUser } from "./IUser";

export const NO_IMAGE = "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"; 
export const STAR_FILLED = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCHnf6ZmtTdGI8HSdyp-X3WZe7N_dHxTGA&s";

export const User: IUser = {
  id: "irfejwp42opej",
  login: "Policarp",
  name: "Eugene",
  phone: "89123296009",
  registerDate: new Date("2024-05-22"),
  rating: 0,
  iconUrl: "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png"
}

export const mockOffers: IOffer[] = [
  {
    id: "1",
    ownerId: "irfejwp42opej",
    name: "Продажа авто",
    price: 450000,
    images: ["https://gouggi.ru/wa-data/public/shop/products/92/17/1792/images/12488/12488.970.jpg",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
    ],
    description: "Продаётся Toyota Camry 2.5 AT, 2018 года выпуска. Автомобиль в отличном состоянии, без ДТП, полностью обслужен. Пробег — 96 000 км. Надёжный бензиновый двигатель объёмом 2.5 л, автоматическая коробка передач. Комплектация Comfort Plus: климат-контроль, подогрев сидений, камера заднего вида, круиз-контроль. Чистый, ухоженный салон, в машине не курили. Один владелец, ПТС оригинал. Осмотр возможен в Москве. Торг у капота.",
    category: "Транспорт",
    address: "Москва, ул. Ленина, 10",
    publishDate: new Date("2024-05-22"),  
  
  },
  {
    id: "1",
    ownerId: "1",
    name: "Ремонт техники",
    price: 2000,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Чиним телефоны, ноутбуки и другую электронику",
    category: "Услуга",
    address: "Санкт-Петербург, Невский проспект, 50",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "2",
    name: "Зимняя куртка",
    price: 3500,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Теплая и стильная куртка на зиму",
    category: "Одежда",
    address: "Екатеринбург, ул. Мира, 22",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "2",
    name: "Фары на BMW",
    price: 8000,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Оригинальные фары в отличном состоянии",
    category: "Запчасти",
    address: "Казань, ул. Баумана, 15",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "3",
    name: "Настольная лампа",
    price: 1200,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Удобная лампа для рабочего стола",
    category: "Другое",
    address: "Нижний Новгород, ул. Горького, 18",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "1",
    name: "Услуги грузчиков",
    price: 1500,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Переезды, доставка, погрузка — быстро и аккуратно",
    category: "Услуга",
    address: "Новосибирск, Красный проспект, 30",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "3",
    name: "Кожаные ботинки",
    price: 5000,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Новые, 42 размер, не подошли",
    category: "Одежда",
    address: "Челябинск, ул. Труда, 5",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "2",
    name: "Лобовое стекло",
    price: 6000,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Для Toyota Camry, без трещин",
    category: "Запчасти",
    address: "Ростов-на-Дону, ул. Пушкинская, 12",
    
    publishDate: new Date("2024-05-22"),
  
  },
  {
    id: "1",
    ownerId: "2",
    name: "Детская коляска",
    price: 9000,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Состояние отличное, почти не использовалась",
    category: "Транспорт",
    address: "Самара, ул. Победы, 3",
    publishDate: new Date("2024-05-22"),  
  
  },
  {
    id: "1",
    ownerId: "2",
    name: "Курс английского языка",
    price: 2500,
    images: ["https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"],
    description: "Индивидуальные занятия онлайн",
    category: "Услуга",
    publishDate: new Date("2024-05-22"),  address: "Пермь, ул. Ленина, 77",
  
  },
]
