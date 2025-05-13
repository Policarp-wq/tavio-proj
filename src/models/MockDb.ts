import { IOffer } from "./IOffer";
import { IUser } from "./IUser";
import { Categories, Category } from "./Category";

const userImages: string[] = [
    "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
    "https://myvetbyronbay.com.au/wp-content/uploads/sites/37/2023/09/how-to-keep-your-indoor-cat-happy.jpg",
    "https://unanything.fandom.com/wiki/Billy_Herrington?file=Billy.jpg"
];

const offerImages: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFF2714JCaNKpMJ6EufCQIOjSqDfwmI2T4A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2z6mbNeIPC8_8x_pD4j8F50NXybk5l2k9g&s",
    "https://gouggi.ru/wa-data/public/shop/products/92/17/1792/images/12488/12488.970.jpg",
    "https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
];

// 5 пользователей
export const Users: IUser[] = [
    {
        id: "u1",
        login: "alice",
        name: "Alice Smith",
        phone: "1111111111",
        rating: 4.8,
        registerDate: new Date("2023-01-10"),
        iconUrl: userImages[0]
    },
    {
        id: "u2",
        login: "bob",
        name: "Bob Johnson",
        phone: "2222222222",
        rating: 4.2,
        registerDate: new Date("2023-02-15"),
        iconUrl: ""
    },
    {
        id: "u3",
        login: "carol",
        name: "Carol Lee",
        phone: "3333333333",
        rating: 4.5,
        registerDate: new Date("2023-03-20"),
        iconUrl: userImages[1]
    },
    {
        id: "u4",
        login: "dave",
        name: "Dave Brown",
        phone: "4444444444",
        rating: 4.0,
        registerDate: new Date("2023-04-25"),
        iconUrl: ""
    },
    {
        id: "u5",
        login: "eve",
        name: "Eve White",
        phone: "5555555555",
        rating: 4.9,
        registerDate: new Date("2023-05-30"),
        iconUrl: userImages[2]
    },
    {
    id: "irfejwp42opej",
    login: "Policarp",
    name: "Eugene",
    phone: "89123296009",
    registerDate: new Date("2024-05-22"),
    rating: 0,
    iconUrl: "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png"
    }
];

// 20 офферов, ownerId по кругу, изображения из offerImages, категории и адреса рандомные
const categories = Categories;

const addresses: string[] = [
    "Москва, ул. Ленина, 1",
    "Санкт-Петербург, Невский пр., 10",
    "Казань, ул. Баумана, 5",
    "Екатеринбург, пр. Ленина, 50",
    "Новосибирск, Красный пр., 20"
];

export const Offers: IOffer[] = Array.from({ length: 20 }, (_, i) => {
    const ownerId = Users[i % Users.length].id;
    return {
        id: `o${i + 1}`,
        name: `Оффер ${i + 1}`,
        price: 1000 + i * 500,
        ownerId,
        images: [offerImages[i % offerImages.length]],
        description: `Какое-то описание ${i + 1}`,
        category: categories[i % categories.length],
        address: addresses[i % addresses.length],
        publishDate: new Date(2024, 0, 1 + i)
    } as IOffer;
});

// 10 лайков, случайно распределённых между пользователями и офферами
export const Liked: { userId: string, offerId: string }[] = [
    { userId: "u1", offerId: "o2" },
    { userId: "u1", offerId: "o5" },
    { userId: "u2", offerId: "o1" },
    { userId: "u2", offerId: "o3" },
    { userId: "u3", offerId: "o4" },
    { userId: "u3", offerId: "o7" },
    { userId: "u4", offerId: "o6" },
    { userId: "u4", offerId: "o8" },
    { userId: "u5", offerId: "o10" },
    { userId: "u5", offerId: "o12" },
];