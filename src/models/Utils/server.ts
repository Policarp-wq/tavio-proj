

// --- Типы ---
type Category = "Транспорт" | "Услуга" | "Одежда" | "Запчасти" | "Другое";
export const Categories: string[] = [
    "Транспорт",
    "Услуга",
    "Одежда",
    "Запчасти",
    "Другое",
  ] 

interface IOffer {
  id: string;
  name: string;
  price: number;
  ownerId: string;
  images: string[];
  description: string;
  category: Category;
  address: string;
  publishDate: Date;
}

interface IOfferRegisterInfo {
  name: string;
  price: number;
  ownerId: string;
  images: string[];
  description: string;
  category: Category;
}

interface IUser {
  id: string;
  login: string;
  name: string;
  phone: string;
  rating: number;
  registerDate: Date;
  iconUrl: string;
}

interface IRegisterInfo {
  login: string;
  password: string;
  name: string;
  phone: string;
  iconUrl: string;
}

interface ILoginInfo {
  login: string;
  password: string;
}

const userImages: string[] = [
    "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
    "https://www.pointsoflight.gov.uk/wp-content/uploads/2018/01/Olu-Alake.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Billy_Herrington.jpg"
];

const offerImages: string[] = [
    "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg.webp?itok=4TjwcpU9",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2z6mbNeIPC8_8x_pD4j8F50NXybk5l2k9g&s",
    "https://gouggi.ru/wa-data/public/shop/products/92/17/1792/images/12488/12488.970.jpg",
    "https://i5.walmartimages.com/seo/Ralsei-Plush-Deltarune-Ralsei-Plushie-Dolls-9-8-Cute-Stuffed-Animal-Ralsei-Plush-Toys-Cartoon-Soft-Stuffed-Ralsei-Collection-Toys-Birthday-Gifts-Kids_c6bc177d-7dcf-468b-b575-adb37ec44788.f29474b53f350f272f3c47a234d920b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
];

// 5 пользователей
let users: IUser[] = [
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
        iconUrl: userImages[2]
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
    login: "sans@mail.ru",
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

let offers: IOffer[] = Array.from({ length: 20 }, (_, i) => {
    let ownerId = users[i % users.length].id;
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


// --- Данные ---
let passwords: Record<string, string> = {}; 

function parseUrl(url: string) {
    const u = new URL(url, "http://localhost");
    return u;
}

window.fetch = async (input, init) => {
    const url = typeof input === "string"
        ? input
        : input instanceof Request
            ? input.url
            : input instanceof URL
                ? input.toString()
                : "";
    const method = (init?.method || "GET").toUpperCase();

    // /api/offers
    if (url.match(/\/api\/offers$/) && method === "GET") {
        return new Response(JSON.stringify(offers), { status: 200 });
    }

    // /api/offers/:id
    const offerIdMatch = url.match(/\/api\/offers\/([^/]+)$/);
    if (offerIdMatch && method === "GET") {
        const offer = offers.find(o => o.id === offerIdMatch[1]);
        if (!offer) return new Response("Offer not found", { status: 404 });
        return new Response(JSON.stringify(offer), { status: 200 });
    }

    // /api/offers/user/:id
    const userOffersMatch = url.match(/\/api\/offers\/user\/([^/]+)$/);
    if (userOffersMatch && method === "GET") {
        const filtered = offers.filter(o => o.ownerId === userOffersMatch[1]);
        return new Response(JSON.stringify(filtered), { status: 200 });
    }

    // /api/users/:id
    const userIdMatch = url.match(/\/api\/users\/([^/]+)$/);
    if (userIdMatch && method === "GET") {
        const user = users.find(u => u.id === userIdMatch[1]);
        if (!user) return new Response("User not found", { status: 404 });
        return new Response(JSON.stringify(user), { status: 200 });
    }

    // /api/register
    if (url.match(/\/api\/register$/) && method === "POST") {
        const body = JSON.parse(init?.body as string);
        const id = `u${users.length + 1}`;
        const user = {
            ...body,
            id,
            rating: 0,
            registerDate: new Date().toISOString(),
            iconUrl: body.iconUrl || ""
        };
        users.push(user);
        passwords[body.login] = body.password;
        return new Response(JSON.stringify(user), { status: 200 });
    }

    // /api/login
    if (url.match(/\/api\/login$/) && method === "POST") {
        const body = JSON.parse(init?.body as string);
        const user = users.find(u => u.login === body.login);
        if (!user || (passwords[body.login] && passwords[body.login] !== body.password)) {
            return new Response("Invalid login or password", { status: 401 });
        }
        return new Response(JSON.stringify(user), { status: 200 });
    }

    // /api/offers (POST)
    if (url.match(/\/api\/offers$/) && method === "POST") {
        const body = JSON.parse(init?.body as string);
        const offer = {
            ...body,
            id: `o${offers.length + 1}`,
            address: "Не указан",
            publishDate: new Date().toISOString()
        };
        offers.push(offer);
        return new Response(JSON.stringify(true), { status: 200 });
    }

    // /api/offers/:id (DELETE)
    if (offerIdMatch && method === "DELETE") {
        const idx = offers.findIndex(o => o.id === offerIdMatch[1]);
        if (idx === -1) return new Response("Offer not found", { status: 404 });
        offers.splice(idx, 1);
        return new Response(JSON.stringify(true), { status: 200 });
    }

    // /api/offers/:id (PUT)
    if (offerIdMatch && method === "PUT") {
        const idx = offers.findIndex(o => o.id === offerIdMatch[1]);
        if (idx === -1) return new Response("Offer not found", { status: 404 });
        const body = JSON.parse(init?.body as string);
        offers[idx] = { ...offers[idx], ...body };
        return new Response(JSON.stringify(true), { status: 200 });
    }

    // fallback
    return new Response("Not found", { status: 404 });
};

// // --- Запуск ---
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });